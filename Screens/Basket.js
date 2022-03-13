import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  SafeAreaView
} from "react-native";
import React, {
  Component,
  useState,
  useEffect,
  useContext,
  componentDidMount,
  componentDidUpdate,
} from "react";
import Urun from "../components/Urun";
import BestSeller from "../components/BestSeller";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CartContext } from "../context/CartContext";
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  selectObje,
} from '../reducers/counterSlice';
export default function Basket(props) {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const obje2 = useSelector(selectObje);
  console.log(obje2);
  let tutar = 0;
  useEffect(() => {
    
    setLoading(false);
  });

  const lod =  () => {
    setLoading(true);
  };
  
  
  
  return (
    <SafeAreaView>
      {isLoading ? (
        <ActivityIndicator /> 
      ) : (
        <ScrollView>
          <View style={styles.card}>
            {obje2.map((item, index) => (
              <Urun
                key={item.id}
                id={item.id}
                name={item.name}
                img={item.img}
                price={item.price}
                newPrice={item.newPrice}
                discount={item.discount}
                number={item.number}
                addBasket={() => dispatch(incrementByAmount(item))}
                deleteBasket={() => dispatch(decrement(item))}
              />
            ))}
           
          </View>
          <TouchableOpacity style={styles.btnContanair} onPress={lod}>
            <Text style={styles.btnText}>Siparişi tamamla {obje2.forEach(e => {
      tutar=tutar+(e.newPrice*e.number);
    })} {tutar} TL</Text>
          </TouchableOpacity>
          <View style={styles.coksatan}>
            <Text style={styles.coksatanText}>Sizin için önerilenler!</Text>
            <BestSeller />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btnContanair: {
    alignItems: "center",
    paddingVertical: 10,
    width: "90%",
    marginHorizontal: "5%",
    height: 47,
    borderRadius: 30,
    color: "black",
    backgroundColor: "#228b22",
    marginVertical: 10,
  },
  btnText: {

    fontSize: 20,
  },
});
