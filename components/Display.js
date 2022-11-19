import store from "../redux/store.js"
import EditForm from "./EditForm.js"
import { deleteTask, getEditForm } from "../redux/actions.js"

const Display = () => {
    const displayDiv = document.getElementById("displayDiv")
    displayDiv.innerHTML = ""
    //conditional Rendering if nothing to do
    if (store.getState().todos.tasks.length < 1) {
        //What to render if there is nothing to do
        let h3 = document.createElement("h3")
        h3.innerText = "There is nothing to be done here!"
        displayDiv.append(h3)
    } else {
        //if there is something to do 
        const ul = document.createElement("ul")
        displayDiv.append(ul)
        const todos = store.getState().todos.tasks
        todos.forEach(todo => {
            let li = document.createElement("li")
            //here begin conditional for edit form
            if (store.getState().todos.isEdit && store.getState().todos.editId === todo.id) {
                //form
                li.append(EditForm())
            } else {
                //normal render
                li.innerText = todo.task
                //delete Button
                let deleteBtn = document.createElement("button")
                deleteBtn.innerText = "DELETE"
                deleteBtn.classList.add("btn", "btn-danger")
                deleteBtn.addEventListener("click", () => {
                    store.dispatch(deleteTask(todo))
                    Display()
                })
                li.append(deleteBtn)
                //edit Button
                let editBtn = document.createElement("button")
                editBtn.innerText = "EDIT"
                editBtn.classList.add("btn", "btn-info")
                editBtn.addEventListener("click", () => {
                    store.dispatch(getEditForm(todo))
                    Display()
                })
                li.append(editBtn)
            }
            //end of conditional
            ul.append(li)
        })
        //below is end of "else" from conditional rendering
    }

}

export default Display