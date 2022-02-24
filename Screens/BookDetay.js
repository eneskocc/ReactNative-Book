import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';



export default function Livro({ route }) {
    const navigation = useNavigation();
    function irCatalogo() {
        navigation.navigate('Catalogo', {});
    }

    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', background: '#E0F0D5' }}>

                <Ionicons name="md-arrow-round-back" size={25} color="white"
                    onPress={irCatalogo}
                />

                <Image
                    style={styles.ImagemLivro}
                    source={require('../img/devlet.jpeg')}
                />

                <View style={styles.DetalhesLivro}>

                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#3F4441', padding: 10 }} > Coraline</Text>

                    <Text style={{ fontSize: 12 }}> Autor do livro</Text>

                    <Image
                        style={styles.Estrelas}
                        source={require('../img/devlet.jpeg')}
                    />

                    <Text style={{ fontSize: 12, padding: 20 }}> Coraline é uma saga fantástica de terror do autor britânico Neil Gaiman, publicado em 2002 pela Bloomsbury, no Reino Unido e pela Harper Collins, nos Estados Unidos. Ganhou os prêmios Hugo e Nebula Award de melhor novela de 2002 e o Bram Stoker Award de melhor trabalho de novos escritores de 2002</Text>
                    <TouchableOpacity style={styles.Download}>Download </TouchableOpacity>


                </View>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    ImagemLivro: {
        width: 178,
        height: 253,
        left: 10,
        top: 44,
    },
    DetalhesLivro: {
        top: 20,
        textAlign: 'center',
        backgroundColor: '#fafafa',
        borderRadius: 40,
    },
    Estrelas: {
        width: 146,
        height: 46,
        left: 85
    },
    Download: {
        width: 203,
        height: 47,
        left: 60,
        top: 6,
        borderRadius: 30,
        color: 'black',
        padding: 10,
        backgroundColor: '#ffffff',
    }
})