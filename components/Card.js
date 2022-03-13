import { Text, StyleSheet, View,TouchableOpacity ,Image } from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native';
export default function Card(props) {
  const navigation = useNavigation();
  function irCatalogo(){
     navigation.navigate('Books', {} );
   }
  return (
    <TouchableOpacity style={styles.Contanair} onPress={irCatalogo} >
      <Image
        style={styles.tinyLogo}
        source={require('../img/satranc.jpeg')}
      />
      <View style={styles.Contanair2}>
        <Text style={styles.text}>{props.name}</Text>
      </View>

    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  Contanair: {
    alignItems:'center',
    width: 120,
    height:180,
    margin:5,
    borderRadius: 5,
    paddingHorizontal:10,
    paddingVertical:15,
    backgroundColor: '#9DD6EB',
    
   
  },
  Contanair2: {
    paddingTop:10,
    alignContent:'center',
  },
   tinyLogo: {
    width: 70,
    height: 92,

  },
  text: {
    color: '#fafafa',
    fontWeight: '500',
  }
})
