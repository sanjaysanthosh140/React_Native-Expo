import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Themview from '../Components/Themview'
import Textcolor from '../Components/Textcolor'
const about = () => {
  return (
    <Themview >
      <Textcolor title={false} style={styles.title}>This is About</Textcolor>
      <Link href="/" style={styles.links}>Home</Link>
    </Themview>
  )
}

export default about

const styles = StyleSheet.create({
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