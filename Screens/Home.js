import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import React from "react";
import Card from "../components/Card";
import BestSeller from "../components/BestSeller";
import Swiper from "../components/Swipers";
const windowWidth = Dimensions.get("window").width;
const Home = () => {
  return (
    <ScrollView>
      <View style={styles.swiper}>
        <Swiper />
      </View>
      <View style={styles.card}>
        <Card name={"Dünya kalsikleri"} />
        <Card name={"Polisiye romanlar"} />
        <Card name={"Aşk romanlar"} />
        <Card name={"Çocuk kitapları"} />
        <Card name={"Yemek kitapları"} />
      </View>
      <View style={styles.coksatan}>
        <Text style={styles.coksatanText}>En Çok Satanlar!</Text>
        <BestSeller />
      </View>
      <View style={styles.coksatan}>
        <Text style={styles.coksatanText}>En Çok Beğenilenler!</Text>
        <BestSeller />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  swiper: {
    height: 200,
  },
  card: {
    width: windowWidth,
    flexWrap: "wrap",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: "center",
    alignContent:'center',
    backgroundColor: "#fafafa",
  },
  coksatan: {
    backgroundColor: "#fafafa",
  },
  coksatanText: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
