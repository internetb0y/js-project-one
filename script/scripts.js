// Declare And Initialize Variable
const btn_enter = document.getElementById("enter");
const btn_clear = document.getElementById("clear");
const input = document.getElementById("input-box");
const del_node = document.querySelector(".wrapper-ul");

var li, button, div, ul;

// Declare And Initialize Function
function textLength() {
    return input.value.length;
}

function clearList() {
    ul = document.querySelector("ul");
    ul.innerHTML = " ";
}

function deleteList(event) {
    if (event.target.tagName == "BUTTON") {
        li = event.target.parentNode;
        ul = li.parentNode;
        ul.removeChild(li);
    }
}

function addListClick() {
    if (textLength() > 0) {
        button = document.createElement("button");
        button.innerHTML = " Delete ";
        button.classList.add("btn-delete");

        li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));

        div = document.createElement("div");
        div.classList.add("wrapper-li");
        div.appendChild(li);
        div.appendChild(button);

        ul = document.querySelector("ul");
        ul.appendChild(div);

        input.value = "";
    }
}

function addListPress(event) {
    if (textLength() > 0 && event.keyCode == 13) {
        button = document.createElement("button");
        button.innerHTML = " Delete ";
        button.classList.add("btn-delete");

        li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));

        div = document.createElement("div");
        div.classList.add("wrapper-li");
        div.appendChild(li);
        div.appendChild(button);

        ul = document.querySelector("ul");
        ul.appendChild(div);

        input.value = "";
    }
}

// Main Function
input.addEventListener("keypress", addListPress);
btn_enter.addEventListener("click", addListClick);
btn_clear.addEventListener("click", clearList);
del_node.addEventListener("click", deleteList);
