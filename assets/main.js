import { StyleSheet, Text, View, TouchableOpacity,Alert } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const main = ({navigation}) => {
    const handlemain=()=>{
        signOut(auth)
        .then(()=>{

            Alert.alert(  
                'success',  
                'logged out',  
                [    
                    {text: 'OK', onPress: () => navigation.navigate('Home')},  
                ]  
            );  
          }).catch((error)=>{
            Alert.alert(error.message)
          })
    }

  return (
    <View style={styles.container}> 
      <Text>main</Text>
      <TextInput value={email}
          onChangeText={(text)=>setEmail(text)} style={styles.txtinput} placeholder='email' ></TextInput>
      <TouchableOpacity style={styles.btn} onPress={()=>handlemain()}><Text>logout</Text></TouchableOpacity>
      </View>
    
  )
}
export default main
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
    }
})