const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteAlert() {
    if(confirm("정말 삭제할까요?")) {
        alert("삭제되었습니다.");
    } else {
        alert("취소되었습니다.");
        prevent.deleteTodo();
    }
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    deleteAlert(); 
    li.remove();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = "todo_checkbox";
    li.appendChild(checkbox);
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li); 
    
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            span.style.textDecoration = 'line-through';
        } else {
            span.style.textDecoration = 'none';
        }
    });
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedtoDos = localStorage.getItem(TODOS_KEY);

if(savedtoDos !== null) {
    const parsedToDos = JSON.parse(savedtoDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}
