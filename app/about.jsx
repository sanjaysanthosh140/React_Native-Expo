import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const about = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is About</Text>
      <Link href="/" style={styles.links}>Home</Link>
    </View>
  )
}

export default about

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:40,
        fontWeight:'bold',
        color:'red'
    },
    links:{
     marginTop:20,
     fontSize:30,
     borderBottomWidth:1,
    }
})