// Option C — shared logic. Uses the catalog from ../assets/site.js (PRODUCTS, BRANDS, GOOGLE_REVIEWS, UP, helpers).

const C_CONTACT = {
  email: 'info@trimarchi.com.ar',
  whatsapp: '' // international format without "+" or spaces, e.g. '5491100000000'. Empty = WhatsApp buttons show as pending.
};

const C_CATEGORIES = [
  { id: 'repuestos', name: 'Repuestos', icon: 'wrench', slugs: ['repuestos'] },
  { id: 'equipos', name: 'Equipos e instalación', icon: 'package', slugs: ['kits', 'cabinas', 'escaleras'] },
  { id: 'traccion', name: 'Tracción e hidráulica', icon: 'cog', slugs: ['maquinas', 'centrales', 'pistones'] },
  { id: 'puertas', name: 'Puertas y guías', icon: 'door-open', slugs: ['puertas', 'guias'] },
  { id: 'cables', name: 'Cables y control', icon: 'cable', slugs: ['cables', 'comando', 'controles'] }
];
const categoryOf = p => C_CATEGORIES.find(c => c.slugs.includes(p.slug));

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const norm = s => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

/* ---------- Search index: products, models and brands ---------- */
const C_SEARCH = [
  ...PRODUCTS.flatMap(p => {
    const brand = p.brand && brandById(p.brand);
    return [
      { kind: 'Producto', title: p.name, sub: p.short, url: productUrl(p), img: p.img, fit: p.fit,
        text: norm([p.name, p.short, brand && brand.name, categoryOf(p) && categoryOf(p).name, ...(p.models || []).map(m => m.name)].join(' ')) },
      ...(p.models || []).map(m => ({ kind: 'Modelo', title: m.name, sub: p.name, url: `${productUrl(p)}#modelos`, img: p.img, fit: p.fit,
        text: norm([m.name, ...(m.specs || []), p.name, brand && brand.name].join(' ')) }))
    ];
  }),
  ...BRANDS.map(b => ({ kind: 'Marca', title: b.name, sub: b.desc || 'Representación oficial', url: `marcas.html#${b.id}`, img: b.logo, fit: 'contain',
    text: norm([b.name, b.desc].join(' ')) }))
];

function cSearch(query, limit = 8) {
  const q = norm(query).trim();
  if (!q) return [];
  const terms = q.split(/\s+/);
  return C_SEARCH
    .filter(r => terms.every(t => r.text.includes(t)))
    .map(r => ({ r, score: (norm(r.title).startsWith(q) ? 0 : norm(r.title).includes(q) ? 1 : 2) + (r.kind === 'Producto' ? 0 : r.kind === 'Marca' ? 0.2 : 0.4) }))
    .sort((a, b) => a.score - b.score)
    .slice(0, limit)
    .map(x => x.r);
}

/* ---------- Quote list (saved in the browser; in memory when storage is blocked) ---------- */
const Quote = (() => {
  const KEY = 'trimarchi-cotizacion-c';
  let memory = [];
  const read = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return memory; } };
  const write = items => {
    memory = items;
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch {}
    document.dispatchEvent(new CustomEvent('quote:change'));
  };
  const label = i => {
    const p = PRODUCTS.find(x => x.slug === i.slug);
    return `${p ? p.name : i.slug}${i.model ? ` — ${i.model}` : ''}`;
  };
  return {
    items: read,
    count: () => read().reduce((n, i) => n + i.qty, 0),
    add(slug, model = '') {
      const items = read();
      const id = model ? `${slug}::${model}` : slug;
      const found = items.find(i => i.id === id);
      if (found) found.qty += 1; else items.push({ id, slug, model, qty: 1 });
      write(items);
    },
    setQty(id, qty) { write(read().map(i => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i))); },
    remove(id) { write(read().filter(i => i.id !== id)); },
    clear() { write([]); },
    label,
    text: () => read().map(i => `• ${i.qty} × ${label(i)}`).join('\n')
  };
})();

