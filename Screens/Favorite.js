import { StyleSheet, Text, View, SafeAreaView,ScrollView } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  decrementFAV,
  incrementFAV,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  selectObje,
  selectFavorite,
} from "../reducers/counterSlice";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
import BookCard from "../components/BookCard";
const Favorite = () => {
  const dispatch = useDispatch();
  const obje2 = useSelector(selectFavorite);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.card}>
          {obje2.map((item, index) => (
            <BookCard
              key={item.id}
              id={item.id}
              name={item.name}
              img={item.img}
              price={item.price}
              discount={item.discount}
              number={item.number}
              newPrice={item.price - (item.price * item.discount) / 100}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  card: {
    width: windowWidth,
    flexWrap: "wrap",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    backgroundColor: "#fafafa",
  },
});
