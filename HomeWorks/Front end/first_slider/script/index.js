const root = document.querySelector("#root");
const left_triger = document.querySelector(".trigers .left");
const right_triger = document.querySelector(".trigers .right");
let post_number = 1;

const getPostId = localStorage.getItem("postId");
const localPostId = getPostId ? getPostId : post_number;

const colorGenerator = () => {
    return Math.floor(Math.random() * 256);
};

function createPost(id,title, body) {
    root.innerText="";
    const title_p = document.createElement("p");
    const body_p = document.createElement("p");
    const id_p = document.createElement("p")
    const container = document.createElement("div");
    const backgroundColor = `rgb(${colorGenerator()}, ${colorGenerator()}, ${colorGenerator()})`;

    title_p.innerText = title;
    body_p.innerText = body;
    id_p.innerText = id
    title_p.classList.add("subheader");
    container.classList.add("container");
    container.style.backgroundColor = backgroundColor;
    container.append(id_p,title_p, body_p);
    root.append(container);
    localStorage.setItem("postId", id);
}

function loadPost() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post_number}`)
        .then((response) => response.json())
        .then(({id,title, body}) => createPost(id,title, body));     
}

left_triger.addEventListener("click", ()=> {
    post_number--;
    
    if(post_number < 1) {
        wrongPostId();
    } else {
        loadPost();
    } 
    
});

right_triger.addEventListener("click", () => {
    post_number++;
    if(post_number > 100 || post_number < 1) {
        wrongPostId();
    } else {
    loadPost();
    }
})

function wrongPostId() {
    root.innerText="";
    const wrongId = document.createElement("p");
    wrongId.innerText = "Такого поста нет";
    wrongId.classList.add("subheader");
    root.append(wrongId);
}

post_number = localPostId;
loadPost();

