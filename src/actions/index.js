
import { ADD_TODO ,TOGGLE_TODO} from './actionTypes';

export const addTodo=(text)=>({
    type:ADD_TODO,
    id:Date.now(),
    text:text,
})

export const toogleTodo=id=>({
    type:TOGGLE_TODO,
    id
})