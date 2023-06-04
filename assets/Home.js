import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('register')}><Text>signup</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('login')}><Text>login</Text></TouchableOpacity>
    </View>
  )
}

export default Home

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