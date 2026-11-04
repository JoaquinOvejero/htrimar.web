// Option D (option C refined) — header, CTA band, footer, search, quote drawer and page behaviours. Load last.
(() => {
  const page = document.body.dataset.page;
  const LOGO = UP + '2025/08/cropped-HTrimaechi-2.png';
  const NAV = [
    { id: 'inicio', href: 'index.html', label: 'Inicio' },
    { id: 'nosotros', href: 'nosotros.html', label: 'Nosotros' },
    { id: 'productos', href: 'productos.html', label: 'Productos' },
    { id: 'marcas', href: 'marcas.html', label: 'Marcas' },
    { id: 'contacto', href: 'contacto.html', label: 'Contacto' }
  ];
  const current = id => (id === page ? ' aria-current="page"' : '');

  /* ---------- Header (option A) with search and quote list (option B) ---------- */
  const header = `
    <a href="#contenido" class="sr-only z-[90] rounded-full bg-navy-900 px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Saltar al contenido</a>
    <div class="hidden bg-ivory-100 text-sm text-navy-800 lg:block">
      <div class="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-2 lg:px-8">
        <span class="flex items-center gap-2"><i data-lucide="map-pin" class="h-4 w-4 text-gold-600" stroke-width="1.5"></i>Villa Pompeya · Parque Centenario, CABA</span>
        <span class="text-center font-serif text-base italic text-navy-700">Fundada en 1981</span>
        <a href="contacto.html?urgente=1#formulario" class="flex items-center justify-end gap-2 font-semibold text-gold-700 hover:text-navy-900"><span class="h-2 w-2 rounded-full bg-gold-500"></span>¿Equipo parado? Consulta urgente</a>
      </div>
    </div>
    <header id="header" class="sticky top-0 z-50 bg-ivory-50 transition-shadow duration-300">
      <div class="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-3 px-4 py-3.5 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <a href="index.html" class="justify-self-start" aria-label="H. Trimarchi S.R.L. - Inicio"><img src="${LOGO}" alt="H. Trimarchi S.R.L. - Materiales y elementos para el ascensor" width="190" height="48" class="h-10 w-auto sm:h-12"></a>
        <nav class="hidden items-center gap-8 lg:flex" aria-label="Principal">
          ${NAV.map(n => `<a href="${n.href}" class="nav-link font-medium text-navy-800 transition hover:text-gold-700"${current(n.id)}>${n.label}</a>`).join('')}
        </nav>
        <div class="flex items-center justify-self-end gap-2">
          <button type="button" data-search-open class="inline-flex h-11 items-center gap-2 rounded-full bg-ivory-100 px-3 text-navy-800 transition hover:bg-ivory-200 xl:px-4" aria-label="Buscar productos (Ctrl K)">
            <i data-lucide="search" class="h-5 w-5" stroke-width="1.5"></i><span class="hidden text-sm font-medium xl:inline">Buscar</span>
          </button>
          <button type="button" data-quote-open class="relative inline-flex h-11 items-center gap-2 rounded-full bg-navy-700 px-3 text-white transition hover:bg-navy-900 sm:px-4" aria-label="Ver la lista de cotización">
            <i data-lucide="clipboard-list" class="h-5 w-5" stroke-width="1.5"></i><span class="hidden text-sm font-semibold sm:inline">Cotización</span>
            <span data-quote-count class="tabular absolute -right-1 -top-1 hidden h-5 min-w-5 items-center justify-center rounded-full bg-gold-400 px-1 text-sm font-bold leading-none text-navy-950">0</span>
          </button>
          <button id="menuBtn" type="button" class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ivory-100 text-navy-800 lg:hidden" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobileMenu"><i data-lucide="menu" class="h-5 w-5" stroke-width="1.5"></i></button>
        </div>
      </div>
      <div id="mobileMenu" class="hidden bg-ivory-100 lg:hidden">
        <nav class="mx-auto flex max-w-7xl flex-col px-4 py-4 text-center" aria-label="Móvil">
          ${NAV.map(n => `<a href="${n.href}" class="py-3 font-serif text-2xl ${n.id === page ? 'text-gold-700' : 'text-navy-900'}"${current(n.id)}>${n.label}</a>`).join('')}
          <a href="contacto.html?urgente=1#formulario" class="mx-auto mt-3 inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-4 font-semibold text-navy-950"><i data-lucide="siren" class="h-5 w-5"></i> ¿Equipo parado?</a>
        </nav>
      </div>
    </header>`;

  /* ---------- CTA band: urgent request or a full quote list ---------- */
  const cta = `
    <section class="bg-ivory-100 py-16 sm:py-20">
      <div class="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div class="reveal flex flex-col rounded-[2rem] bg-gold-400 p-8 text-navy-950 sm:p-10">
          <h2 class="font-serif text-4xl font-semibold">¿Equipo parado?</h2>
          <p class="mt-3 flex-1 text-lg">Indíquenos marca, modelo y qué pieza falló. Su consulta entra como urgente.</p>
          <a href="contacto.html?urgente=1#formulario" class="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-navy-900 px-7 py-4 font-semibold text-white hover:bg-navy-950">Consulta urgente <i data-lucide="arrow-right" class="h-5 w-5" stroke-width="1.75"></i></a>
        </div>
        <div class="reveal flex flex-col rounded-[2rem] bg-navy-900 p-8 text-white sm:p-10" style="--d:80ms">
          <h2 class="font-serif text-4xl font-semibold">¿Armando una obra?</h2>
          <p class="mt-3 flex-1 text-lg text-ivory-200">Sume productos y modelos a su lista desde el catálogo y pida una sola cotización por todo.</p>
          <div class="mt-6 grid gap-3 sm:flex sm:flex-wrap">
            <a href="productos.html" class="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-navy-900 hover:bg-ivory-100">Armar mi lista</a>
            <button type="button" data-quote-open class="inline-flex items-center justify-center gap-2 rounded-full bg-navy-700 px-7 py-4 font-semibold text-white hover:bg-navy-600">Ver mi lista <span data-quote-count class="tabular hidden h-5 min-w-5 items-center justify-center rounded-full bg-gold-400 px-1 text-sm font-bold leading-none text-navy-950">0</span></button>
          </div>
        </div>
      </div>
    </section>`;

  /* ---------- Footer (option A, compact) ---------- */
  const footer = `
    <footer class="bg-navy-950 text-sm text-ivory-200">
      <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div class="grid items-center gap-5 text-center lg:grid-cols-[1fr_auto_1fr]">
          <a href="index.html" class="justify-self-center lg:justify-self-start"><img src="${LOGO}" alt="H. Trimarchi S.R.L." loading="lazy" width="136" height="34" class="h-9 w-auto rounded-lg bg-white px-2 py-1.5"></a>
          <nav class="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Pie de página">${NAV.map(n => `<a href="${n.href}" class="hover:text-gold-300">${n.label}</a>`).join('')}</nav>
          <div class="flex justify-center gap-5 lg:justify-end">
            <a href="mailto:${D_CONTACT.email}" class="inline-flex items-center gap-2 hover:text-gold-300"><i data-lucide="mail" class="h-4 w-4 text-gold-300" stroke-width="1.5"></i>${D_CONTACT.email}</a>
            <a href="https://www.instagram.com/htrimarchi.srl/" target="_blank" rel="noopener" class="inline-flex items-center hover:text-gold-300" aria-label="Instagram"><i data-lucide="instagram" class="h-4 w-4 text-gold-300" stroke-width="1.5"></i></a>
          </div>
        </div>
        <div class="mt-6 flex flex-col items-center justify-between gap-2 text-center text-ivory-200/80 lg:flex-row">
          <p>Casa matriz: Abraham J. Luppi 1535 · Sucursal: Tte. Gral. Eustaquio Frías 182 · CABA</p>
          <p>© ${new Date().getFullYear()} H. Trimarchi S.R.L. · <a href="privacidad.html" class="underline decoration-ivory-200/40 underline-offset-4 hover:text-gold-300"${current('privacidad')}>Privacidad y cookies</a></p>
        </div>
        <!-- Notices Disposición 10/2008 requires in a visible place of the site (Ley 25.326) -->
        <p class="mx-auto mt-6 max-w-5xl text-center text-xs leading-relaxed text-ivory-200/70">El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley Nº 25.326. La Agencia de Acceso a la Información Pública, en su carácter de Órgano de Control de la Ley Nº 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de datos personales.</p>
      </div>
    </footer>`;

  /* ---------- Search dialog ---------- */
  const searchDialog = `
    <dialog id="searchDialog" class="w-[min(92vw,42rem)] overflow-hidden rounded-[1.5rem] bg-ivory-50 p-0 shadow-2xl" style="margin: 10vh auto auto" aria-label="Buscar en el catálogo"><!-- taste-skill-ignore: dialog overlay -->
      <div class="flex items-center gap-3 bg-white px-5">
        <i data-lucide="search" class="h-5 w-5 text-gold-600" stroke-width="1.5"></i>
        <input id="searchInput" type="search" autocomplete="off" placeholder="Busque un producto, modelo o marca" class="h-16 flex-1 bg-transparent text-lg text-navy-900 outline-none" aria-label="Buscar en el catálogo" role="combobox" aria-expanded="true" aria-controls="searchResults" aria-autocomplete="list">
        <button type="button" data-search-close class="rounded-lg bg-ivory-100 px-2.5 py-1 text-sm text-ink-muted hover:text-navy-900">Esc</button>
      </div>
      <ul id="searchResults" class="max-h-[60vh] overflow-y-auto p-2" role="listbox" aria-label="Resultados"></ul>
      <p class="bg-ivory-100 px-5 py-3 text-sm text-ink-muted">Pruebe: 9130 · Fermator · gearless · cadena · cabina</p>
    </dialog>`;

  /* ---------- Quote drawer ---------- */
  const drawer = `
    <div id="quoteOverlay" class="fixed inset-0 z-[60] hidden bg-navy-950/40"></div>
    <aside id="quoteDrawer" class="drawer fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col bg-ivory-50 shadow-2xl" aria-label="Lista de cotización" aria-hidden="true"><!-- taste-skill-ignore: drawer overlay -->
      <div class="flex items-center justify-between px-6 pb-3 pt-6">
        <h2 class="font-serif text-3xl font-semibold text-navy-900">Su cotización</h2>
        <button type="button" data-quote-close class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ivory-100 text-navy-900 hover:bg-ivory-200" aria-label="Cerrar"><i data-lucide="x" class="h-5 w-5" stroke-width="1.5"></i></button>
      </div>
      <div id="quoteItems" class="flex-1 overflow-y-auto px-6 py-3"></div>
      <div class="space-y-2 bg-ivory-100 px-6 py-5">
        <a href="contacto.html?lista=1#formulario" class="flex w-full items-center justify-center gap-2 rounded-full bg-navy-700 px-6 py-4 font-semibold text-white hover:bg-navy-900">Pedir cotización de esta lista <i data-lucide="arrow-right" class="h-5 w-5" stroke-width="1.75"></i></a>
        <a id="quoteWhatsapp" target="_blank" rel="noopener" class="flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-navy-900"><i data-lucide="message-circle" class="h-5 w-5" stroke-width="1.5"></i> Enviar por WhatsApp</a>
        <button type="button" data-quote-clear class="w-full py-2 text-sm text-ink-muted hover:text-navy-900">Vaciar la lista</button>
      </div>
    </aside>
    <div id="toast" role="status" aria-live="polite" class="toast pointer-events-none fixed bottom-6 left-1/2 z-[80] rounded-full bg-navy-900 px-5 py-3 text-sm font-medium text-white shadow-xl"></div><!-- taste-skill-ignore: toast overlay -->`;

  /* ---------- Mount ---------- */
  const mount = (id, html) => { const el = document.getElementById(id); if (el) { el.insertAdjacentHTML('beforebegin', html); el.remove(); } };
  mount('site-header', header);
  mount('site-footer', footer);
  document.querySelectorAll('[data-cta]').forEach(el => { el.insertAdjacentHTML('beforebegin', cta); el.remove(); });
  document.body.insertAdjacentHTML('beforeend', searchDialog + drawer);
  const main = document.querySelector('main');
  if (main && !main.id) main.id = 'contenido';

  /* ---------- The sticky header lifts off the page once it scrolls (it is an overlay) + mobile menu ---------- */
  const headerEl = document.getElementById('header');
  const onScroll = () => headerEl.classList.toggle('shadow-[0_8px_24px_rgba(13,18,53,0.08)]', scrollY > 40); // taste-skill-ignore: sticky bar
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  menuBtn.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('hidden') === false;
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    menuBtn.innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}" class="h-5 w-5" stroke-width="1.5"></i>`;
    lucide.createIcons();
  });

  /* ---------- Search ---------- */
  const dialog = document.getElementById('searchDialog');
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  let active = 0;
  const renderResults = () => {
    const found = dSearch(input.value);
    active = 0;
    if (!input.value.trim()) { results.innerHTML = `<li class="px-4 py-6 text-center text-sm text-ink-muted">Escriba al menos una palabra.</li>`; return; }
    if (!found.length) { results.innerHTML = `<li class="px-4 py-6 text-center text-sm text-ink-muted">Sin resultados. <a href="contacto.html?producto=${encodeURIComponent(input.value.trim())}#formulario" class="font-semibold text-navy-800 underline">Consúltenos por “${esc(input.value.trim())}”</a>: tenemos más de 9.000 productos en stock.</li>`; return; }
    results.innerHTML = found.map((r, i) => `
      <li role="option" id="res-${i}" aria-selected="${i === 0}"><a href="${r.url}" class="flex items-center gap-4 rounded-xl px-3 py-2.5 ${i === 0 ? 'bg-ivory-100' : ''} hover:bg-ivory-100">
        <img src="${UP + r.img}" alt="" class="h-12 w-12 shrink-0 rounded-lg bg-white ${r.fit === 'contain' ? 'object-contain p-1' : 'object-cover'}">
        <span class="min-w-0 flex-1"><span class="block truncate font-serif text-lg font-semibold text-navy-900">${esc(r.title)}</span><span class="block truncate text-sm text-ink-muted">${esc(r.sub)}</span></span>
        <span class="shrink-0 text-sm text-gold-700">${r.kind}</span></a></li>`).join('');
  };
  const highlight = () => results.querySelectorAll('li[role=option]').forEach((li, i) => {
    li.setAttribute('aria-selected', i === active);
    li.firstElementChild.classList.toggle('bg-ivory-100', i === active);
    if (i === active) { li.scrollIntoView({ block: 'nearest' }); input.setAttribute('aria-activedescendant', li.id); }
  });
  window.openSearch = (value = '') => { input.value = value; renderResults(); if (!dialog.open) dialog.showModal(); input.focus(); };
  input.addEventListener('input', renderResults);
  input.addEventListener('keydown', e => {
    const items = results.querySelectorAll('li[role=option]');
    if (e.key === 'ArrowDown' && items.length) { e.preventDefault(); active = (active + 1) % items.length; highlight(); }
    if (e.key === 'ArrowUp' && items.length) { e.preventDefault(); active = (active - 1 + items.length) % items.length; highlight(); }
    if (e.key === 'Enter' && items.length) { e.preventDefault(); items[active].querySelector('a').click(); }
  });
  document.querySelectorAll('[data-search-open]').forEach(b => b.addEventListener('click', () => openSearch()));
  dialog.querySelector('[data-search-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  addEventListener('keydown', e => {
    const typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
    if ((e.key === 'k' && (e.ctrlKey || e.metaKey)) || (e.key === '/' && !typing)) { e.preventDefault(); openSearch(); }
  });

  /* ---------- Quote drawer ---------- */
  const drawerEl = document.getElementById('quoteDrawer');
  const overlay = document.getElementById('quoteOverlay');
  const itemsEl = document.getElementById('quoteItems');
  const waLink = document.getElementById('quoteWhatsapp');
  const toast = document.getElementById('toast');
  let opener = null;
  const openDrawer = () => { opener = document.activeElement; drawerEl.classList.add('is-open'); drawerEl.setAttribute('aria-hidden', 'false'); overlay.classList.remove('hidden'); drawerEl.querySelector('[data-quote-close]').focus(); };
  const closeDrawer = () => {
    if (!drawerEl.classList.contains('is-open')) return;
    drawerEl.classList.remove('is-open'); drawerEl.setAttribute('aria-hidden', 'true'); overlay.classList.add('hidden');
    if (opener && opener.focus) opener.focus();
  };
  const renderQuote = () => {
    const items = Quote.items();
    const n = Quote.count();
    document.querySelectorAll('[data-quote-count]').forEach(b => { b.textContent = n; b.classList.toggle('hidden', !n); b.classList.toggle('inline-flex', !!n); });
    itemsEl.innerHTML = items.length
      ? `<ul class="space-y-2">${items.map(i => `
          <li class="flex items-center gap-3 rounded-2xl bg-white px-4 py-3">
            <span class="min-w-0 flex-1 font-medium leading-snug text-navy-900">${esc(Quote.label(i))}</span>
            <span class="inline-flex items-center rounded-full bg-ivory-100">
              <button type="button" data-qty="${esc(i.id)}" data-delta="-1" class="h-9 w-9 text-lg text-ink-soft" aria-label="Restar uno">−</button>
              <span class="tabular w-6 text-center text-sm font-semibold">${i.qty}</span>
              <button type="button" data-qty="${esc(i.id)}" data-delta="1" class="h-9 w-9 text-lg text-ink-soft" aria-label="Sumar uno">+</button>
            </span>
            <button type="button" data-remove="${esc(i.id)}" class="inline-flex h-9 w-9 items-center justify-center text-ink-muted hover:text-navy-900" aria-label="Quitar"><i data-lucide="trash-2" class="h-4 w-4" stroke-width="1.5"></i></button>
          </li>`).join('')}</ul>`
      : `<div class="py-16 text-center">
           <p class="font-serif text-2xl font-semibold text-navy-900">Su lista está vacía</p>
           <p class="mx-auto mt-2 max-w-xs text-ink-muted">Sume productos o modelos desde el catálogo y pida una sola cotización por todo.</p>
           <a href="productos.html" class="mt-5 inline-flex rounded-full bg-ivory-100 px-5 py-2.5 text-sm font-semibold text-navy-800 hover:bg-ivory-200">Ir a productos</a></div>`;
    const wa = whatsappUrl(`Hola, quiero cotizar:\n${Quote.text()}`);
    if (wa && items.length) { waLink.href = wa; waLink.classList.remove('opacity-50', 'pointer-events-none'); waLink.lastChild.textContent = ' Enviar por WhatsApp'; }
    else { waLink.removeAttribute('href'); waLink.classList.add('opacity-50', 'pointer-events-none'); waLink.lastChild.textContent = D_CONTACT.whatsapp ? ' Enviar por WhatsApp' : ' WhatsApp [número a completar]'; }
    lucide.createIcons();
  };
  const showToast = text => {
    toast.textContent = text;
    toast.classList.add('is-on');
    clearTimeout(showToast.t);
    showToast.t = setTimeout(() => toast.classList.remove('is-on'), 2200);
  };
  document.addEventListener('click', e => {
    const add = e.target.closest('[data-quote-add]');
    if (add) {
      Quote.add(add.dataset.slug, add.dataset.model);
      const p = PRODUCTS.find(x => x.slug === add.dataset.slug);
      showToast(`Agregado a la cotización: ${add.dataset.model || (p && p.name)}`);
    }
    if (e.target.closest('[data-quote-open]')) openDrawer();
    if (e.target.closest('[data-quote-close]') || e.target === overlay) closeDrawer();
    const qty = e.target.closest('[data-qty]');
    if (qty) { const item = Quote.items().find(i => i.id === qty.dataset.qty); if (item) Quote.setQty(item.id, item.qty + Number(qty.dataset.delta)); }
    const rm = e.target.closest('[data-remove]');
    if (rm) Quote.remove(rm.dataset.remove);
    if (e.target.closest('[data-quote-clear]')) Quote.clear();
  });
  addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });
  document.addEventListener('quote:change', renderQuote);
  addEventListener('storage', renderQuote);
  renderQuote();

  /* ---------- Reveal (parts of a group 60ms apart) + icons ---------- */
  lucide.createIcons();
  document.querySelectorAll('[data-stagger]').forEach(g => [...g.querySelectorAll(':scope > .reveal')].forEach((el, i) => el.style.setProperty('--d', `${Math.min(i, 8) * 60}ms`)));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
    }), { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));

  /* ---------- 360° clips that play by themselves: only while on screen, never with reduced motion ---------- */
  const clips = document.querySelectorAll('video[data-autoplay]');
  if (clips.length && 'IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const vio = new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting) en.target.play().catch(() => {}); else en.target.pause();
    }), { threshold: 0.4 });
    clips.forEach(v => vio.observe(v));
  }
})();
