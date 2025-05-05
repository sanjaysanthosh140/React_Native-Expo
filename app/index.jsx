import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import logo from '../assets/favicon.png'
const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Text style={[styles.paragraph,{color:'green'}]}>title of home</Text>
      <Image source={logo} style={{width:"100",height:"100"}}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#0000',
        alignItems:'center',
        justifyContent:'center',
        border:" 1px solid #000",
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'#0ef'
    },
    paragraph:{
        fontSize:25,
        fontWeight:'bold',
        color:'red'
    }



})