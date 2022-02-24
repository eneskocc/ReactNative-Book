import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function Coksatan(props) {
  return (
    <View style={styles.Contanair}>
    <Image
      style={styles.tinyLogo}
      source={require('../img/sineklerin-tanrisi.jpeg')}
    />
    <View style={styles.Contanair2}>
      <Text style={styles.text}>{props.name}</Text>
    </View>

  </View>
  )
}

const styles = StyleSheet.create({
    Contanair: {
        alignItems:'center',
        width: 100,
        margin: 11,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#9DD6EB',
      },
      Contanair2: {
        paddingTop:10,
        alignContent:'center',
      },
    tinyLogo: {
        width: 60,
        height: 100,
    },
    text: {
        color: '#fafafa',
        fontWeight: '500',
      }
});