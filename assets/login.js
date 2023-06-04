import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'


  const login = ({navigation}) => {

    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const handleLogin=()=>{
      signInWithEmailAndPassword(auth,email,password)
      .then((usercredential)=>{

        const user=usercredential.user
        Alert.alert(  
          'success',  
          'logged In',  
          [    
              {text: 'OK', onPress: () => navigation.navigate('main')},  
          ]  
      );  

      }).catch((error)=>{
        Alert.alert(error.message)
      })
     
    }
    return (
      <View style={styles.container}>
        <Text>login</Text>
        <TextInput value={email}
          onChangeText={(text)=>setEmail(text)} style={styles.txtinput} placeholder='email' ></TextInput>
        <TextInput value={password}
      onChangeText={(text)=>setPassword(text)} style={styles.txtinput} placeholder='password' secureTextEntry></TextInput>
        <TouchableOpacity style={styles.btn} onPress={()=>handleLogin()}><Text>confirm</Text></TouchableOpacity>
      
      </View>
    )
  }
  
  export default login
  
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