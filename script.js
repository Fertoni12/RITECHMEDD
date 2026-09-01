(() => {
  const header = document.querySelector('header');
  const toggle = document.getElementById('mobile-menu');
  const menu = document.querySelector('.header-bottom');

  if (toggle && menu) {
    const closeMenu = () => {
      menu.classList.remove('active');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    };
    toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('active');
      toggle.classList.toggle('active', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu-item').forEach((item) => {
    item.classList.toggle('active', item.getAttribute('href') === page);
  });

  let previousY = window.scrollY;
  window.addEventListener('scroll', () => {
    if (!header || window.innerWidth < 768) return;
    header.classList.toggle('header-hidden', window.scrollY > previousY && window.scrollY > 160);
    previousY = window.scrollY;
  }, { passive: true });
})();
