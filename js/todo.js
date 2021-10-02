// document quarySelector
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list");
//

// array
let toDos = [];
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
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
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
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}
//


//eventlistener
toDoForm.addEventListener("submit", handleToDoSubmit);
//

// get todos from local storage
const savedToDos = localStorage.getItem("todos");
//

// wow
if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
//