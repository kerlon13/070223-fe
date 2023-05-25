const info = ["item", "logo", "lift", "icon", "ice", "let"];

const newArr = info.map((el) => {
    if (el[0] === "i") {
        return "pro" + el;
    } else if(el[0] === "l") {
        return "min" + el;  
    }
});

console.log(newArr);