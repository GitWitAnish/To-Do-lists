
const addListBtn = document.querySelector("#add-list-btn");
const todoListsContainer = document.querySelector("#todo-lists");
const clearAllBtn = document.querySelector("#clear-all-btn");



    addListBtn.addEventListener("click", () => {
        const existingInputs = document.querySelectorAll("#todo-lists input[type='text']");
    
        for (const input of existingInputs) {
            if (input.value.trim() === "") {
                window.alert("Please fill in the current task before adding a new one!");
                input.focus();
                return;
            }
        }
    
        const todoItem = document.createElement("li");
    
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
    
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.placeholder = "Enter Task";
    
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");
        deleteBtn.textContent = "X";
    
        checkbox.addEventListener("change", () => {
            inputField.classList.toggle("completed");
        });
    
        inputField.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                inputField.setAttribute("readonly", true);
                inputField.blur();
            }
        });
    
        deleteBtn.addEventListener("click", () => {
            todoListsContainer.removeChild(todoItem);
        });
    
        todoItem.append(checkbox, inputField, deleteBtn);
    
        todoListsContainer.appendChild(todoItem);
    });
    
    clearAllBtn.addEventListener("click", () => {
        let clearAllConfirmation = window.confirm("Are you sure you want to clear all tasks?");
    
        if (clearAllConfirmation) {
            todoListsContainer.innerHTML = '';
        } else {
            window.alert("Clear action canceled.");
        }
    });