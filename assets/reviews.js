// Google reviews carousel for the home page. Reads GOOGLE_REVIEWS from site.js; load before layout.js.
(() => {
  const root = document.getElementById('reviews');
  if (!root) return;
  const cfg = GOOGLE_REVIEWS;
  const track = root.querySelector('[data-track]');
  const summary = root.querySelector('[data-summary]');

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const decimal = n => n.toLocaleString('es-AR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  // Five stars filled in proportion to the rating (4,7 shows the fifth star partly filled)
  const stars = n => `
    <span class="relative inline-block whitespace-nowrap tracking-[0.18em]" role="img" aria-label="${decimal(n)} de 5 estrellas">
      <span class="text-ivory-200">★★★★★</span>
      <span class="absolute inset-y-0 left-0 overflow-hidden text-gold-500" style="width:${(n / 5) * 100}%">★★★★★</span>
    </span>`;
  const clip = (text, max = 240) => (text.length > max ? `${text.slice(0, text.lastIndexOf(' ', max))}…` : text);

  const renderSummary = () => {
    summary.innerHTML = cfg.places.map(pl => `
      <a href="${esc(pl.maps)}" target="_blank" rel="noopener" class="inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 ring-1 ring-ivory-200 transition hover:ring-gold-500">
        <span class="font-serif text-2xl font-semibold leading-none text-navy-900 lining-nums">${decimal(pl.rating)}</span>
        ${stars(pl.rating)}
        <span class="text-sm text-ink-soft">${pl.count.toLocaleString('es-AR')} opiniones · ${esc(pl.label)}</span>
      </a>`).join('');
  };

  const cardClass = 'flex w-[85%] shrink-0 snap-start flex-col rounded-[1.5rem] bg-white p-7 ring-1 ring-ivory-200 sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]';

  const sampleCard = i => `
    <article class="${cardClass}">
      ${stars(5)}
      <p class="mt-4 flex-1 font-serif text-xl leading-snug text-ink-muted">[Opinión de un cliente: se carga automáticamente desde Google]</p>
      <div class="mt-6 flex items-center gap-3 border-t border-ivory-200 pt-4">
        <span class="flex h-10 w-10 items-center justify-center rounded-full bg-ivory-100 font-serif text-lg text-gold-600">${i + 1}</span>
        <div><p class="text-sm font-semibold text-ink-muted">[Nombre del cliente]</p><p class="text-xs text-ink-muted">Reseña de Google</p></div>
      </div>
    </article>`;

  const reviewCard = r => `
    <article class="${cardClass}">
      ${stars(r.rating)}
      <p class="mt-4 flex-1 font-serif text-xl leading-snug text-navy-900">“${esc(clip(r.text))}”</p>
      <div class="mt-6 flex items-center gap-3 border-t border-ivory-200 pt-4">
        ${r.photo
          ? `<img src="${esc(r.photo)}" alt="" referrerpolicy="no-referrer" loading="lazy" class="h-10 w-10 rounded-full object-cover">`
          : `<span class="flex h-10 w-10 items-center justify-center rounded-full bg-ivory-100 font-serif text-lg text-gold-600">${esc(r.name.charAt(0))}</span>`}
        <div class="min-w-0">
          ${r.url ? `<a href="${esc(r.url)}" target="_blank" rel="noopener" class="block truncate text-sm font-semibold text-navy-900 hover:text-gold-700">${esc(r.name)}</a>` : `<p class="truncate text-sm font-semibold text-navy-900">${esc(r.name)}</p>`}
          <p class="text-xs text-ink-muted">${esc(r.when)}${r.when ? ' · ' : ''}${esc(r.place)} · Google</p>
        </div>
      </div>
    </article>`;

  // Carousel controls: scroll one card at a time, gentle autoplay that stops on hover or interaction
  const step = dir => {
    const card = track.firstElementChild;
    if (!card) return;
    const width = card.getBoundingClientRect().width + 24;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    if (dir > 0 && atEnd) track.scrollTo({ left: 0, behavior: 'smooth' });
    else track.scrollBy({ left: dir * width, behavior: 'smooth' });
  };
  root.querySelector('[data-prev]').addEventListener('click', () => { stop(); step(-1); });
  root.querySelector('[data-next]').addEventListener('click', () => { stop(); step(1); });
  let timer = null;
  const stop = () => { clearInterval(timer); timer = null; };
  const start = () => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    stop();
    timer = setInterval(() => step(1), 6000);
  };
  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);
  track.addEventListener('touchstart', stop, { passive: true });

  renderSummary();
  track.innerHTML = [0, 1, 2].map(sampleCard).join('');
  start();

  if (!cfg.apiKey) return;

  // Live reviews through the Google Maps JavaScript API (Places API New)
  const loadMaps = () => new Promise((resolve, reject) => {
    window.__trimarchiMapsReady = resolve;
    const s = document.createElement('script');
    s.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(cfg.apiKey)}&v=weekly&language=es&loading=async&callback=__trimarchiMapsReady`;
    s.async = true;
    s.onerror = reject;
    document.head.appendChild(s);
  });

  (async () => {
    try {
      await loadMaps();
      const { Place } = await google.maps.importLibrary('places');
      const reviews = [];
      for (const pl of cfg.places) {
        const { places } = await Place.searchByText({
          textQuery: pl.query,
          fields: ['displayName', 'rating', 'userRatingCount', 'reviews', 'googleMapsURI'],
          maxResultCount: 1
        });
        const place = places && places[0];
        if (!place) continue;
        if (place.rating) pl.rating = place.rating;
        if (place.userRatingCount) pl.count = place.userRatingCount;
        if (place.googleMapsURI) pl.maps = place.googleMapsURI;
        (place.reviews || [])
          .filter(r => (r.rating || 0) >= cfg.minRating && r.text)
          .forEach(r => reviews.push({
            rating: r.rating,
            text: r.text,
            name: (r.authorAttribution && r.authorAttribution.displayName) || 'Cliente de Google',
            photo: r.authorAttribution && r.authorAttribution.photoURI,
            url: r.authorAttribution && r.authorAttribution.uri,
            when: r.relativePublishTimeDescription || '',
            place: pl.label
          }));
      }
      renderSummary();
      if (reviews.length) {
        track.innerHTML = reviews.map(reviewCard).join('');
        track.scrollLeft = 0;
      }
    } catch (err) {
      console.warn('No se pudieron cargar las reseñas de Google:', err);
    }
  })();
})();
