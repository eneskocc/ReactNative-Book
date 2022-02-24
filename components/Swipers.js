import { Text, StyleSheet, View ,Image} from 'react-native'
import React, { Component } from 'react'
import Swiper from "react-native-swiper";


export default class Swipers extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} height={1400} horizontal={true} >
        <View style={styles.slide1}>
        <Image
      style={styles.tinyLogo}
      source={require('../img/sineklerin-tanrisi.jpeg')}
    />
        </View>
        <View style={styles.slide2}>
        <Image
      style={styles.tinyLogo}
      source={require('../img/kuyucakli-yusuf.jpeg')}
    />
        </View>
        <View style={styles.slide3}>
        <Image
      style={styles.tinyLogo}
      source={require('../img/martin-eden.jpeg')}
    />
        </View>
        <View style={styles.slide4}>
        <Image
      style={styles.tinyLogo}
      source={require('../img/hayvan-ciftligi.jpeg')}
    />
        </View>
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
    wrapper: {
      
    },
    tinyLogo: {
      width: 100,
      height:160,
  },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    slide4: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
});