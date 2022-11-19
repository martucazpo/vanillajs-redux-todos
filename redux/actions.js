import { GET_INPUT, ADD_A_TASK, DELETE_TASK, GET_EDIT_FORM, EDIT } from "./types.js"
import { uuidv4 } from "../assets/libraries/uuidv4.js"

export const getInput = (input) =>{
    return {
        type: GET_INPUT,
        payload: input
    }
}

export const addATask = (task) =>{
    let fullTask = {}
    fullTask.id = uuidv4()
    fullTask.task = task
    return {
        type: ADD_A_TASK,
        payload: fullTask
    }
}

export const deleteTask = (task) =>{
    return {
        type: DELETE_TASK,
        payload: task
    }
}

export const getEditForm = (task) =>{
    return {
        type: GET_EDIT_FORM,
        payload: task
    }
}

export const edit = (task) =>{
    return {
        type: EDIT,
        payload: task
    }
}