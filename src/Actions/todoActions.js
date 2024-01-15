import { ADD_TODO,DELETE_TODO,EDIT_TODO,FINISH_TODO } from "../constants/actions.js";

export const addtodo = (inputText) => ({type:ADD_TODO, payload: {inputText}});
export const deletetodo = (todo) => ({type:DELETE_TODO, payload:{todo}});
export const edittodo = (todo,todoText) => ({type:EDIT_TODO, payload:{todo,todoText}});
export const finishtodo = (todo,isFinished) => ({type:FINISH_TODO, payload:{todo,isFinished}});