import {createStackNavigator} from 'react-navigation'

//Importando las vistas
import Login from './login/'; 
import Register from './register/'; 


const Navigator=createStackNavigator({
  Registor:{
    screen:Register
  },
  Login:{
    screen:Login
  },
})
export default Navigator;