import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation ,useNavigationParam} from '@react-navigation/native';
import { Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function BookDetay(props) {
const obje=props.props.route.params.props;
    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E0F0D5',height:windowHeight-100}}>

                <Image
                    style={styles.ImagemLivro}
                    source={obje.img}
                /> 
                <View style={styles.DetalhesLivro}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#3F4441', padding: 10,textAlign:'center' }}>{obje.name}</Text>
                    <Text style={{ fontSize: 12 ,textAlign:'center' }}> Autor do livro</Text>
                    <Text style={{ fontSize:12, padding:20,textAlign:'center'  }}> Coraline é uma saga fantástica de terror do autor britânico Neil Gaiman, publicado em 2002 pela Bloomsbury, no Reino Unido e pela Harper Collins, nos Estados Unidos. Ganhou os prêmios Hugo e Nebula Award de melhor novela de 2002 e o Bram Stoker Award de melhor trabalho de novos escritores de 2002</Text>
                    <TouchableOpacity style={styles.Download}><Text>Sepete Ekle {obje.price} TL</Text></TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    ImagemLivro: {
        
        width: 180,
        height: 300,
        marginBottom:20,
    },
    DetalhesLivro: {
        padding: 20,
        textAlign: 'center',
        alignItems:'center',
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
        paddingVertical:13,
        borderRadius: 30,
        color: 'black',
        
        backgroundColor: 'rgba(4, 72, 31, 0.17)',
        alignItems:'center',
    }
});