const whatsappUrl = text => (C_CONTACT.whatsapp ? `https://wa.me/${C_CONTACT.whatsapp}?text=${encodeURIComponent(text)}` : '');

/* ---------- Shared pieces (option A's look) ---------- */
const sectionHead = (eyebrow, title, sub = '') => `
  <div class="mx-auto max-w-3xl text-center">
    <p class="reveal rule eyebrow text-xs font-semibold uppercase text-gold-700 sm:text-sm">${eyebrow}</p>
    ${title ? `<h2 class="reveal mt-5 font-serif text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl">${title}</h2>` : ''}
    ${sub ? `<p class="reveal mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">${sub}</p>` : ''}
  </div>`;

const addButton = (slug, model = '', label = 'Agregar a la cotización', extra = '') => `
  <button type="button" data-quote-add data-slug="${esc(slug)}" data-model="${esc(model)}" class="inline-flex items-center justify-center gap-2 rounded-full bg-navy-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-900 ${extra}">
    <i data-lucide="plus" class="h-4 w-4" stroke-width="2"></i> ${label}
  </button>`;

// Catalogue card: image left, text right
function productRowHTML(p) {
  const brand = p.brand && brandById(p.brand);
  const cat = categoryOf(p);
  return `
    <article class="reveal group grid grid-cols-[7rem_1fr] overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-ivory-200 transition duration-500 hover:shadow-xl hover:shadow-navy-900/10 hover:ring-gold-500/40 sm:grid-cols-[10rem_1fr]" data-product="${p.slug}" data-category="${cat ? cat.id : ''}" data-brand="${p.brand || ''}">
      <a href="${productUrl(p)}" class="block overflow-hidden border-r border-ivory-200 bg-white" aria-label="${esc(p.name)}">
        <img src="${UP + p.img}" alt="${esc(productLabel(p))}" loading="lazy" class="h-full w-full ${p.fit === 'contain' ? 'object-contain p-3' : 'object-cover'} transition duration-700 group-hover:scale-105">
      </a>
      <div class="flex flex-col p-4 sm:p-5">
        <p class="font-mono text-[0.7rem] uppercase tracking-wider text-ink-muted"><span class="font-serif text-sm normal-case italic tracking-normal text-gold-600">${productNumber(p)}</span> · ${cat ? cat.name : ''}${brand ? ` · ${esc(brand.name)}` : ''}</p>
        <h3 class="mt-1 font-serif text-2xl font-semibold leading-tight text-navy-900"><a href="${productUrl(p)}" class="hover:text-gold-700">${esc(p.name)}</a></h3>
        <p class="mt-1.5 flex-1 text-[0.95rem] leading-snug text-ink-soft">${esc(p.short)}</p>
        <div class="mt-4 flex flex-wrap items-center gap-2">
          ${addButton(p.slug, '', 'Cotizar')}
          <a href="${productUrl(p)}" class="inline-flex items-center gap-1.5 rounded-full border border-navy-700/20 px-4 py-2.5 text-sm font-semibold text-navy-800 transition hover:border-gold-500 hover:text-gold-700">Ver ficha <i data-lucide="arrow-right" class="h-4 w-4" stroke-width="1.75"></i></a>
          ${p.models ? `<span class="ml-auto hidden font-mono text-xs text-ink-muted sm:inline">${p.models.length} modelos</span>` : ''}
        </div>
      </div>
    </article>`;
}

// Stars filled in proportion to the rating
const starsHTML = n => `
  <span class="relative inline-block whitespace-nowrap tracking-[0.15em]" role="img" aria-label="${n.toLocaleString('es-AR', { maximumFractionDigits: 1 })} de 5 estrellas">
    <span class="text-ivory-200">★★★★★</span><span class="absolute inset-y-0 left-0 overflow-hidden text-gold-500" style="width:${(n / 5) * 100}%">★★★★★</span>
  </span>`;
