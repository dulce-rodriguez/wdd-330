import utils from "./utils";
import ls from "./ls";

//load the list 
loadTodos();

//add event listeners
document.querySelector("#btn").onclick = NewTodo;
document.querySelector('#activeFilter').onclick = applyFilter;
document.querySelector('#allFilter').onclick = applyFilter;

/*
//get input
const input = document.querySelector('#todoInput');
input.addEventListener('keypree', e => {
    if (e.keyCode == '13') NewTodo();
})*/


function NewTodo(e) {
    const todo = {id: Date.now(), content: input.ariaValueMax, completed: false };
    //reset the input field
    input.value = '';
    //add to the UI
    const todoItem = createTodoItem(todo);
    //save to localStorage
    ls.saveTodo(todo);

    loadTodos();
}

function createTodoItem(todo) {
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //complete btn
    const completeBtn = document.createElement('button');
    completeBtn.setAttribute('data-id', todo.id);
    completeBtn.classList.add('complete-btn');

    //todo content
    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content;
    todoContent.classList.add('todo-content');

    //delete btn
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', todo.id);
    deleteBtn.classList.add('todo-delete-btn');
    deleteBtn.innerText = "X";
    deleteBtn.onclick = deleteTodo;

    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(todoContent);
    todoDiv.appendChild(deleteBtn);

    return todoDiv;
}

function addToList(todoDiv) {
    //Add to the document
    document.querySelector('#todos').appendChild(todoDiv);
}

function loadTodos() {
    const todoList = ls.getTodoList();
    //debugging
    console.log(todoList)

    todoList.forEach(todo => {
        const el = createTodoItem(todo)
        addToList(el);
    })
}

function deleteTodo(e) {
    const btn = e.currentTarget;
    ls.deleteTodo(btn.getAttribute('data-id'));
    document.querySelector('#todos').innerHTML = '';
    loadTodos();
}

function applyFilter(e) {
    //clear the List
    document.querySelector('#todos').innerHTML = '';

    //declare variables
    let filteredTodos = [];
    const allTodos = ls.getTodoList();

    //check which filter to apply
    if (e.currentTarget.id =='activeFilter') {
        filteredTodos = utils.activeFilter(allTodos)
    }
    else if (e.currentTarget.id == 'allFilter') {
        filteredTodos = allTodos
    }
    
    //draw the list
    filteredTodos.forEach( todo => {
        const el = createTodoItem(todo)
        addToList(el)
    })
}