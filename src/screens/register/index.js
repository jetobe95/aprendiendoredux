import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";

class Register extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Register</Text>
        <Button title='Navegar' onPress={()=>this.props.navigation.navigate('Login')}/>
      </View>
    );
  }
}
export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});