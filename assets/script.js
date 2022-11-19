import store from "../redux/store.js"
import Display from "../components/Display.js"
import { getInput, addATask } from "../redux/actions.js"

Display()

const taskInput = document.getElementById("inputTask")
taskInput.addEventListener("input", ()=>{
    store.dispatch(getInput(taskInput))
    taskInput.value = store.getState().todos.task
})

const addTaskForm = document.getElementById("addTaskForm")
addTaskForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    store.dispatch(addATask(store.getState().todos.task))
    taskInput.value = store.getState().todos.task
    Display()
})

