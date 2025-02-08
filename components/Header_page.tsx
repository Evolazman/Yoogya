import React from 'react'
import { View, Text, Image, StyleSheet, Platform } from "react-native";

export const Header_page = (props : any) => {
  return (
    <View style={style.container}>
        <Text style={style.customText}>{props.name}</Text>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        position:"absolute",
        top : 70,
    },
    customText : {
        fontSize: 24,
        fontWeight:700,
        color:"#00524D"
    }
})
