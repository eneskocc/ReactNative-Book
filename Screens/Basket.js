import { Text, StyleSheet, View, ScrollView, TouchableOpacity ,ActivityIndicator,FlatList} from 'react-native'
import React, { Component,useState } from 'react'
import Urun from '../components/Urun';
import BookCard from '../components/BookCard';

export default function Basket(props) {
    const foto = [

        {
            id: '1',
            name: 'amok kosucusu',
            src: require('../img/amok-kosucusu.jpeg'),
            price: 24,
            discount: 45,
        },
        {
            id: '2',
            name: 'amok kosucusu',
            src: require('../img/amok-kosucusu.jpeg'),
            price: 24,
            discount: 45,
        },
        {
            id: '3',
            name: 'amok kosucusu',
            src: require('../img/amok-kosucusu.jpeg'),
            price: 24,
            discount: 45,
        }
    ];
    const [isLoading2, setLoading2] = useState(true);
    const [json, setData] = useState([]);
    const activeEt =()=>{
        setLoading2(false);
    }
    return (
        <View>
            <ScrollView>
                <TouchableOpacity onPress={activeEt}><Text>aaa</Text></TouchableOpacity>
                {isLoading2 ? <ActivityIndicator /> : (
                    <FlatList
                    data={foto}
                    renderItem={({ item }) => (
                        <Urun key={item.id} name={item.name} img={item.src} price={item.price} discount={item.discount} />
                    )}
                />
            )}
               
            </ScrollView>

        </View>
    )

}

const styles = StyleSheet.create({})