import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React ,{useState}from 'react'
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrementFAV,
  increment,
  incrementFAV,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  selectObje,
} from '../reducers/counterSlice';
export default function BookCard(props) {
  const { sepet } = props;
  const [icon, setIcon] = useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  function irCatalogo() {
    navigation.navigate('Details', {
      props: props,
      price2: newPrice,
      sepet:sepet,
    });
  }
  const { img } = props;
  
  const newPrice = props.price - ((props.price * props.discount) / 100);
  
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
        <View style={{ padding: 5, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.textPrice}>{props.price} TL</Text>
          <Text style={styles.textNewPrice}>{newPrice} TL</Text>
        </View>
       
        
      {icon ? (
        <TouchableOpacity onPress={() => dispatch(incrementFAV(props))}>
        <MaterialIcons name="favorite-border" size={26} color="black" style={{paddingTop:5}} />
      </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => () => setIcon(false)}>
          <MaterialIcons name="favorite" size={26} color="black" style={{paddingTop:5}}/>
        </TouchableOpacity>
      )}
      </View>

     

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  Contanair: {
    alignItems: 'center',
    margin: 5,
    width:175,
    borderRadius: 10,
    paddingVertical: 12,
    backgroundColor: '#9DD6EB',
  },
  Contanair2: {
    paddingTop: 5,
    alignContent: 'center',
    height: 40,
    flexDirection: 'row',
  },
  tinyLogo: {
    width: 140,
    height: 232,
  },
  text: {
    color: '#fafafa',
    fontWeight: '500',
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
 
});