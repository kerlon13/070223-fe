// Загрузка nav.html
fetch('components/nav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });

  fetch('components/home.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('home').innerHTML = data;
  });

