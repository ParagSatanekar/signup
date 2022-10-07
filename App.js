

//  import ReactRootView, { View } from 'react-native';
import React ,{useEffect,useState} from 'react';  
//import { Button , TextInput} from 'react-native-paper';

// import { ScrollView,StatusBar,StyleSheet,  } from 'react-native';
  import Signup from './screens/Signupscreen'
  import Loginscreen from './screens/Loginscreen';  
 import Loadingscreen from './screens/Loadingscreen';
// import Homescreen from './screens/Homescreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Homescreen from './screens/Homescreen';
// import { AsyncStorage } from 'react-native';


const Stack = createStackNavigator();

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

<NavigationContainer>

    <Stack.Navigator headerMode="none"> 
   
    <Stack.Screen name="laoding" component={Loadingscreen} /> 
    <Stack.Screen name="home" component={Homescreen} />
    <Stack.Screen name="login " component={Loginscreen} />  
    <Stack.Screen name="signup" component={Signup} />
   
   </Stack.Navigator>
  </NavigationContainer>
)};


export default App;
