const loginForm = document.querySelector("#login");
const loginInput = document.querySelector("#login input");


function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);

//.length tell the length 