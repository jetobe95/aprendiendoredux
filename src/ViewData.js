import React,{Component} from 'react';
import {  View, Text,StyleSheet,SafeAreaView } from 'react-native';
import { connect } from 'react-redux';

class ViewData extends Component{
 
 render(){
       return(
         <SafeAreaView >
           <Text onPress={()=>this.props.increase()}
           onLongPress={()=>this.props.onLongPress()}
            style={{fontSize:200,color:this.props.counter<10?"black":this.props.counter>20?"blue":"green"}} >
                {this.props.counter}
           </Text>
         </SafeAreaView>
           );
        }
    }
   
   
   

 function MapStateToProps(state){
    return{
        counter:state.counter,
    }
}
    function MapDispatchToProps(dispacth){
        return{
            increase:()=>dispacth({type:"INCREASE"}),
            onLongPress:()=>dispacth({type:"LONGPRESS"})
        }
     }
export default connect(MapStateToProps,MapDispatchToProps)(ViewData)