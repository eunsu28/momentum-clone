const loginForm = document.querySelector("#login");
const loginInput = document.querySelector("#login input");


function onLoginSubmit() {
    const username = loginInput.value;
    console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

//.length tell the length 