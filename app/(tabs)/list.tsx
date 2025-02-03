import React from 'react'
import { View, Text, Image, StyleSheet, Platform } from "react-native";
const list = () => {
  return (
    <View style={styles.TopContainer}>
        <Text>List</Text>
    </View>
  )
}

export default list
const styles = StyleSheet.create({
    TopContainer: {
      width: '100%',
      height: 328,
      backgroundColor: '#55C3CC',
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    }
  });