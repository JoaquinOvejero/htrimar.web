// Option B — header, floor indicator, search, quote drawer, footer and page behaviours. Load last.
(() => {
  const page = document.body.dataset.page;
  const LOGO = UP + '2025/08/cropped-HTrimaechi-2.png';
  const NAV = [
    { id: 'inicio', href: 'index.html', label: 'Inicio' },
    { id: 'empresa', href: 'empresa.html', label: 'Empresa' },
    { id: 'catalogo', href: 'catalogo.html', label: 'Catálogo' },
    { id: 'marcas', href: 'marcas.html', label: 'Marcas' },
    { id: 'contacto', href: 'contacto.html', label: 'Contacto' }
  ];
  const current = id => (id === page ? ' aria-current="page"' : '');

  /* ---------- Header ---------- */
  const header = `
    <div class="hidden bg-navy-950 font-mono text-xs text-steel-300 md:block">
      <div class="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 lg:px-8">
        <span class="truncate">Abraham J. Luppi 1535 · Tte. Gral. Eustaquio Frías 182 · CABA</span>
        <a href="contacto.html?urgente=1#formulario" class="inline-flex shrink-0 items-center gap-2 whitespace-nowrap font-semibold text-amber-400 hover:text-amber-300"><span class="h-2 w-2 animate-pulse rounded-full bg-amber-400"></span>¿Equipo parado? Consulta urgente</a>
      </div>
    </div>
    <header id="header" class="sticky top-0 z-50 border-b border-steel-200 bg-white/95 backdrop-blur">
      <div class="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="index.html" class="shrink-0" aria-label="H. Trimarchi S.R.L. - Inicio"><img src="${LOGO}" alt="H. Trimarchi S.R.L." class="h-10 w-auto sm:h-11"></a>
        <div id="floorDisplay" class="ml-1 hidden h-9 items-center gap-1.5 rounded-md bg-navy-950 px-2.5 font-mono text-sm text-amber-400 xl:inline-flex" aria-hidden="true"><span data-arrow>▲</span><span data-code>PB</span></div>
        <nav class="mx-auto hidden items-center lg:flex xl:gap-1" aria-label="Principal">
          ${NAV.map(n => `<a href="${n.href}" class="rounded-full px-3 py-2 text-[0.95rem] font-medium transition xl:px-4 ${n.id === page ? 'bg-steel-100 text-navy-900' : 'text-ink-2 hover:bg-steel-50 hover:text-navy-900'}"${current(n.id)}>${n.label}</a>`).join('')}
        </nav>
        <div class="ml-auto flex items-center gap-2 lg:ml-0">
          <button type="button" data-search-open class="inline-flex h-11 items-center gap-2 rounded-full border border-steel-300 px-3 text-ink-2 transition hover:border-navy-700 hover:text-navy-900 sm:px-4" aria-label="Buscar productos">
            <i data-lucide="search" class="h-5 w-5" stroke-width="1.75"></i><span class="hidden text-sm xl:inline">Buscar</span><kbd class="hidden rounded border border-steel-300 px-1.5 font-mono text-[0.7rem] text-ink-3 2xl:inline">Ctrl K</kbd>
          </button>
          <button type="button" data-quote-open class="relative inline-flex h-11 items-center gap-2 rounded-full bg-navy-800 px-3 text-white transition hover:bg-navy-950 sm:px-4" aria-label="Ver la lista de cotización">
            <i data-lucide="clipboard-list" class="h-5 w-5" stroke-width="1.75"></i><span class="hidden text-sm font-semibold sm:inline lg:hidden xl:inline">Cotización</span>
            <span data-quote-count class="absolute -right-1 -top-1 hidden h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1 font-mono text-[0.7rem] font-semibold text-navy-950">0</span>
          </button>
          <button id="menuBtn" type="button" class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-steel-300 text-navy-900 lg:hidden" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobileMenu"><i data-lucide="menu" class="h-5 w-5"></i></button>
        </div>
      </div>
      <div id="mobileMenu" class="hidden border-t border-steel-200 bg-white lg:hidden">
        <nav class="mx-auto flex max-w-7xl flex-col px-4 py-3" aria-label="Móvil">
          ${NAV.map(n => `<a href="${n.href}" class="rounded-xl px-3 py-3 font-display text-lg font-semibold ${n.id === page ? 'bg-steel-100 text-navy-900' : 'text-ink-2'}"${current(n.id)}>${n.label}</a>`).join('')}
          <a href="contacto.html?urgente=1#formulario" class="mt-2 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-3 py-3 font-semibold text-navy-950"><i data-lucide="siren" class="h-5 w-5"></i>¿Equipo parado? Consulta urgente</a>
        </nav>
      </div>
    </header>`;

  /* ---------- Footer: a lobby directory board ---------- */
  const footer = `
    <footer class="on-dark blueprint-dark bg-navy-950 text-sm text-steel-300">
      <div class="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <img src="${LOGO}" alt="H. Trimarchi S.R.L." loading="lazy" class="h-9 w-auto rounded-md bg-white px-2 py-1">
          <p class="mt-4 max-w-xs leading-relaxed">Repuestos, componentes y equipos para ascensores. Desde 1981.</p>
        </div>
        <div><p class="font-mono text-xs uppercase tracking-widest text-amber-400">Casa matriz</p><p class="mt-2">Abraham J. Luppi 1535<br>C1437FRN · Villa Pompeya, CABA</p></div>
        <div><p class="font-mono text-xs uppercase tracking-widest text-amber-400">Sucursal</p><p class="mt-2">Tte. Gral. Eustaquio Frías 182<br>C1414DVD · Parque Centenario, CABA</p></div>
        <div><p class="font-mono text-xs uppercase tracking-widest text-amber-400">Contacto</p>
          <a href="mailto:${B_CONTACT.email}" class="mt-2 block hover:text-white">${B_CONTACT.email}</a>
          <a href="https://www.instagram.com/htrimarchi.srl/" target="_blank" rel="noopener" class="mt-1 block hover:text-white">Instagram @htrimarchi.srl</a></div>
      </div>
      <div class="border-t border-white/10">
        <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 font-mono text-xs sm:flex-row sm:px-6 lg:px-8">
          <nav class="flex flex-wrap justify-center gap-x-5 gap-y-2" aria-label="Pie de página">${NAV.map(n => `<a href="${n.href}" class="hover:text-white">${n.label}</a>`).join('')}</nav>
          <p>© ${new Date().getFullYear()} H. Trimarchi S.R.L.</p>
        </div>
      </div>
    </footer>`;

  /* ---------- Search dialog ---------- */
  const searchDialog = `
    <dialog id="searchDialog" class="w-[min(92vw,42rem)] overflow-hidden rounded-2xl bg-white p-0 shadow-2xl" style="margin: 10vh auto auto">
      <div class="flex items-center gap-3 border-b border-steel-200 px-5">
        <i data-lucide="search" class="h-5 w-5 text-ink-3" stroke-width="1.75"></i>
        <input id="searchInput" type="search" autocomplete="off" placeholder="Buscá un producto, modelo o marca" class="h-16 flex-1 bg-transparent text-lg text-navy-900 outline-none placeholder:text-ink-3" aria-label="Buscar en el catálogo">
        <button type="button" data-search-close class="rounded border border-steel-300 px-2 py-1 font-mono text-xs text-ink-3">Esc</button>
      </div>
      <ul id="searchResults" class="max-h-[60vh] overflow-y-auto p-2" role="listbox"></ul>
      <p class="border-t border-steel-200 px-5 py-3 font-mono text-xs text-ink-3">Probá: 9130 · Fermator · gearless · cadena · cabina</p>
    </dialog>`;

  /* ---------- Quote drawer ---------- */
  const drawer = `
    <div id="quoteOverlay" class="fixed inset-0 z-[60] hidden bg-navy-950/40"></div>
    <aside id="quoteDrawer" class="drawer fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col bg-white shadow-2xl" aria-label="Lista de cotización" aria-hidden="true">
      <div class="flex items-center justify-between border-b border-steel-200 px-6 py-5">
        <div><p class="floor-tag"><b>COT</b>Tu lista</p><h2 class="mt-1 font-display text-2xl font-bold text-navy-900">Cotización</h2></div>
        <button type="button" data-quote-close class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-steel-300 text-navy-900" aria-label="Cerrar"><i data-lucide="x" class="h-5 w-5"></i></button>
      </div>
      <div id="quoteItems" class="flex-1 overflow-y-auto px-6 py-4"></div>
      <div class="space-y-2 border-t border-steel-200 px-6 py-5">
        <a href="contacto.html?lista=1#formulario" class="flex w-full items-center justify-center gap-2 rounded-full bg-navy-800 px-6 py-3.5 font-semibold text-white hover:bg-navy-950">Pedir cotización de esta lista <i data-lucide="arrow-right" class="h-5 w-5"></i></a>
        <a id="quoteWhatsapp" target="_blank" rel="noopener" class="flex w-full items-center justify-center gap-2 rounded-full border border-steel-300 px-6 py-3.5 font-semibold text-navy-900"><i data-lucide="message-circle" class="h-5 w-5"></i> Enviar por WhatsApp</a>
        <button type="button" data-quote-clear class="w-full py-2 text-sm text-ink-3 hover:text-navy-900">Vaciar la lista</button>
      </div>
    </aside>
    <div id="toast" role="status" aria-live="polite" class="pointer-events-none fixed bottom-6 left-1/2 z-[80] -translate-x-1/2 translate-y-4 rounded-full bg-navy-950 px-5 py-3 text-sm font-medium text-white opacity-0 shadow-xl transition"></div>`;

  /* ---------- Mount ---------- */
  const mount = (id, html) => { const el = document.getElementById(id); if (el) { el.insertAdjacentHTML('beforebegin', html); el.remove(); } };
  mount('site-header', header);
  mount('site-footer', footer);
  document.body.insertAdjacentHTML('beforeend', searchDialog + drawer);

  /* ---------- Floor indicator (built from the page's [data-floor] sections) ---------- */
  const floors = [...document.querySelectorAll('[data-floor]')];
  if (floors.length > 1) {
    document.body.insertAdjacentHTML('beforeend', `
      <nav id="floors" class="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 min-[1600px]:block" aria-label="Pisos de esta página">
        <ol class="flex flex-col gap-1 rounded-2xl border border-steel-200 bg-white/90 p-1.5 shadow-lg backdrop-blur">
          ${floors.map(f => `<li><a href="#${f.id}" class="group relative flex items-center gap-2 rounded-xl px-2.5 py-2 hover:bg-steel-100" aria-current="false">
            <span class="floor-dot"></span><span class="w-6 font-mono text-xs text-navy-900">${f.dataset.floor}</span>
            <span class="pointer-events-none absolute right-full mr-2 whitespace-nowrap rounded-lg bg-navy-950 px-3 py-1.5 text-xs text-white opacity-0 transition group-hover:opacity-100">${f.dataset.floorName}</span></a></li>`).join('')}
        </ol>
      </nav>`);
  }
  const floorLinks = [...document.querySelectorAll('#floors a')];
  const display = document.getElementById('floorDisplay');
  let lastY = scrollY;
  const setFloor = f => {
    floorLinks.forEach(a => a.setAttribute('aria-current', a.getAttribute('href') === `#${f.id}` ? 'true' : 'false'));
    if (display) display.querySelector('[data-code]').textContent = f.dataset.floor;
  };
  if (floors.length) {
    setFloor(floors[0]);
    const fo = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) setFloor(e.target); }), { rootMargin: '-45% 0px -50% 0px' });
    floors.forEach(f => fo.observe(f));
    addEventListener('scroll', () => {
      if (display) display.querySelector('[data-arrow]').textContent = scrollY >= lastY ? '▼' : '▲';
      lastY = scrollY;
    }, { passive: true });
  } else if (display) display.classList.add('xl:hidden');

  /* ---------- Mobile menu ---------- */
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  menuBtn.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('hidden') === false;
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}" class="h-5 w-5"></i>`;
    lucide.createIcons();
  });

  /* ---------- Search ---------- */
  const dialog = document.getElementById('searchDialog');
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  let active = 0;
  const renderResults = () => {
    const found = bSearch(input.value);
    active = 0;
    if (!input.value.trim()) { results.innerHTML = `<li class="px-4 py-6 text-center text-sm text-ink-3">Escribí al menos una palabra.</li>`; return; }
    if (!found.length) { results.innerHTML = `<li class="px-4 py-6 text-center text-sm text-ink-3">Sin resultados. <a href="contacto.html#formulario" class="font-semibold text-navy-800 underline">Consultanos</a>: tenemos más de 9.000 productos en stock.</li>`; return; }
    results.innerHTML = found.map((r, i) => `
      <li role="option" aria-selected="${i === 0}"><a href="${r.url}" class="flex items-center gap-4 rounded-xl px-3 py-2.5 ${i === 0 ? 'bg-steel-100' : ''} hover:bg-steel-100">
        <img src="${UP + r.img}" alt="" class="h-12 w-12 shrink-0 rounded-lg border border-steel-200 bg-white ${r.fit === 'contain' ? 'object-contain p-1' : 'object-cover'}">
        <span class="min-w-0 flex-1"><span class="block truncate font-semibold text-navy-900">${esc(r.title)}</span><span class="block truncate text-sm text-ink-3">${esc(r.sub)}</span></span>
        <span class="shrink-0 rounded-full bg-steel-100 px-2.5 py-1 font-mono text-[0.7rem] uppercase text-ink-2">${r.kind}</span></a></li>`).join('');
  };
  const highlight = () => results.querySelectorAll('li[role=option]').forEach((li, i) => {
    li.setAttribute('aria-selected', i === active);
    li.firstElementChild.classList.toggle('bg-steel-100', i === active);
    if (i === active) li.scrollIntoView({ block: 'nearest' });
  });
  window.openSearch = (value = '') => {
    input.value = value;
    renderResults();
    if (!dialog.open) dialog.showModal();
    input.focus();
  };
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
  const openDrawer = () => { drawerEl.classList.add('is-open'); drawerEl.setAttribute('aria-hidden', 'false'); overlay.classList.remove('hidden'); };
  const closeDrawer = () => { drawerEl.classList.remove('is-open'); drawerEl.setAttribute('aria-hidden', 'true'); overlay.classList.add('hidden'); };
  const renderQuote = () => {
    const items = Quote.items();
    const n = Quote.count();
    document.querySelectorAll('[data-quote-count]').forEach(b => { b.textContent = n; b.classList.toggle('hidden', !n); b.classList.toggle('inline-flex', !!n); });
    itemsEl.innerHTML = items.length
      ? `<ul class="divide-y divide-steel-200">${items.map(i => `
          <li class="flex items-center gap-3 py-4">
            <span class="min-w-0 flex-1 font-medium leading-snug text-navy-900">${esc(Quote.label(i))}</span>
            <span class="inline-flex items-center rounded-full border border-steel-300">
              <button type="button" data-qty="${esc(i.id)}" data-delta="-1" class="h-9 w-9 text-lg text-ink-2" aria-label="Restar uno">−</button>
              <span class="w-6 text-center font-mono text-sm">${i.qty}</span>
              <button type="button" data-qty="${esc(i.id)}" data-delta="1" class="h-9 w-9 text-lg text-ink-2" aria-label="Sumar uno">+</button>
            </span>
            <button type="button" data-remove="${esc(i.id)}" class="text-ink-3 hover:text-navy-900" aria-label="Quitar"><i data-lucide="trash-2" class="h-4 w-4"></i></button>
          </li>`).join('')}</ul>`
      : `<div class="py-16 text-center"><i data-lucide="clipboard-list" class="mx-auto h-10 w-10 text-steel-300" stroke-width="1.25"></i>
           <p class="mt-4 font-display text-lg font-bold text-navy-900">Tu lista está vacía</p>
           <p class="mx-auto mt-2 max-w-xs text-sm text-ink-3">Sumá productos o modelos desde el catálogo y pedí una sola cotización por todo.</p>
           <a href="catalogo.html" class="mt-5 inline-flex rounded-full border border-steel-300 px-5 py-2.5 text-sm font-semibold text-navy-800">Ir al catálogo</a></div>`;
    const wa = whatsappUrl(`Hola, quiero cotizar:\n${Quote.text()}`);
    if (wa && items.length) { waLink.href = wa; waLink.classList.remove('opacity-50', 'pointer-events-none'); waLink.lastChild.textContent = ' Enviar por WhatsApp'; }
    else { waLink.removeAttribute('href'); waLink.classList.add('opacity-50', 'pointer-events-none'); waLink.lastChild.textContent = B_CONTACT.whatsapp ? ' Enviar por WhatsApp' : ' WhatsApp [número a completar]'; }
    lucide.createIcons();
  };
  const showToast = text => {
    toast.textContent = text;
    toast.classList.remove('opacity-0', 'translate-y-4');
    clearTimeout(showToast.t);
    showToast.t = setTimeout(() => toast.classList.add('opacity-0', 'translate-y-4'), 2200);
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

  /* ---------- Reveal + icons ---------- */
  lucide.createIcons();
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
  }), { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();
