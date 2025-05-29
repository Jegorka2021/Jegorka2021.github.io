document.getElementById('tripForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const select = document.getElementById('tripSelect');
  const url = select.value;
  if (url) {
    window.location.href = url;
  } else {
    alert('Please choose a trip!');
  }
});

// Проверка сохранённой темы при загрузке
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
  document.getElementById('themeToggle').checked = true;
}

document.getElementById('themeToggle').addEventListener('change', function () {
  if (this.checked) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
});
const nav = document.getElementById('mainNav');

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');

    // меняем тему навбара
    nav.classList.remove('navbar-light', 'bg-light');
    nav.classList.add('navbar-dark', 'bg-dark');
  } else {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');

    // возвращаем светлую тему навбара
    nav.classList.remove('navbar-dark', 'bg-dark');
    nav.classList.add('navbar-light', 'bg-light');
  }
});
// // Theme toggle
// document.getElementById('themeToggle').addEventListener('change', function () {
//     document.body.classList.toggle('dark-theme', this.checked);
// });
