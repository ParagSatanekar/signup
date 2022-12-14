

 import ReactRootView from 'react-native';
 import React, {useState} from 'react';  
 import { AsyncStorage } from 'react-native';
 import { Button , TextInput} from 'react-native-paper';
//   import type {Node} from 'react';
 import {StatusBar,
Text,
   View,
   TouchableOpacity, 
   KeyboardAvoidingView
   
 } from 'react-native';
 
 const Signup = (props) => {
 
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');

const sendCred = async (props)=> {
fetch("http://10.0.2.2:3000/signup",{
  method:"POST",
  headers:{'content-Type': 'application/json'
},
body:JSON.stringify({
  "email":email,
  "password":password
})
})
.then(res=>res.json())
.then(async data=>{
  console.log(data)
  try {
    await AsyncStorage.setItem('token', data.token)
    props.navigation.replace("home")
  } catch (e) {
    console.log("error",e )  
  }
})
}

   return (  
     <>  
    <KeyboardAvoidingView behavior="position">
    <StatusBar backgroundColor="orange" barStyle="light-content" />
     <Text style={{fontSize:35,marginLeft:18,marginTop:10,color:"black"}}>welcome to</Text>
     <Text style={{fontSize:35,marginLeft:18,color:"black"}}>react native app</Text>
     
     <View
       style ={{
         borderBottomColor:"black",
         borderBottomWidth:4,
         borderRadius:10,
         marginLeft:20,
         marginRight:110,
       }}
       /> 
      <Text style={{fontSize:20,marginLeft:18,marginTop:20,color:"black"}}>Create new account</Text>
      <TextInput label='Email' 
                 mode="outlined"
                 value={email}
                 style={{marginLeft:18,marginRight:18,marginTop:18}} 
                 theme={{colors:{primary:"blue"}}}
                 onChangeText={(text)=>setEmail(text)}
      /> 
      <TextInput label='password'   
                 mode="outlined"
                 secureTextEntry={true}
                 value={password}
                 style={{marginLeft:18,marginRight:18,marginTop:18}} 
                 theme={{colors:{primary:"blue"}}}
                 onChangeText={(text)=>setPassword(text)}
      /> 
      <Button mode="contained"
        style={{marginLeft:18,marginRight:18,marginTop:18}} 
      onPress={() => sendCred(props)}> sign up
      </Button>cd
   <TouchableOpacity>
   <Text style={{fontSize:15,marginLeft:18,marginTop:20,color:"black"}}onPress={()=>props.navigation.navigate("login")}
   >already have an account ?</Text>  
   </TouchableOpacity>
   </KeyboardAvoidingView>
     </>
   );
 };
 
 
 export default Signup;
 