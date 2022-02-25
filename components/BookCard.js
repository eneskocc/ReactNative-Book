import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
export default function BookCard(props) {
  const navigation = useNavigation();
  function irCatalogo(){
     navigation.navigate('Details', {} );
   }
  return (
    <TouchableOpacity style={styles.Contanair} onPress={irCatalogo}>
    <Image
      style={styles.tinyLogo}
      source={require('../img/sineklerin-tanrisi.jpeg')}
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