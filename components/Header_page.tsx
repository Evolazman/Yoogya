import React from 'react'
import { View, Text, Image, StyleSheet, Platform , TouchableOpacity } from "react-native";
import Arrow from 'assets/arrow-right.svg';
import { useRouter } from 'expo-router';
export const Header_page = (props : any) => {
  const router = useRouter();
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.boxArrow} onPress={() => router.back()} >
        <Arrow width={20} height={20} color="#00524D" ></Arrow>
      </TouchableOpacity>
      <Text style={style.customText}>{props.name}</Text>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        position:"absolute",
        top : 70,
        width: '50%',
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    customText : {
        fontSize: 24,
        fontWeight:700,
        color:"#00524D",
        
    },
    boxArrow : 
    {
      position:"absolute",
      left: -80,
      transform: [{ rotate: '180deg' }],
      zIndex:1000

    }
})
