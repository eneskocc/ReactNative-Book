import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import React, { Component, useState } from 'react';
import PropTypes from 'prop-types'
export default function Urun(props) {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('../img/devlet.jpeg')}
            />
            <View style={styles.center}>
                <Text style={styles.centerTextName}>
                    {props.name}
                </Text>
                <Text style={styles.centerTextFiyat}>
                {props.fiyat} TL
                </Text>
            </View>
            <View style={styles.end}>
                <TouchableOpacity onPress={() => setCount(count + 1)}>
                    <Text style={styles.endText}>+</Text>
                </TouchableOpacity>
                <Text style={styles.endText}>{count}</Text>
                <TouchableOpacity onPress={() => setCount(count - 1)}>
                    <Text style={styles.endText}>-</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        marginHorizontal:10,
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
        fontSize: 20,
        fontWeight: '600',
        color: '#fafafa',
        marginTop: 10,
        marginBottom: 5,
    },
    centerTextFiyat: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fafafa',
        marginStart: 10
    },
    endText: {
        fontSize: 25,
        fontWeight: '600',
        color: '#fafafa'
    }
});