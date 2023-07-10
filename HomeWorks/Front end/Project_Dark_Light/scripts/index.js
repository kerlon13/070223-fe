const createIndex = async ()=> {
    await fetch('components/nav.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    });

    await fetch('components/home.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('home').innerHTML = data;
    });

    await fetch('components/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", createIndex);



