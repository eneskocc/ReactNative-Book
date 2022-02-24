import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <View style={styles.Contanair}>
        <Text>Card</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    Contanair:{
        width:100,
        height:100,
        margin:11,
        borderRadius:5,
        padding:20,
        backgroundColor:'#9DD6EB',
    }
})
