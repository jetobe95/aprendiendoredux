import React, { Component } from 'react';
import {createStackNavigator } from "react-navigation";
import AppCounter from './AppCounter';
import ViewData from './ViewData';


export default createStackNavigator({
    AppCounter:{
        screen:AppCounter,
    },
    ViewData:{
        screen:ViewData,
    }
})
