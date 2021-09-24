// query
const loginForm = document.querySelector("#login");
const loginInput = document.querySelector("#login input");
const greeting = document.querySelector("#greeting");
//

//keys
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"
//

//function that help to submit 
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting()
}
//

// if username is in localstorage, inner text hello user
function paintGreeting() {
    const username = localStorage.getItem(USERNAME_KEY)
    greeting.innerText = `Hello ${username} nice to meet you`;
    greeting.classList.remove(HIDDEN_CLASSNAME); 
}
//

// 
const savedUsername = localStorage.getItem(USERNAME_KEY)
//

//if don't have username
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show h1 
    paintGreeting()
}
//
