// mobile menu
const btn = document.querySelector('.menu-btn');
const ul = document.getElementById('menu');
if (btn) {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    ul.classList.toggle('show');
  });
}

// smooth scroll for same-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
      ul?.classList.remove('show');
      btn?.setAttribute('aria-expanded', 'false');
    }
  });
});

// current year
document.getElementById('year').textContent = new Date().getFullYear();
