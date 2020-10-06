console.log("hello from console");

// SELECT form elements
// const addNewItem = document.querySelector("#addNewItem");
const todoInput = document.querySelector("#todoInput");
const submitBtn = document.querySelector("#submitBtn");
// get ul#displayList
const displayList = document.querySelector("#displayList"); 

// submit form event handler
submitBtn.addEventListener("click", newListItem);

// MANIPULATE input
function newListItem(event){
    // *** use to prevent form from submitting
    event.preventDefault();
    // create new entry
    const listDiv = document.createElement("div");
    listDiv.classList.add("todoDiv");
    displayList.appendChild(listDiv);
    const listItem = document.createElement("li");
    listItem.classList.add("todo");
    listDiv.appendChild(listItem);
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt fa-md"></i>';
    listDiv.appendChild(deleteBtn);
    // display input in the li
    listItem.innerHTML = todoInput.value;
    todoInput.value = "";
}

// DELETE list items
displayList.addEventListener("click", deleteItem);
displayList.addEventListener("click", todoDone);

function deleteItem(event){
    const item = event.target;
    console.log(item);
    if(item.classList[0] === "deleteBtn"){
        const todoItem = item.parentElement;
        todoItem.remove();
    }
}

// change color when done
function todoDone(e){
    const item = e.target;
    if(item.classList[0] === "todo"){
        const todoDiv = item.parentElement;
        todoDiv.classList.toggle("complete");
    }
}

