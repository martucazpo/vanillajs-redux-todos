import todoReducer from "./todoReducer.js";


const rootReducer = Redux.combineReducers({todos: todoReducer})


export default rootReducer