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
  componentDidMount,
} from "react";
import Urun from "../components/Urun";
import BookCard from "../components/BookCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Basket(props) {
  const [isLoading, setLoading] = useState(true);
  const [json, setData] = useState([]);
  const { sepet } = props;
  const obje = props;
  const getData = () => {
    setLoading(true);
  };

  useEffect(() => {
    
    setData(props.sepet);

    setLoading(false);
  });
  const addBasket = () => {
    const removeIndex = sepet.findIndex(item => item.id === obje.id);
    console.log(removeIndex);
    if (removeIndex === -1) {
        sepet.push(obje);
    } else {

        let obj = sepet[removeIndex];
        sepet.splice(removeIndex, 1);
        sepet.push({ ...obje, number: (obj.number + 1) });
    }
    

}
const deleteBasket = () => {
    const removeIndex = sepet.findIndex(item => item.id === obje.id);
    let obj = sepet[removeIndex];
    if (obj.number === 1) {

        console.log(obj.number);
        sepet.splice(removeIndex, 1);
    } else {

        sepet.splice(removeIndex, 1);
        sepet.push({ ...obje, number: (obj.number - 1) });
    }
   
}
  return (
    <View>
        <TouchableOpacity onPress={getData}><Text>aaa</Text></TouchableOpacity>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          <View style={styles.card}>
            {json.map((item, index) => (
              <Urun
                key={item.id}
                id={item.id}
                name={item.name}
                img={item.img}
                price={item.price}
                discount={item.discount}
                number={item.number}
                sepet={sepet}
                onPress={getData}
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
