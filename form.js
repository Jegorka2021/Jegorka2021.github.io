// Обработка формы выбора тура
document.getElementById('tripForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const select = document.getElementById('tripSelect');
  const url = select.value;
  if (url) {
    window.location.href = url;
  } else {
    alert('Please choose a trip!');
  }
});

// Селектор переключателя темы
const toggle = document.getElementById('theme-switch');
const nav = document.getElementById('mainNav');

// Проверка сохранённой темы при загрузке
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
  toggle.checked = true;
  nav.classList.remove('navbar-light', 'bg-light');
  nav.classList.add('navbar-dark', 'bg-dark');
}

// Обработчик переключения темы
toggle.addEventListener('change', function () {
  if (this.checked) {
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