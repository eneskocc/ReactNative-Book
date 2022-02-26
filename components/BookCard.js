import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function BookCard(props) {

  const navigation = useNavigation();
  function irCatalogo() {
    navigation.navigate('Details', {
      props: props,
      price2:newPrice
    });
  }
  const { img } = props;
  
  const newPrice = props.price-((props.price * props.discount) / 100);
  return (
    <TouchableOpacity style={styles.Contanair} onPress={irCatalogo}>
      <Image
        style={styles.tinyLogo}
        source={img}
      />
      <View style={styles.Contanair2}>
        <Text style={styles.text}>{props.name}</Text>
      </View>
      <View style={styles.Contanair2}>
        <Text style={styles.textDiscount}>%{props.discount}</Text>
        <View style={{ padding:5, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.textPrice}>{props.price} TL</Text>
          <Text style={styles.textNewPrice}>{newPrice} TL</Text>
        </View>

      </View>

      <View style={styles.btnContanair}>


        <TouchableOpacity style={styles.btn1}><Text style={styles.btnText}>-</Text></TouchableOpacity>

        <Text style={styles.Text}>Sepete Ekle</Text>
        <TouchableOpacity style={styles.btn2}><Text style={styles.btnText}>+</Text></TouchableOpacity>

      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  Contanair: {
    alignItems: 'center',
    width: 175,
    margin: 5,
    borderRadius: 10,
    paddingVertical: 12,
    backgroundColor: '#9DD6EB',
  },
  Contanair2: {
    paddingTop: 5,
    alignContent: 'center',
    height: 40,
    flexDirection: 'row',
    marginBottom: 5,
  },
  tinyLogo: {
    width: 140,
    height: 232,
  },
  text: {
    color: '#fafafa',
    fontWeight: '500',
  },
  btnContanair: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    width: 160,
    height: 47,
    borderRadius: 30,
    color: 'black',
    backgroundColor: '#92BBD9',

  },
  textDiscount: {
    backgroundColor: '#ff5148',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 20,
  },
  textPrice: {
    textDecorationLine: 'line-through',
  },
  btnText: {
    marginHorizontal: 2,
    fontSize: 20,
  },
  Text: {
    marginHorizontal: 2,
    fontSize: 15,
  },
  btn1: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#97CAE5',
    height: 47,
    width: 40,
    borderBottomStartRadius: 30,
    borderTopLeftRadius: 30,
  },
  btn2: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#97CAE5',
    height: 47,
    width: 40,
    borderBottomEndRadius: 30,
    borderTopRightRadius: 30,
  }
});