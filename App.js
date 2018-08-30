import React from 'react';
// import AppCounter from "./src/AppCounter";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Text, View } from 'react-native';
import store from './src/stores/index';
import TodoApp from './src/TodoApp';


export default class App extends React.Component {


  render() {
    return (
      <Provider store={ store }>
        <TodoApp />
      </Provider>
    );


  }
}

