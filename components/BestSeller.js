import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
import BookCard from '../components/BookCard';
const BestSeller = () => {
    const foto = [
        {
            id: '1',
            name: 'amok kosucusu',
            src: require('../img/amok-kosucusu.jpeg'),
            price: '70',
        },
        {
            id: '2',
            name: 'Sineklerin Tanrısı',
            src: require('../img/sineklerin-tanrisi.jpeg'),
            price: '19',
        },
        {
            id: '3',
            name: 'satranc',
            src: require('../img/satranc.jpeg'),
            price: '50',
        },
        {
            id: '4',
            name: 'devlet  ',
            src: require('../img/devlet.jpeg'),
            price: '19',
        },
        {
            id: '5',
            name: 'hayvan cifliği',
            src: require('../img/hayvan-ciftligi.jpeg'),
            price: '50',
        },
        {
            id: '6',
            name: 'satranc',
            src: require('../img/satranc.jpeg'),
            price: '50',
        },
        {
            id: '7',
            name: 'devlet',
            src: require('../img/devlet.jpeg'),
            price: '19',
        },
        {
            id: '8',
            name: 'hayvan cifliği',
            src: require('../img/hayvan-ciftligi.jpeg'),
            price: '50',
        }
    ];
    return (
        <ScrollView horizontal={true}>
                {
                    foto.map((item, index) => (
                        <BookCard key={item.id} name={item.name} img={item.src} price={item.price} />
                    ))
                }
        </ScrollView>
    )
}

export default BestSeller

const styles = StyleSheet.create({
    card: {
        width: windowWidth,
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: 'center',
        backgroundColor: '#fafafa'
    },
})