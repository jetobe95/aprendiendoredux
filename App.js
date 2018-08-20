import React from 'react';
import AppCounter from "./src/AppCounter";
import { createStore } from "redux";
import { Provider } from "react-redux";


const initialState = {
  counter: 0,
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        counter: state.counter + 1.
      }
    case "DECREASE":
      return {
        counter: state.counter - 1,
      }
    case "LONGPRESS":
      return {
        counter: state.counter - 1,
      }

  }
  return state;


}

const store = createStore(reducer)



export default class App extends React.Component {


  render() {
    return (
      <Provider store={store}> 
        <AppCounter />
        
      </Provider>

    );
  }
}

