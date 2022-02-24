import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import Urun from '../components/Urun';
export default class Basket extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <Urun
                        name={"Devlet"}
                        fiyat={"20"}
                        imageUri='../img/devlet.jpeg'/>
                    <Urun
                        name={"Devlet"}
                        fiyat={"20"}
                        imageUri='../img/devlet.jpeg' />
                    <Urun
                        name={"Devlet"}
                        fiyat={"20"}
                        imageUri='../img/devlet.jpeg' />
                    <Urun
                        name={"Devlet"}
                        fiyat={"20"}
                        imageUri='../img/devlet.jpeg' />
                    <Urun
                        name={"Devlet"}
                        fiyat={"20"}
                        imageUri='../img/devlet.jpeg' />
                    <Urun
                        name={"Devlet"}
                        fiyat={"20"}
                        imageUri='../img/devlet.jpeg' />
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({})