import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
import BookCard from '../components/BookCard';
const Books = () => {
    return (
        <ScrollView>
            <View style={styles.card}>
                <BookCard name={"Dünya kalsikleri"} />
                <BookCard name={"Polisiye romanlar"} />
                <BookCard name={"Aşk romanlar"} />
                <BookCard name={"Çocuk kitapları"} />
                <BookCard name={"Yemek kitapları"} />
                <BookCard name={"Dünya kalsikleri"} />
                <BookCard name={"Polisiye romanlar"} />
                <BookCard name={"Aşk romanlar"} />
                <BookCard name={"Çocuk kitapları"} />
                <BookCard name={"Yemek kitapları"} />
                <BookCard name={"Dünya kalsikleri"} />
                <BookCard name={"Polisiye romanlar"} />
                <BookCard name={"Aşk romanlar"} />
                <BookCard name={"Çocuk kitapları"} />
                <BookCard name={"Yemek kitapları"} />
            </View>
        </ScrollView>

    )
}

export default Books

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