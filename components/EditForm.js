import store from "../redux/store.js"
import Display from "./Display.js"
import { edit, getInput } from "../redux/actions.js"


const EditForm = () =>{
    const form = document.createElement("form")
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        let id = store.getState().todos.editId
        let task = store.getState().todos.editTask
        store.dispatch(edit({id, task}))
        Display()
    })
    const label = document.createElement("label")
    label.setAttribute("htmlFor", "editInput")
    label.innerText = "Edit Task"
    form.append(label)
    const input = document.createElement("input")
    input.setAttribute("name", "editTask")
    input.id = "editInput"
    input.value = store.getState().todos.editTask
    input.addEventListener("input", ()=>{
        store.dispatch(getInput(input))
    })
    form.append(input)
    const submitBtn = document.createElement("button")
    submitBtn.classList.add("btn", "btn-success")
    submitBtn.innerText = "CHANGE"
    form.append(submitBtn)
    return form
}

export default EditForm