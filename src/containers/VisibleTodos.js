import {connect} from "react-redux";
import TodoList from '../components/TodoList';
import { toogleTodo } from "../actions";

const mapstatetoProps=state=>({
    todos:state.todos
})
const MapDispatchToProps=dispatch=>(
    {
    toggleTodo:id=>dispatch(toogleTodo(id))
})


export default connect(mapstatetoProps,MapDispatchToProps)(TodoList)