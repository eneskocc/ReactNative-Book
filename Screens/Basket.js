import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, {
  Component,
  useState,
  useEffect,
  useContext,
  componentDidMount,
} from "react";
import Urun from "../components/Urun";
import BookCard from "../components/BookCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CartContext } from '../context/CartContext';
export default function Basket(props) {
  const [isLoading, setLoading] = useState(true);
  const sepet = useContext(CartContext);

  useEffect(() => {
    

    setLoading(false);
  });
  const lod = () => {
    setLoading(true );
}
  const addBasket = (aa) => {
    const removeIndex = sepet.findIndex(item => item.id === aa.id);
    console.log(removeIndex);
    if (removeIndex === -1) {
        sepet.push(aa);
    } else {

        let obj = sepet[removeIndex];
        sepet.splice(removeIndex, 1);
        sepet.push({ ...aa, number: (obj.number + 1) });
    }
}
const deleteBasket = (aa) => {
    const removeIndex = sepet.findIndex(item => item.id === aa.id);
    let obj = sepet[removeIndex];
    if (obj.number === 1) {

        console.log(obj.number);
        sepet.splice(removeIndex, 1);
    } else {

        sepet.splice(removeIndex, 1);
        sepet.push({ ...aa, number: (obj.number - 1) });
    }
   
}

  return (
    <View>
        <TouchableOpacity onPress={lod}><Text>aaa</Text></TouchableOpacity>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          <View style={styles.card}>
            {sepet.map((item, index) => (
              <Urun
                key={item.id}
                id={item.id}
                name={item.name}
                img={item.img}
                price={item.price}
                newPrice={item.newPrice}
                discount={item.discount}
                number={item.number}
                sepet={sepet}
                addBasket={addBasket}
                deleteBasket={deleteBasket}
              />
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
