import {  } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Header_page } from '@/components/Header_page';
import { View, Text, Image, StyleSheet, Platform } from "react-native";

const imagePath = require('../../assets/images/react-logo.png');

export default function HomeScreen() {
  return (
    <View style={styles.TopContainer}>
      <Header_page name='My Profile'></Header_page>
      <View style={styles.blankContainer}></View>
      <View style={styles.imageContainer}>
        <Image style={styles.iamge} source={{uri : "https://www.matichon.co.th/wp-content/uploads/2024/08/dfdfdf9-wed.jpg"}}></Image>
        <View className='Edit' style={styles.edit} >
          <Text>Icon</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TopContainer: {
    width: '100%',
    height: 328,
    backgroundColor: '#55C3CC',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    display: 'flex',
    alignItems: 'center',
    position: 'relative'
  },
  blankContainer : {
    width: "100%",
    height : 137
  },
  imageContainer : {
    width: 106 ,
    height: 106 ,
    borderRadius : 100 , 
    backgroundColor : "#FFFFFF",
    display : "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  },
  iamge : {
    width: "100%",
    height: "100%",
    borderRadius : 100
  },
  edit : {
    width: 28,
    height: 28,
    backgroundColor : "#00524D",
    position: "absolute",
    right: 0,
    bottom: 0,
    borderRadius : 100 , 
  }
  

});
