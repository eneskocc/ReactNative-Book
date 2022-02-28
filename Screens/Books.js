import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
import BookCard from '../components/BookCard';
const Books = () => {
    const foto = [
        {
            id: 1,
            name: 'amok kosucusu',
            src: require('../img/amok-kosucusu.jpeg'),
            price: 24,
            discount:45,
            newPrice:0,
            number:1,
        },
        {
            id: 2,
            name: 'Sineklerin Tanrısı',
            src: require('../img/sineklerin-tanrisi.jpeg'),
            price: 20,
            discount:5,
            newPrice:0,
            number:1,
        },
        {
            id: 3,
            name: 'satranc',
            src: require('../img/satranc.jpeg'),
            price: 10,
            discount:15,
            newPrice:0,
            number:1,
        },
        {
            id: 4,
            name: 'devlet  ',
            src: require('../img/devlet.jpeg'),
            price: '19',
            discount:35,
            newPrice:0,
            number:1,
        },
        {
            id: 5,
            name: 'hayvan cifliği',
            src: require('../img/hayvan-ciftligi.jpeg'),
            price: 12,
            discount:45,
            newPrice:0,
            number:1,
        },
        {
            id: 6,
            name: 'satranc',
            src: require('../img/satranc.jpeg'),
            price: 45,
            discount:40,
            newPrice:0,
            number:1,
        },
        {
            id: 7,
            name: 'devlet',
            src: require('../img/devlet.jpeg'),
            price: 30,
            discount:55,
            newPrice:0,
            number:1,
        },
        {
            id: 8,
            name: 'hayvan cifliği',
            src: require('../img/hayvan-ciftligi.jpeg'),
            price: 69,
            discount:30,
            newPrice:0,
            number:1,
        },
        {
            id: 9,
            name: 'devlet  ',
            src: require('../img/devlet.jpeg'),
            price: '19',
            discount:35,
            newPrice:0,
            number:1,
        },
        {
            id: 10,
            name: 'hayvan cifliği',
            src: require('../img/hayvan-ciftligi.jpeg'),
            price: 12,
            discount:45,
            newPrice:0,
            number:1,

        },
        {
            id: 11,
            name: 'satranc',
            src: require('../img/satranc.jpeg'),
            price: 45,
            discount:40,
            newPrice:0,
            number:1,
        },
        {
            id: 12,
            name: 'devlet',
            src: require('../img/devlet.jpeg'),
            price: 30,
            discount:55,
            newPrice:0,
            number:1,
        },
        {
            id: 13,
            name: 'hayvan cifliği',
            src: require('../img/hayvan-ciftligi.jpeg'),
            price: 69,
            discount:30,
            newPrice:0,
            number:1,
        }
    ];
    const sepet = [
       
    ];
    return (
        <ScrollView>
            <View style={styles.card}>
                {
                    foto.map((item, index) => (
                        <BookCard key={item.id} id={item.id} name={item.name} img={item.src} price={item.price} discount={item.discount} number={item.number} sepet={sepet}/>
                    ))
                }
            </View>
        </ScrollView>


    )
}

export default Books

const styles = StyleSheet.create({
    card: {
        width:windowWidth,
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingHorizontal:20,
        paddingVertical:15,
        alignItems: 'center',
        backgroundColor: '#fafafa'
      },
})