import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Btn = ({text, action}) => {
  return (
    <>
        <TouchableOpacity style={[styles.margin, styles.background]}>
            <Text onPress={action}>{text}</Text>
        </TouchableOpacity>
    </>
  )
}

export default Btn

const styles = StyleSheet.create({
    margin: {
      marginBottom: 10,
      marginTop: 10,
      padding: 5
    },
    background: {
        backgroundColor: "green"
    }
  });
