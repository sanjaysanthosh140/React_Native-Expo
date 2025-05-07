import { StyleSheet, Text, View,Image, useColorScheme } from 'react-native'
import React from 'react'
import logo from '../assets/favicon.png'
import {Link} from 'expo-router'
import colors from '../contstants/Colours'
const Home = () => {
  const theme = useColorScheme()
    const colourthem = theme === 'dark' ? colors.dark : colors.light
  return (
    <View style={[styles.container,{backgroundColor:colourthem.background}]}>
      <Text style={styles.text}>Home</Text>
      <Text style={[styles.paragraph,{color:'green'}]}>title of home</Text>
      <Image source={logo} style={{width:"100",height:"100"}}/>

      <Link href="/about" style={styles.links}>About it </Link>
      <Link href="/contact" style={styles.links}>Contact </Link>
      <Link href={'/data'} style={styles.links}>add work</Link>
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
    },

    links:{
        marginTop:20,
        fontSize:30,
        borderBottomWidth:1,
       }



})