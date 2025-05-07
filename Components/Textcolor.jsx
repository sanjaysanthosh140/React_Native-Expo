import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Textcolor = (props) => {
    const {title,style,children} = props;
  return (

    <Text style={[title?styles.title:styles.paragraph]}>
        {children}
    </Text>
  )
}

export default Textcolor

const styles = StyleSheet.create({
    title:{
        fontSize:40,
        fontWeight:'bold',
        color:'red'
    },
    paragraph:{
        fontSize:29,
        fontWeight:'bold',
        color:'blue'
    }

})