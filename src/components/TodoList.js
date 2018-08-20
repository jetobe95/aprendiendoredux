import React from 'react';
import {  View, Text,StyleSheet,TouchableOpacity } from 'react-native';
const  TodoList =({todos,toggleTodo})=>{
const list =todos.map(todo=>(
    <TouchableOpacity key={todo.id}
    onPress={()=>toggleTodo(todo.id)}
    >
        <Text
        style={{fontSize:24,
        textDecorationLine:todo.completed?"line-through":"none"}}
        >{todo.text}</Text>
    </TouchableOpacity>
))

return(
  <View >
    {list}
 </View>
);
}
const styles=StyleSheet.create({})
export default TodoList;