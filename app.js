const loginInput = document.querySelector("#login input");
const loginButton = document.querySelector("#login button");

function buttonClick() {
    const username = loginInput.value;
    console.log(username)
}

loginButton.addEventListener("click", buttonClick)

//.length tell the length 