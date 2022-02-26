import { Text, StyleSheet, View, ScrollView, TouchableOpacity ,ActivityIndicator,FlatList} from 'react-native'
import React, { Component,useState } from 'react'
import Urun from '../components/Urun';
import BookCard from '../components/BookCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Basket(props) {
    const [isLoading2, setLoading2] = useState(true);
    const [json, setData] = useState([]);
    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@book');
            setData(JSON.parse(jsonValue));
            console.log(JSON.parse(jsonValue));
            setLoading2(false);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
        }
        
    }

    return (
        <View>
            <ScrollView>
                <TouchableOpacity onPress={getData}><Text>aaa</Text></TouchableOpacity>
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