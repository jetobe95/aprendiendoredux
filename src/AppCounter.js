import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import ViewData from './ViewData';
class App extends React.Component {
    render() {
        return (
            <View style={ { flex: 1, justifyContent: "space-between", alignItems: "center" } }>
                <View style={ { width: 300, flexDirection: "row", justifyContent: "space-around" } }>

                    <ViewData />

                </View>

                <View style={ styles.container }>
                    <View style={ { width: 300, flexDirection: "row", justifyContent: "space-around" } }>
                        <TouchableOpacity

                            onPress={ () => this.props.decrease() }>
                            <Text
                                style={ { fontSize: 20, backgroundColor: "#fafafa" } }
                            >Decrementar</Text>
                        </TouchableOpacity>
                        <Text style={ { fontSize: 17, fontWeight: "bold" } }>{ this.props.counter }</Text>
                        <TouchableOpacity

                            onPress={ () => this.props.increase() }>
                            <Text
                                style={ { backgroundColor: "#fafafa", fontSize: 20 } }
                            >Incrementar</Text>
                        </TouchableOpacity>


                    </View>
                </View>
                <View style={ { width: 300, flexDirection: "row", justifyContent: "space-around" } }>

                    <ViewData />

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
function mapStateToProps(state) {
    return {
        counter: state.counter,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        increase: () => dispatch({ type: "INCREASE" }),
        decrease: () => dispatch({ type: "DECREASE" }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)