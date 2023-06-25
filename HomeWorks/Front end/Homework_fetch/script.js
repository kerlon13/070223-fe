const url = "https://jsonplaceholder.typicode.com/users/";
const url2 = "https://jsonplaceholder.typicode.com/posts?userId=";
const btnGetUser = document.querySelector(".btnUser");
const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");
const nameUser = document.querySelector(".name");
const userEmail = document.querySelector(".email");
const idUser = document.querySelector("input");

const getLocalId = localStorage.getItem("userId");
const localUserId = getLocalId ? getLocalId : idUser;


const getInfoAboutUser = async (id) => {
    localStorage.setItem("userId", id);
    
    try {
    const data = await fetch(url+id);
    const userData = await data.json();
    
    const dataPosts = await fetch(url2+id);
    const userPost = await dataPosts.json();
    
    const user = {};
    user.name = userData.name;
    user.email = userData.email;
    user.posts = userPost;

    nameUser.innerHTML = userData.name;
    userEmail.innerHTML = userData.email;

    return user;
} catch (error) {
    console.error(error.message); 
}
}


btnGetUser.addEventListener("click", async () => {
    getInfoAboutUser(idUser.value);
    renderUserPosts();
});

btnLeft.addEventListener("click", async () => {
    removeError();
    if ((idUser.value - 1) < 1) {
        displayErrorMessage("Такого пользователя нет");
    } else {
        idUser.value = idUser.value - 1;
    }
    getInfoAboutUser(idUser.value);
    renderUserPosts();
    
});

btnRight.addEventListener("click", async () => {
    removeError();
    const allUser = await fetch(url);
    const allUserData = await allUser.json();
    usersCount = allUserData.length;
    console.log(usersCount);
    if((+idUser.value + 1) > usersCount){
        displayErrorMessage(`У последнего пользователя id =  ${usersCount}`);
    } else{
        idUser.value = +idUser.value + 1
    };
    
    getInfoAboutUser(idUser.value);
    renderUserPosts();
});

const renderUserPosts = async () => {
    const user = await getInfoAboutUser(idUser.value);

    const divRemove = document.querySelector(".user-container")
    if(divRemove){
        divRemove.remove();
    }

    const divContainer = document.createElement("div");
    divContainer.className = "user-container";
    document.body.appendChild(divContainer);
  
    const divUser = document.createElement("div");
    divUser.className = "user"
    divContainer.appendChild(divUser);

    const divPost = document.createElement("div");
    divPost.className = "posts"
    divContainer.appendChild(divPost);

    const pName = document.createElement("p");
    pName.textContent = user.name;

    const pEmail = document.createElement("p");
    pEmail.textContent = user.email

    divUser.appendChild(pName);
    divUser.appendChild(pEmail);

    for (let i=0; i<user.posts.length; i++) {

        const pPostTitle = document.createElement("h2");
        const pPostText = document.createElement("p");
  
        pPostTitle.textContent = user.posts[i].title;
        pPostText.textContent = user.posts[i].body;
        divPost.appendChild(pPostTitle);
        divPost.appendChild(pPostText);
    }
}

getInfoAboutUser(localUserId);
idUser.value = localUserId;
renderUserPosts();

function displayErrorMessage(message) {
    const divError = document.createElement("div");
    divError.className="error";
    document.body.appendChild(divError);
    divError.textContent=message;
    divError.style.color = "red";
};

function removeError() {
    const divRemove = document.querySelector(".error")
    if(divRemove){
        divRemove.remove();
    }
}

