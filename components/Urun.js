import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import React, { Component, useState } from 'react';
import PropTypes from 'prop-types'
export default function Urun(props) {
    const [count, setCount] = useState(0); 
    const { sepet } = props;
    const obje=props;
   
    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={props.img}
            />
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                <View style={styles.Contanair2}>
                    <Text style={styles.text}>{props.name}</Text>
                </View>
                <View style={styles.Contanair2}>
                    <Text style={styles.textDiscount}>%{props.discount}</Text>
                    <View style={{ padding: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.textPrice}>{props.price} TL</Text>
                        <Text style={styles.textNewPrice}> TL</Text>
                    </View>

                </View>
            </View>

            <View style={styles.end}>
                <TouchableOpacity onPress={props.addBasket}>
                    <Text style={styles.endText}>+</Text>
                </TouchableOpacity>
                <Text style={styles.endText}>{props.number}</Text>
                <TouchableOpacity onPress={props.deleteBasket}>
                    <Text style={styles.endText}>-</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        backgroundColor: '#9DD6EB',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 8,
        marginVertical: 7,
        flexDirection: 'row',
    },
    tinyLogo: {
        width: 60,
        height: 100,
    },
    center: {
        width: '34%',
        marginHorizontal: 20,
    },
    end: {
        marginStart: 75,
        backgroundColor: '#92BBD9',
        width: '15%',
        alignItems: 'center',
        borderRadius: 7,
    },
    centerTextName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#fafafa',
        marginTop: 10,
        marginBottom: 5,
    },
    centerTextFiyat: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fafafa',
        marginStart: 10
    },
    endText: {
        fontSize: 25,
        fontWeight: '600',
        color: '#fafafa'
    },
    Contanair2: {
        alignContent: 'center',
        flexDirection: 'row',
    },
    textDiscount: {
        backgroundColor: '#ff5148',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 20,
    },
    textPrice: {
        textDecorationLine: 'line-through',
    },
    btnText: {
        marginHorizontal: 2,
        fontSize: 20,
    },
    Text: {
        marginHorizontal: 2,
        fontSize: 15,
    },
});