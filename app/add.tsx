import React from 'react'
import { View, Text, Image, StyleSheet, Platform } from "react-native";
import { useRouter } from 'expo-router';
const add = () => {
  const router = useRouter();
  return (
    <View style={styles.TopContainer}>
        <Text>Add</Text>
    </View>
  )
}

export default add
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