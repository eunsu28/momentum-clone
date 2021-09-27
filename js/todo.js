// document quarySelector
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list");
//

// array
const toDos = [];
//

// save 
function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}
//

// delate to do
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}
//

// inner text todo
function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button")
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}
//

// function to handle submit
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = ""; 
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}
//


//eventlistener
toDoForm.addEventListener("submit", handleToDoSubmit);
//

function test(item) {
    console.log(item)
}

const savedToDos = localStorage.getItem(toDos);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(test);
}