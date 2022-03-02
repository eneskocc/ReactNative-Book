// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

// import React in our code
import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    FlatList,
    TextInput,
    Dimensions,
    ScrollView,
    ActivityIndicator,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;

import BookCard from '../components/BookCard';
const Search = () => {

    const foto = [
        {
            id: 1,
            name: 'amok kosucusu',
            src: require('../img/amok-kosucusu.jpeg'),
            price: 24,
            discount: 45,
            newPrice: 0,
            number: 1,
        },
        {
            id: 2,
            name: 'Sineklerin Tanrısı',
            src: require('../img/sineklerin-tanrisi.jpeg'),
            price: 20,
            discount: 5,
            newPrice: 0,
            number: 1,
        },
        {
            id: 3,
            name: 'satranc',
            src: require('../img/satranc.jpeg'),
            price: 10,
            discount: 15,
            newPrice: 0,
            number: 1,
        },
        {
            id: 4,
            name: 'devlet  ',
            src: require('../img/devlet.jpeg'),
            price: '19',
            discount: 35,
            newPrice: 0,
            number: 1,
        },
        {
            id: 5,
            name: 'hayvan cifliği',
            src: require('../img/hayvan-ciftligi.jpeg'),
            price: 12,
            discount: 45,
            newPrice: 0,
            number: 1,
        },
        {
            id: 6,
            name: 'satranc',
            src: require('../img/satranc.jpeg'),
            price: 45,
            discount: 40,
            newPrice: 0,
            number: 1,
        },
        {
            id: 7,
            name: 'dev',
            src: require('../img/devlet.jpeg'),
            price: 30,
            discount: 55,
            newPrice: 0,
            number: 1,
        },
        {
            id: 8,
            name: 'hayvan cifliği',
            src: require('../img/hayvan-ciftligi.jpeg'),
            price: 69,
            discount: 30,
            newPrice: 0,
            number: 1,
        },
        {
            id: 9,
            name: 'dev ',
            src: require('../img/devlet.jpeg'),
            price: '19',
            discount: 35,
            newPrice: 0,
            number: 1,
        },
        {
            id: 10,
            name: 'hayvan cifliği',
            src: require('../img/hayvan-ciftligi.jpeg'),
            price: 12,
            discount: 45,
            newPrice: 0,
            number: 1,

        },
        {
            id: 11,
            name: 'satranc',
            src: require('../img/satranc.jpeg'),
            price: 45,
            discount: 40,
            newPrice: 0,
            number: 1,
        },
        {
            id: 12,
            name: 'devl',
            src: require('../img/devlet.jpeg'),
            price: 30,
            discount: 55,
            newPrice: 0,
            number: 1,
        },
        {
            id: 13,
            name: 'hayvan cifliği',
            src: require('../img/hayvan-ciftligi.jpeg'),
            price: 69,
            discount: 30,
            newPrice: 0,
            number: 1,
        },
        {
            id: 14,
            name: 'hayvan cifliği',
            src: require('../img/hayvan-ciftligi.jpeg'),
            price: 12,
            discount: 45,
            newPrice: 0,
            number: 1,

        },
        {
            id: 15,
            name: 'satranc',
            src: require('../img/satranc.jpeg'),
            price: 45,
            discount: 40,
            newPrice: 0,
            number: 1,
        },
        {
            id: 16,
            name: 'devle',
            src: require('../img/devlet.jpeg'),
            price: 30,
            discount: 55,
            newPrice: 0,
            number: 1,
        },
        {
            id: 17,
            name: 'hayvan cifliği',
            src: require('../img/hayvan-ciftligi.jpeg'),
            price: 69,
            discount: 30,
            newPrice: 0,
            number: 1,
        }
    ];

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(foto);
    const [masterDataSource, setMasterDataSource] = useState(foto);
    const [isLoading, setLoading] = useState(false);
    const searchFilterFunction = (text) => {
        setLoading(true);
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource and update FilteredDataSource
            const newData = masterDataSource.filter(function (item) {
                // Applying filter for the inserted text in search bar
                const itemData = item.name
                    ? item.name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);
            ItemView();
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
        setLoading(false);

    };

    const ItemView = () => {
        return (
            <ScrollView >
                <View style={styles.card}>
                    {
                        filteredDataSource.map((item, index) => (
                            <BookCard key={item.id} id={item.id} name={item.name} img={item.src} price={item.price} discount={item.discount} number={item.number} />
                        ))
                    }
                </View>
            </ScrollView>
        );
    };



    const getItem = (item) => {
        // Function for click on an item
        alert('Id : ' + item.id + ' Title : ' + item.title);
    };

    return (
        <SafeAreaView>
            <TextInput
                style={styles.textInputStyle}
                onChangeText={(text) => searchFilterFunction(text)}
                onPress={(text) => ItemView()}
                value={search}
                underlineColorAndroid="transparent"
                placeholder="Search Here"
            />
            {isLoading ? <ActivityIndicator /> : (
                <ScrollView >
                    <View style={styles.card}>
                        {
                            filteredDataSource.map((item, index) => (
                                <BookCard key={item.id} id={item.id} name={item.name} img={item.src} price={item.price} discount={item.discount} number={item.number} />
                            ))
                        }
                    </View>
                </ScrollView>
            )}



        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    card: {
        width: windowWidth,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: '#fafafa'
    },

    itemStyle: {
        padding: 10,
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: '#FFFFFF',
    },
});

export default Search;
