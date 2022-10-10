//  import ReactRootView, { View } from 'react-native';
import React ,{useEffect,useState} from 'react';  
//import { Button , TextInput} from 'react-native-paper';

// import { ScrollView,StatusBar,StyleSheet,  } from 'react-native';
  import Signup from './screens/Signupscreen'
  import Loginscreen from './screens/Loginscreen';  
 import Loadingscreen from './screens/Loadingscreen';
// import Homescreen from './screens/Homescreen';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Homescreen from './screens/Homescreen';
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";  
// import { AsyncStorage } from 'react-native';


// const Stack = createStackNavigator();

const App = () => {
     const [isloggedin,setLogged] = useState(null) 

const detectLogin = async () => {
  const token = await AsyncStorage.getItem('token')
  if(token) {
    setLogged(true)
  }else {
      setLogged(false)
  }
}

  useEffect (async ()=>{
   detectLogin()
  },[])

  return (  

<BrowserRouter>

    <Routes headerMode="none"> 
   
    <Route name="laoding" component={Loadingscreen} /> 
    <Route name="home" component={Homescreen} />
    <Route name="login " component={Loginscreen} />  
    <Route name="signup" component={Signup} />
   
   </Routes>
   </BrowserRouter>
)};


export default App;
