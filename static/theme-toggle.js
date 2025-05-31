document.addEventListener('DOMContentLoaded', () => {
  const switchCheckbox = document.getElementById('theme-switch'); // используем только один ID!
  const nav = document.getElementById('mainNav');

  if (!switchCheckbox) {
    console.warn('⚠️ Theme switch checkbox not found');
    return;
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  function applyTheme(theme) {
    const isDark = theme === 'dark';

    document.body.classList.toggle('dark-theme', isDark);
    switchCheckbox.checked = isDark;

    if (nav) {
      nav.classList.remove('navbar-light', 'bg-light', 'navbar-dark', 'bg-dark');
      nav.classList.add(isDark ? 'navbar-dark' : 'navbar-light');
      nav.classList.add(isDark ? 'bg-dark' : 'bg-light');
    }
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
