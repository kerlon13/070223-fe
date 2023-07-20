const name = document.getElementById("name");
const lastname = document.getElementById("lastname");
const [email, emailLog] = document.querySelectorAll("#email");
const [password, passwordLog] = document.querySelectorAll("#password");
const [inputSubmit, login] = document.querySelectorAll("input[type=submit]");
const madal_container = document.querySelector(".modal_container");
const closeBtn = document.querySelector(".close");
const textModal = document.querySelector(".text_modal");
const registrBtn = document.querySelector(".continue_registr");
const continue_registr = document.querySelector(".continue_registr");
const popup = document.getElementById("popup");
const orderForm = document.getElementById("orderForm");
const forms = document.querySelector(".forms");
const orderBtns = document.querySelector(".buttons");
const [pay,send,confirm,orderClose] = document.querySelectorAll(".orderBtn")
const url = "https://jsonplaceholder.typicode.com/posts";
const modal = document.querySelector(".modal");
const loader = document.querySelector(".loader");
const [skeleton1,skeleton2] = document.querySelectorAll(".skeleton-paragraph");

madal_container.classList.add("close_status");
loader.classList.add("close_status");
orderBtns.classList.add("close_status");

const userDataJson = localStorage.getItem("userLocal");
let userLocalArr = JSON.parse(userDataJson);
console.log(userLocalArr);

function findEmail(emailUser) {
    return userLocalArr.find(({email}) => email === emailUser)
}

inputSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    let userEmail = "";

    const userData = {
        name: name.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value
      };
    
    
    if(userLocalArr.length !== 0){
        userEmail = findEmail(userData.email);
    }  else {
        userLocalArr = [];
        userEmail = "";
    }
    
      if(userEmail) {
            madal_container.classList.remove("close_status");
            textModal.textContent = "Пользователь с такой почтой уже зарегестрирован";
        }

        else {
            userLocalArr.push(userData);
            localStorage.setItem("userLocal", JSON.stringify(userLocalArr));
            textModal.textContent = "Вы успешно зарегестрированы";
            madal_container.classList.remove("close_status");
            continue_registr.classList.add("close_status");
            registrBtn.classList.add("close_status");
            }
      
});

closeBtn.addEventListener("click", () => {
    modal.textContent = "";
    madal_container.classList.toggle("close_status")
});

login.addEventListener("click", () => {
    const userData = findEmail(emailLog.value);
    if(userData.password === passwordLog.value) {
        showPopup("Вы успешно авторизовались!");
        forms.classList.add("close_status");
        orderForm.style.display = "block";
    } else showPopup("Вы еще не зарегестрированы");
});

function showPopup(message) {
    popup.textContent = message;
    popup.classList.add("show");
    
    setTimeout(() => {
        popup.classList.remove("show");
    }, 2000);
};

    
orderForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const address = document.getElementById("address").value;
        const price = document.getElementById("price").value;
        const cost = document.getElementById("cost").value;

        const orderData = {
            address: address,
            price: price,
            cost: cost
        };

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(orderData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then((response) => {
            if (response.status === 201) {
                showPopup("Заказ успешно создан");
                orderBtns.classList.remove("close_status");
            }
        })
        .catch((error) => {
            console.log("Error:", error);
        });
    });

continue_registr.addEventListener("click", () => {
    madal_container.classList.add("close_status");
    email.value = '';
})

orderClose.addEventListener("click", () => {
    orderForm.classList.add("close_status");
    orderBtns.classList.add("close_status");
    forms.classList.remove("close_status");
});



async function loadPosts() {
    await fetch(url)
            .then((response) => response.json())
            .then((response) => createOrder(response)); 
     
}


function createOrder(order) {
    const pTitle = document.createElement("p");
    const pBody = document.createElement("p");
    pTitle.textContent = order[0].title;
    pBody.textContent = order[0].body;
    
    loader.classList.add("close_status");
    modal.append(pTitle,pBody);
}

pay.addEventListener("click", order);
send.addEventListener("click", order);
confirm.addEventListener("click", order);

function order() {
    madal_container.classList.remove("close_status");
    textModal.textContent = "Обработка заказа";
    modal.append(loader);
    loader.classList.remove("close_status");
    continue_registr.classList.add("close_status");

    loadPosts();
}

    
    


    



