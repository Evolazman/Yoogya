import React from 'react'
import { View, Text, Image, StyleSheet, Platform } from "react-native";
import { useRouter } from 'expo-router';
const family = () => {
    const router = useRouter();
  return (
    <View style={styles.TopContainer}>
        <Text>ครอบครัวของฉัน</Text>
    </View>
  )
}

export default family
const styles = StyleSheet.create({
    TopContainer: {
      width: '100%',
      height: "20%",
      backgroundColor: '#55C3CC',
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });