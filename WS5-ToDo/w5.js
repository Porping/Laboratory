let enterbutton = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");
// console.log("test");
function inputLength() {
    return input.value.length;
}
function listLength() {
    return item.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    function isDone() {
        li.classList.toggle("done");
    }
    li.addEventListener("click", isDone);

    var deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);


    deleteBtn.addEventListener("click",deleteListItem);

    function deleteListItem() {
        li.classList.add("delete");
    }
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}

enterbutton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


