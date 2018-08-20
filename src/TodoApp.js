import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddTodo from './containers/AddTodo';
import VisibleTodos from "./containers/VisibleTodos";
import { connect } from 'react-redux';


class TodoApp extends Component {
    state = {
        todos: [],
        visibilityFilter: "SHOW_ALL_TODOS",
    }
    render() {
        return (
            <View
                style={ { flex: 1, padding: 40 } }
            >
                <AddTodo />
                <View>
                    <VisibleTodos />
                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create({})
export default  connect()(TodoApp) ;