const btn = document.querySelector(".btn");

btn.addEventListener("click",() => {
    const elem = document.querySelector("#title_el").value;
    const classOfElem = document.querySelector("#class_el").value;

    const newElement = document.createElement(`${elem}`);
    
    newElement.classList.add(`${classOfElem}`);
    newElement.style.width = "200px";
    newElement.style.height = "200px";
    newElement.style.backgroundColor = "red"; 
    document.body.appendChild(newElement);
});

