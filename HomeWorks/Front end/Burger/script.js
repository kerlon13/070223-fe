const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav_menu");

burger.addEventListener("click", () => {  
    navLinks.classList.toggle("active");
});
