// Google reviews carousel for the home page. Reads GOOGLE_REVIEWS and mountGoogleReviews from site.js; load before layout.js.
(() => {
  const root = document.getElementById('reviews');
  if (!root) return;

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const decimal = n => n.toLocaleString('es-AR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  // Five stars filled in proportion to the rating (4,7 shows the fifth star partly filled)
  const stars = n => `
    <span class="relative inline-block whitespace-nowrap tracking-[0.18em]" role="img" aria-label="${decimal(n)} de 5 estrellas">
      <span class="text-ivory-200">★★★★★</span>
      <span class="absolute inset-y-0 left-0 overflow-hidden text-gold-500" style="width:${(n / 5) * 100}%">★★★★★</span>
    </span>`;
  const clip = (text, max = 240) => (text.length > max ? `${text.slice(0, text.lastIndexOf(' ', max))}…` : text);

  const cardClass = 'flex w-[85%] shrink-0 snap-start flex-col rounded-[1.5rem] bg-white p-7 ring-1 ring-ivory-200 sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]';

  const summaryPill = pl => `
    <a href="${esc(pl.maps)}" target="_blank" rel="noopener" class="inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 ring-1 ring-ivory-200 transition hover:ring-gold-500">
      <span class="font-serif text-2xl font-semibold leading-none text-navy-900 lining-nums">${decimal(pl.rating)}</span>
      ${stars(pl.rating)}
      <span class="text-sm text-ink-soft">${pl.count.toLocaleString('es-AR')} opiniones · ${esc(pl.label)}</span>
    </a>`;

  const sampleCard = i => `
    <article class="${cardClass}">
      ${stars(5)}
      <p class="mt-4 flex-1 font-serif text-xl leading-snug text-ink-muted">[Opinión de un cliente: se carga automáticamente desde Google]</p>
      <div class="mt-6 flex items-center gap-3 border-t border-ivory-200 pt-4">
        <span class="flex h-10 w-10 items-center justify-center rounded-full bg-ivory-100 font-serif text-lg text-gold-600">${i + 1}</span>
        <div><p class="text-sm font-semibold text-ink-muted">[Nombre del cliente]</p><p class="text-xs text-ink-muted">Reseña de Google</p></div>
      </div>
    </article>`;

  // Google asks for each author's photo, name and profile, and a link to the review on Maps
  const reviewCard = r => `
    <article class="${cardClass}">
      ${stars(r.rating)}
      <p class="mt-4 flex-1 font-serif text-xl leading-snug text-navy-900">“${esc(clip(r.text))}”</p>
      <div class="mt-6 flex items-center gap-3 border-t border-ivory-200 pt-4">
        ${r.photo
          ? `<img src="${esc(r.photo)}" alt="" referrerpolicy="no-referrer" loading="lazy" class="h-10 w-10 shrink-0 rounded-full object-cover">`
          : `<span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ivory-100 font-serif text-lg text-gold-600">${esc(r.name.charAt(0))}</span>`}
        <div class="min-w-0">
          ${r.profile ? `<a href="${esc(r.profile)}" target="_blank" rel="noopener" class="block truncate text-sm font-semibold text-navy-900 hover:text-gold-700">${esc(r.name)}</a>` : `<p class="truncate text-sm font-semibold text-navy-900">${esc(r.name)}</p>`}
          <p class="text-xs text-ink-muted"><a href="${esc(r.link)}" target="_blank" rel="noopener" class="underline decoration-ivory-200 underline-offset-2 hover:text-gold-700">${esc(r.when || 'Ver en Google')}</a> · ${esc(r.place)}</p>
        </div>
      </div>
    </article>`;

  const { step } = mountGoogleReviews({
    section: root,
    summary: root.querySelector('[data-summary]'),
    track: root.querySelector('[data-track]'),
    carousel: root.querySelector('[data-carousel]'),
    views: { summary: summaryPill, card: reviewCard, sample: sampleCard }
  });

  // Gentle autoplay, one card every 6 s; stops on hover, touch or a click on the arrows
  let timer = null;
  const stop = () => { clearInterval(timer); timer = null; };
  const start = () => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    stop();
    timer = setInterval(() => step(1), 6000);
  };
  root.querySelectorAll('[data-prev], [data-next]').forEach(b => b.addEventListener('click', stop));
  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);
  root.querySelector('[data-track]').addEventListener('touchstart', stop, { passive: true });
  start();
})();
