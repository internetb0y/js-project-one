const STORAGE = "list-todo";
const todos = [];

const todoId = () => {
    return + new Date();
}

const objTodo = (id, text) => {
    return {
        id,
        text
    };
}

const validationData = () => {
    if (typeof(Storage) === "undefined") {
        console.log("This Function Can't Be Used!");
        return false;
    }

    return true;
}

const saveData = () => {
    if (validationData()) {
        const parseData = JSON.stringify(todos);
        localStorage.setItem(STORAGE, parseData);
    }
}

const loadData = () => {
    const getData = localStorage.getItem(STORAGE);
    const data = JSON.parse(getData);

    if (data !== null) {
        for (const todo of todos) {
            todos.push(todo);
        }
    }
}

const addTodo = () => {
    const todo = document.querySelector('#input-list').value;

    const uniqueId = todoId();
    const objectTodo = objTodo(uniqueId, todo);
    todos.push(objectTodo);
    saveData();
}

const clearTodo = () => {
    const containerList = document.querySelector('.todo-list ul');
    containerList.innerHTML = "";
    todos.splice(0, todos.length);
    saveData();
}

const makeTodo = (objectTodo) => {
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', 'delete');
    deleteButton.setAttribute('class', 'delete');
    deleteButton.innerText = "Delete";

    const paragraph = document.createElement('p');
    paragraph.setAttribute('id', 'text');
    paragraph.innerText = objectTodo.text;

    const list = document.createElement('li');
    list.setAttribute('class', 'list');
    list.appendChild(paragraph);
    list.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        const unorderList = document.querySelector('.todo-list ul');
        unorderList.removeChild(list);

        deleteTodo(objectTodo.id);
        console.log(todos);
    })

    return list;
}

const findIndexTodo = (objectId) => {
    for (const index in todos) {
        if (todos[index].id === objectId) {
            return index;
        }
    }

    return -1;
}

const deleteTodo = (objectId) => {
    const todo = findIndexTodo(objectId);

    if (todo === -1) {
        return;
    }

    todos.splice(todo, 1);
    saveData();
}

document.addEventListener('DOMContentLoaded', () => {
    const addClick = document.querySelector('#enter');

    addClick.addEventListener('click', () => {
        if (document.querySelector('#input-list').value !== "") {
            addTodo();
            console.log(todos);

            const containerList = document.querySelector('.todo-list ul');
            containerList.innerHTML = "";

            for (const todo of todos) {
                const listTodo = makeTodo(todo);
                containerList.appendChild(listTodo);
            }

            document.querySelector('#input-list').value = "";
        }
    })

    const addPress = document.querySelector('#input-list');

    addPress.addEventListener('keypress', (event) => {
        if (event.keyCode === 13) {
            addTodo();
            console.log(todos);

            const containerList = document.querySelector('.todo-list ul');
            containerList.innerHTML = "";

            for (const todo of todos) {
                const listTodo = makeTodo(todo);
                containerList.appendChild(listTodo);
            }

            document.querySelector('#input-list').value = "";
        }
    })

    const clear = document.querySelector('#clear');

    clear.addEventListener('click', () => {
        clearTodo();
        console.log(todos);
    })
})