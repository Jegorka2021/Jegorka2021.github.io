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