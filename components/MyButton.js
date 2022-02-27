import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import PropTypes from 'prop-types'

export default class MyButton extends Component {

      render() {
            const createTwoButtonAlert = () =>
                  Alert.alert(
                        "Hayat Seninle Güzel",
                        "BERXAMIN",
                        [
                              {
                                    text: "Cancel",
                                    onPress: () => console.log("Cancel Pressed"),
                                    style: "cancel"
                              },
                              { text: "OK", onPress: () => console.log("OK Pressed") }
                        ]
                  );
            return (
                  <TouchableOpacity style={[styles.button, { backgroundColor: this.props.bgColor }]} onPress={createTwoButtonAlert}>
                        <Text style={[styles.text, { color: this.props.textColor }]}>{this.props.text}</Text>
                  </TouchableOpacity>
            );
      }
}
MyButton.PropTypes = {
      text: PropTypes.string.isRequired,
      bgColor: PropTypes.string,
      textColor: PropTypes.string,
};
const styles = StyleSheet.create({
      container: {

      },
      button: {
            alignItems: 'center',
            fontSize: 24,
            marginVertical: 14,
            color: '#333',
            paddingVertical: 15,
            borderRadius: 5,
      },
      text: {
            fontSize: 16,
      }
});