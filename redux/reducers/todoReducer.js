import { GET_INPUT, ADD_A_TASK, DELETE_TASK, GET_EDIT_FORM, EDIT } from "../types.js"

let initialState = {
    task: "",
    tasks: [],
    isEdit: false,
    editTask: "",
    editId: ""
}


const todoReducer = (state=initialState, action) =>{
    switch(action.type){
        case GET_INPUT:
            let name = action.payload.name
            return {
                ...state,
                [name]: action.payload.value
            }
        case ADD_A_TASK:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks],
                task: ""
            }
        case DELETE_TASK:
            let meanGirls = state.tasks.filter(todo => todo.id !== action.payload.id)
            return {
                ...state,
                tasks: meanGirls
            }
        case GET_EDIT_FORM:
            return {
                ...state,
                isEdit: true,
                editTask: action.payload.task,
                editId: action.payload.id
            }
        case EDIT:
            let youveChanged = state.tasks.map(todo => {
                if(todo.id === action.payload.id){
                    todo.task = action.payload.task
                }
                return todo
            })
            return {
                ...state,
                tasks: youveChanged,
                isEdit: false,
                editTask: "",
                editId: ""
            }
        default:
            return state
    }
}

export default todoReducer