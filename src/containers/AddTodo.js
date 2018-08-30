import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput }
    from 'react-native';

import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { addTodo } from './../actions/index';

class AddTodo extends Component {
    state = { text: "" }
    addTodo = (text) => {

        this.props.dispatch(addTodo(text))
        this.setState({ text: "" })
    }
    render() {
        return (
            <View style={ { flexDirection: "row", marginHorizontal: 20 } }>
                <TextInput
                    placeholder=" Eg .Create New Video"
                    value={ this.state.text }
                    onChangeText={ (text) => this.setState({ text: text }) }
                    style={ {
                        borderWidth: 1,
                        flex: 1,
                        borderColor: "#f2f2e1",
                        borderRadius: 8,
                        backgroundColor: "#eaeaea",
                        height: 50,
                        padding: 5
                    } }
                />
                <TouchableOpacity onPress={ () => this.addTodo(this.state.text) }>
                    <View style={
                        {
                            height: 50,
                            backgroundColor: "#eaeaea",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    }>

                        <Ionicons
                            style={ {
                                color: "#de9595"
                            } }
                            name="md-add"
                            size={ 20 }
                        />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}



const styles = StyleSheet.create({})
export default connect()(AddTodo)  