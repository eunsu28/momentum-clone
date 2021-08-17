const loginForm = document.querySelector("#login");
const loginInput = document.querySelector("#login input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value;
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

loginForm.addEventListener("submit", onLoginSubmit);

//.length tell the length 