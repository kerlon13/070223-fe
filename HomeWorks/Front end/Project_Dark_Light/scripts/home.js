const url = "https://fakestoreapi.com/products/2";
mainImg = document.querySelector(".main-right");

async function loadProducts() {
    await fetch(url)
            .then((response) => response.json())
            .then((response) => createProduct(response));     
}

function createProduct(product) {

    const {title,description,image} = product;
    const imageRight = document.createElement("img");

    imageRight.src = image;
    mainImg.append(imageRight);
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", loadProducts);