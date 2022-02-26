import { Text, StyleSheet, View, ScrollView, TouchableOpacity ,ActivityIndicator,FlatList} from 'react-native'
import React, { Component,useState } from 'react'
import Urun from '../components/Urun';
import BookCard from '../components/BookCard';

export default function Basket(props) {
    const [isLoading2, setLoading2] = useState(true);
    const [json, setData] = useState([]);
    return (
        <View>
            <ScrollView>
                <TouchableOpacity><Text>aaa</Text></TouchableOpacity>
                {isLoading2 ? <ActivityIndicator /> : (
                    <FlatList
                    data={json}
                    renderItem={({ item }) => (
                        <Urun key={item.id} name={item.name} img={item.img} price={item.price} discount={item.discount} />
                    )}
                />
            )}
               
            </ScrollView>

        </View>
    )

}

const styles = StyleSheet.create({})