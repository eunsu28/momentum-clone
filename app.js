const loginInput = document.querySelector("#login input");
const loginButton = document.querySelector("#login button");

function buttonClick() {
    console.log("Hello", loginInput.value);
    console.log("clicked");
}

loginButton.addEventListener("click", buttonClick)