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
  componentDidUpdate,
} from "react";
import Urun from "../components/Urun";
import BestSeller from "../components/BestSeller";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CartContext } from "../context/CartContext";
export default function Basket(props) {
  const [isLoading, setLoading] = useState(true);
  const sepet = useContext(CartContext);
  let tutar = 0;
  useEffect(() => {

    
    
    setLoading(false);
  });

  const lod = async () => {
    setLoading(true);
    return "a";
  };
  const addBasket = (aa) => {
    const removeIndex = sepet.findIndex((item) => item.id === aa.id);
    console.log(removeIndex);
    if (removeIndex === -1) {
      sepet.push(aa);
    } else {
      let obj = sepet[removeIndex];
      sepet.splice(removeIndex, 1);
      sepet.push({ ...aa, number: obj.number + 1 });
    }
  };
  const deleteBasket = (aa) => {
    const removeIndex = sepet.findIndex((item) => item.id === aa.id);
    let obj = sepet[removeIndex];
    if (obj.number === 1) {
      console.log(obj.number);
      sepet.splice(removeIndex, 1);
    } else {
      sepet.splice(removeIndex, 1);
      sepet.push({ ...aa, number: obj.number - 1 });
    }
  };
  
  return (
    <View>
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
          <TouchableOpacity style={styles.btnContanair} onPress={lod}>
            <Text style={styles.btnText}>Siparişi tamamla {sepet.forEach(e => {
      tutar=tutar+(e.newPrice*e.number);
    })} {tutar} TL</Text>
          </TouchableOpacity>
          <View style={styles.coksatan}>
            <Text style={styles.coksatanText}>Sizin için önerilenler!</Text>
            <BestSeller />
          </View>
        </ScrollView>
      )}
    </View>
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
