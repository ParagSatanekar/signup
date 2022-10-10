import ReactRootView from 'react-native';
 import React, {useEffect} from 'react';  
 import { Button , TextInput} from 'react-native-paper';
import { ActivityIndicator } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
 import AsyncStorage from '@react-native-async-storage/async-storage';

 const Loadingscreen = (props) => {

const detectLogin = async () => {
  const token = await AsyncStorage.getItem('token')
  if(token) {
     props.navigation.replace("home")
  } else{
    props.navigation.replace("login")   
  } 
}

  useEffect (async ()=>{  
    detectLogin()
  },[])
 
   return (  
    <View style = {styles.loading}>   
    <ActivityIndicator size="large" color="blue" />
     </View>
   );
 };

 const styles = StyleSheet.create({
  loading:{
  flex:1,
  justifyContent:"center",
  alignItems:"center"
  }
})
 
 
 export default Loadingscreen;
 