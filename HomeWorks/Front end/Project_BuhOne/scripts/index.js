const prevBtns = document.querySelectorAll(".slider-left");
const nextBtns = document.querySelectorAll(".slider-right");
const statusBtns = document.querySelectorAll(".slider-control-item");
const sliderImages = document.querySelectorAll(".slider-img")
let currentIndex = 1;
let statusIndex = 4;

statusBtns[statusIndex].style.opacity = 1;
nextBtns[1].classList.add("active");
prevBtns[1].disabled = true;

nextBtns[1].addEventListener("click", () => {
    prevBtns[1].disabled = false;
    const index = currentIndex + 1;
    const imgPath = "./assets/images/slider2/" + index + ".svg";

    sliderImages.forEach((image) => {
        image.setAttribute("src", imgPath);
    })

    currentIndex++;
    statusIndex++;
    statusBtns[statusIndex].style.opacity = 1;
    statusBtns[statusIndex-1].style.opacity = 0.4;

    if(statusIndex > 4) {
        prevBtns[1].classList.add("active");
    }
    if (statusIndex ==7) {
        nextBtns[1].classList.remove("active")
        nextBtns[1].disabled = true;
    } 
    
})

prevBtns[1].addEventListener("click", ()=> {
    nextBtns[1].disabled = false;
    const index = currentIndex - 1;
    const imgPath = "./assets/images/slider2/" + index + ".svg";
    sliderImages.forEach((image) => {
        image.setAttribute("src", imgPath);
    })
    currentIndex--;
    statusIndex--;
    statusBtns[statusIndex].style.opacity = 1;
    statusBtns[statusIndex+1].style.opacity = 0.4;

    if(statusIndex < 7) {
        nextBtns[1].classList.add("active");
    }
    if (statusIndex == 4) {
        prevBtns[1].classList.remove("active")
        prevBtns[1].disabled = true;
    } 

})



