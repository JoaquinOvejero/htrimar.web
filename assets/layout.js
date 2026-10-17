// Shared header, footer, CTA band and page behaviours. Load last, after page content is rendered.
(() => {
  const page = document.body.dataset.page;
  const NAV = [
    { id: 'inicio', href: 'index.html', label: 'Inicio' },
    { id: 'nosotros', href: 'nosotros.html', label: 'Nosotros' },
    { id: 'productos', href: 'productos.html', label: 'Productos' },
    { id: 'marcas', href: 'marcas.html', label: 'Marcas' },
    { id: 'contacto', href: 'contacto.html', label: 'Contacto' }
  ];
  const LOGO = UP + '2025/08/cropped-HTrimaechi-2.png';
  const current = id => (id === page ? ' aria-current="page"' : '');

  const headerHTML = `
    <div class="hidden border-b border-ivory-200 bg-ivory-100 text-sm text-navy-800 lg:block">
      <div class="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-2 lg:px-8">
        <span class="flex items-center gap-2"><i data-lucide="map-pin" class="h-4 w-4 text-gold-600" stroke-width="1.5"></i>Villa Pompeya · Parque Centenario — CABA</span>
        <span class="text-center font-serif text-base italic text-navy-700">Fundada en 1981</span>
        <a href="mailto:info@trimarchi.com.ar" class="flex items-center justify-end gap-2 hover:text-gold-700"><i data-lucide="mail" class="h-4 w-4 text-gold-600" stroke-width="1.5"></i>info@trimarchi.com.ar</a>
      </div>
    </div>
    <header id="header" class="sticky top-0 z-50 border-b border-transparent bg-ivory-50/90 backdrop-blur-xl transition-all duration-300">
      <div class="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center px-4 py-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <a href="index.html" class="justify-self-start" aria-label="H. Trimarchi S.R.L. - Inicio">
          <img src="${LOGO}" alt="H. Trimarchi S.R.L. - Materiales y elementos para el ascensor" class="h-10 w-auto sm:h-12">
        </a>
        <nav class="hidden items-center gap-9 lg:flex" aria-label="Principal">
          ${NAV.map(n => `<a href="${n.href}" class="nav-link text-[0.95rem] font-medium text-navy-800 transition hover:text-gold-700"${current(n.id)}>${n.label}</a>`).join('')}
        </nav>
        <div class="hidden justify-self-end lg:block">
          <a href="contacto.html#formulario" class="inline-flex items-center gap-2 rounded-full bg-navy-700 px-6 py-3 text-[0.95rem] font-semibold text-white transition hover:bg-navy-900">Solicitar cotización</a>
        </div>
        <button id="menuBtn" class="inline-flex h-12 w-12 items-center justify-center justify-self-end rounded-full border border-navy-700/15 text-navy-800 lg:hidden" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobileMenu">
          <i data-lucide="menu" class="h-6 w-6" stroke-width="1.5"></i>
        </button>
      </div>
      <div id="mobileMenu" class="hidden border-t border-ivory-200 bg-ivory-50 lg:hidden">
        <nav class="mx-auto flex max-w-7xl flex-col px-4 py-4 text-center" aria-label="Móvil">
          ${NAV.map(n => `<a href="${n.href}" class="py-3 font-serif text-2xl ${n.id === page ? 'text-gold-700' : 'text-navy-900'}"${current(n.id)}>${n.label}</a>`).join('')}
          <a href="contacto.html#formulario" class="mx-auto mt-3 w-full max-w-xs rounded-full bg-navy-700 px-6 py-4 font-semibold text-white">Solicitar cotización</a>
        </nav>
      </div>
    </header>`;

  const ctaHTML = `
    <section class="bg-navy-900 py-20 text-white sm:py-24">
      <div class="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p class="reveal rule eyebrow text-xs font-semibold uppercase text-gold-300 sm:text-sm">Más de 40 años de respaldo</p>
        <h2 class="reveal mt-5 font-serif text-4xl font-semibold leading-tight sm:text-5xl">¿Necesita un repuesto, un kit completo o asesoramiento técnico?</h2>
        <p class="reveal mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">Indíquenos marca, modelo y componente. Nuestro equipo le responde con disponibilidad, precio y la experiencia de cuatro décadas en el rubro.</p>
        <div class="reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="contacto.html#formulario" class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-8 py-4 font-semibold text-navy-950 transition hover:bg-gold-300 sm:w-auto">Solicitar cotización <i data-lucide="arrow-right" class="h-5 w-5" stroke-width="1.75"></i></a>
          <a href="mailto:info@trimarchi.com.ar" class="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 font-semibold text-white transition hover:border-gold-300 hover:text-gold-300 sm:w-auto"><i data-lucide="mail" class="h-5 w-5" stroke-width="1.5"></i> info@trimarchi.com.ar</a>
        </div>
      </div>
    </section>`;

  const footerHTML = `
    <footer class="bg-navy-950 text-sm text-slate-300">
      <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div class="grid items-center gap-5 text-center lg:grid-cols-[1fr_auto_1fr]">
          <a href="index.html" class="justify-self-center lg:justify-self-start"><img src="${LOGO}" alt="H. Trimarchi S.R.L." loading="lazy" class="h-9 w-auto rounded-lg bg-white px-2 py-1.5"></a>
          <nav class="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Pie de página">
            ${NAV.map(n => `<a href="${n.href}" class="hover:text-gold-300">${n.label}</a>`).join('')}
          </nav>
          <div class="flex justify-center gap-5 lg:justify-end">
            <a href="mailto:info@trimarchi.com.ar" class="inline-flex items-center gap-2 hover:text-gold-300"><i data-lucide="mail" class="h-4 w-4 text-gold-300" stroke-width="1.5"></i>info@trimarchi.com.ar</a>
            <a href="https://www.instagram.com/htrimarchi.srl/" target="_blank" rel="noopener" class="inline-flex items-center hover:text-gold-300" aria-label="Instagram"><i data-lucide="instagram" class="h-4 w-4 text-gold-300" stroke-width="1.5"></i></a>
          </div>
        </div>
        <div class="mt-6 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-5 text-center text-xs text-slate-400 lg:flex-row">
          <p>Casa matriz: Abraham J. Luppi 1535 · Sucursal: Tte. Gral. Eustaquio Frías 182 · CABA</p>
          <p>© ${new Date().getFullYear()} H. Trimarchi S.R.L. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>`;

  const mount = (id, html) => {
    const el = document.getElementById(id);
    if (el) { el.insertAdjacentHTML('beforebegin', html); el.remove(); }
  };
  mount('site-header', headerHTML);
  mount('site-footer', footerHTML);
  document.querySelectorAll('[data-cta]').forEach(el => { el.insertAdjacentHTML('beforebegin', ctaHTML); el.remove(); });

  lucide.createIcons();

  // Header shadow on scroll
  const header = document.getElementById('header');
  const onScroll = () => {
    const scrolled = window.scrollY > 40;
    header.classList.toggle('border-ivory-200', scrolled);
    header.classList.toggle('shadow-sm', scrolled);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const toggleMenu = open => {
    mobileMenu.classList.toggle('hidden', !open);
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    menuBtn.innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}" class="h-6 w-6" stroke-width="1.5"></i>`;
    lucide.createIcons();
  };
  menuBtn.addEventListener('click', () => toggleMenu(mobileMenu.classList.contains('hidden')));

  // Reveal on scroll
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();
