import React,{useEffect, useState} from 'react';  
import { Button, Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
 const Homescreen = (props) => {
  const [email,setEmail] = useState("loading")
 // const [token,setToken] = useState()
 // const fetchToken = async () =>{
//  const token2 = await AsyncStorage.getItem("token")
//    setToken(token2)
//  }

useEffect (async ()=> {
  const token = await AsyncStorage.getItem("token")
   fetch('http://10.0.2.2:3000/',{
    headers:new Headers({
      Authorization:"Bearer " +token 
    })
   }).then(res=>res.json( ))
   .then(data=>{console.log(data)
    setEmail(data.email)
  } 
   )
},[])
  const logout = (props) =>{
       AsyncStorage.removeItem("token").then(() =>{   
        props.navigation.replace("login")
       })  
  }
 
   return (  
     <>  
 <Text style ={{fontSize:18}}>your email is {email}</Text>
 <Button
  mode="contained"
  style={{marginLeft:18,marginRight:18,marginTop:18}}
  onPress = {() => logout(props)}>
    logout
  </Button>
     </>
   );
 };
 
 
 export default Homescreen;
 