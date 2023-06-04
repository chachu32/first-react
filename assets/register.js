import { StyleSheet, Text, View,TextInput, TouchableOpacity, Alert } from 'react-native'
import React,{useState} from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import{auth} from '../firebase'

const register =({navigation}) => {
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const handelRegister=()=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      const user=userCredential.user
      Alert.alert(  
        'success',  
        'user created',  
        [    
            {text: 'OK', onPress: () => navigation.navigate('login')},  
        ]  
    );  
      }).catch((error)=>{
      Alert.alert(error.message)
    }
    )
   //Alert.alert('handle register')
  }
  return (
    <View style={styles.container}>
      <Text>register</Text>
      <TextInput value={email}
      onChangeText={(text)=>setEmail(text)} style={styles.txtinput} placeholder='email' ></TextInput>
      <TextInput value={password}
      onChangeText={(text)=>setPassword(text)}style={styles.txtinput} placeholder='password' secureTextEntry></TextInput>
      <TouchableOpacity style={styles.btn} onPress={()=>handelRegister()}><Text>confirm</Text></TouchableOpacity>
    </View>
  )
}

export default register

const styles = StyleSheet.create({
   container:{
     flex:1,
     backgroundColor:'cyan',
     alignItems:'center',
     justifyContent:'center',
   },
   btn:{
        backgroundColor:'white',
        marginVertical:30,
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius:15,
   },
   txtinput:{
    backgroundColor:'white',
    marginVertical:30,
    paddingVertical:10,
    paddingHorizontal:10,
    borderRadius:15,
    width:'80%'
}
})