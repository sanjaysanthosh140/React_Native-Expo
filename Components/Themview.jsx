import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import color from '../contstants/Colours'
const Themview = (props) => {
    const colorthem = useColorScheme();
    const them = colorthem ==='dark'?color.dark:color.light;
  return(
    <View style={[styles.container,{backgroundColor:them.background}]}>
      {props.children}
    </View>
  )
  
}

export default Themview

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})