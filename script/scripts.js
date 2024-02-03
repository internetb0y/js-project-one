// Declare And Initialize Variable
const btn_enter = document.getElementById("enter");
const btn_clear = document.getElementById("clear");
const inpt_list = document.getElementById("input-list");

const btn_dlete = document.querySelector("ul");

var button, li, ul, section;

// Declare And Initialize Function
function addListClick() {
    if (inpt_list.value.length > 0) {
        button = document.createElement("button");
        button.classList.add("delete");
        button.innerHTML = "Delete";

        li = document.createElement("li");
        li.classList.add("list");
        li.appendChild(document.createTextNode(inpt_list.value));
        li.appendChild(button);

        ul = document.querySelector("ul");
        ul.appendChild(li);

        inpt_list.value = "";
    }
}

function clearList() {
    ul = document.querySelector("ul");
    ul.innerHTML = " ";
}

function addListPress(event) {
    if (inpt_list.value.length > 0 && event.keyCode === 13) {
        button = document.createElement("button");
        button.classList.add("delete");
        button.innerHTML = "Delete";

        li = document.createElement("li");
        li.classList.add("list");
        li.appendChild(document.createTextNode(inpt_list.value));
        li.appendChild(button);

        ul = document.querySelector("ul");
        ul.appendChild(li);

        inpt_list.value = "";
    }
}

function deleteList(event) {
    if (event.target.tagName === "BUTTON") {
        li = event.target.parentNode;
        ul = li.parentNode;
        ul.removeChild(li);
    }
}

// Main Function
btn_enter.addEventListener("click", addListClick)
btn_clear.addEventListener("click", clearList)
inpt_list.addEventListener("keypress", addListPress)

btn_dlete.addEventListener("click", deleteList)
