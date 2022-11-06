import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Square = ({mycolor}) => {
    return (
      <View style={styles.box}>
        <Text>Hello World!! mau` {mycolor}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    box: {
      width:100,
      height: 100,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "pink"
    },
  });

export default Square;