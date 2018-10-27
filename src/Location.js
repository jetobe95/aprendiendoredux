import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Platform
} from "react-native";
import { Constants, Location, Permissions } from 'expo';
class LocationComponent extends Component {
state={
    errorMessage:'',
    location:{}
}
    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
          this.setState({
            errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
          });
        } else {
          this._getLocationAsync();
        }
      }
      
      _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        }
        await Location.watchPositionAsync({timeInterval:1000},(coord)=>{
            console.log({coord})
            this.setState({ location:coord });
        });
    }
    
    render() {
        let text = 'Waiting..';
        if (this.state.errorMessage) {
          text = this.state.errorMessage;
        } else if (this.state.location) {
          text = JSON.stringify(this.state.location);
        }
    
        return (
          <View style={styles.container}>
            <Text style={styles.paragraph}>{text}</Text>
          </View>
        );
      }
    }
    

export default LocationComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        textAlign: 'center',
      },
});