/* Mobile menu */
const header = document.querySelector('.header');
const menuBtn = document.querySelector('.menu');
if (header && menuBtn) {
  menuBtn.addEventListener('click', () => {
    const open = header.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.textContent = open ? '✕' : '☰';
  });
  document.querySelectorAll('.header-menu a').forEach(a =>
    a.addEventListener('click', () => {
      header.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.textContent = '☰';
    })
  );
}

/* Forms (consultation, sign in, register, newsletter) */
document.querySelectorAll('form').forEach(f =>
  f.addEventListener('submit', e => {
    e.preventDefault();
    const b = f.querySelector('button');
    if (b) {
      b.textContent = f.dataset.success || 'Request received ✓';
      b.disabled = true;
    }
    if (f.classList.contains('news-form')) {
      const i = f.querySelector('input');
      if (i) i.value = '';
    }
  })
);

/* Back to Top Functionality */
let topBtn = document.querySelector('.back-to-top');
if (!topBtn) {
  topBtn = document.createElement('button');
  topBtn.className = 'back-to-top';
  topBtn.setAttribute('aria-label', 'Back to top');
  topBtn.innerHTML = '↑';
  document.body.appendChild(topBtn);
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    topBtn.classList.add('show');
  } else {
    topBtn.classList.remove('show');
  }
});

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('.back-to-top-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
