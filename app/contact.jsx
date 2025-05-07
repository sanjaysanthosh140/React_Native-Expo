import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Themview from '../Components/Themview'
const contact = () => {
  return (
    <Themview style={styles.container}>
      <Text style={styles.title}>contact</Text>
      <Text style={styles.paragraph}> This is Contact File</Text>
      <Link  href="/" style={styles.links}>Home</Link>
    </Themview>
  )
}

export default contact

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:40,
        fontWeight:'bold',
        color:'pink'
    },
    paragraph:{
        fontSize:25,
        fontWeight:'bold',
        color:'red'
    },
    links:{ 
        marginTop:20,
        fontSize:30,
        borderBottomWidth:1
    }
})