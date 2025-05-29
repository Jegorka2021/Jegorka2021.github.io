document.addEventListener('DOMContentLoaded', () => {
  const switchCheckbox = document.getElementById('theme-switch');

  if (!switchCheckbox) {
    console.warn('⚠️ Theme switch checkbox not found');
    return;
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  function applyTheme(theme) {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    switchCheckbox.checked = (theme === 'dark');
  }

  const savedTheme = localStorage.getItem('theme');
  const themeToApply = savedTheme || (prefersDark ? 'dark' : 'light');
  applyTheme(themeToApply);

  switchCheckbox.addEventListener('change', () => {
    const newTheme = switchCheckbox.checked ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
});

/* бургер */

const toggle = document.getElementById('themeToggle');
const nav = document.getElementById('mainNav');

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
    nav.classList.remove('navbar-light', 'bg-light');
    nav.classList.add('navbar-dark', 'bg-dark');
  } else {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
    nav.classList.remove('navbar-dark', 'bg-dark');
    nav.classList.add('navbar-light', 'bg-light');
  }
});