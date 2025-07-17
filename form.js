const form = document.getElementById('tripForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const select = document.getElementById('tripSelect');
    const url = select.value;
    if (url) {
      window.location.href = url;
    } else {
      alert('Please choose a trip!');
    }
  });
} else {
  console.warn('tripForm не найден — форма выбора тура не будет работать на этой странице.');
}
