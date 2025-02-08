import {  } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Header_page } from '@/components/Header_page';
import { View, Text, Image, StyleSheet, Platform } from "react-native";
import Pen from 'assets/pen.svg';
const imagePath = require('../../assets/images/react-logo.png');

export default function HomeScreen() {
  return (
    <View style={styles.TopContainer}>
      <Header_page name='My Profile'></Header_page>
      <View style={styles.blankContainer}></View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri : "https://www.matichon.co.th/wp-content/uploads/2024/08/dfdfdf9-wed.jpg"}}></Image>
        <View className='Edit' style={styles.edit} >
          <Pen width={20} height={20} color="#FFFFFF"></Pen>
        </View>
      </View>
      <View style={styles.userDataContainer}>
        <Text id='UserName' style={{textAlign:'center' , fontSize: 24 , fontWeight : 700 , marginBottom : 10 , color: '#FFF'}}>Gong Yoo</Text>
        <Text id='UserId' style={{textAlign:'center' , fontSize: 16 , fontWeight : 700 ,color: '#FFF'}}>UID: 000000000</Text>
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
    height : 130
  },
  imageContainer : {
    width: 106 ,
    height: 106 ,
    borderRadius : 100 , 
    display : "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  },
  image : {
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
    display : "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  userDataContainer : {
    position: "absolute",
    bottom: 20,
    
  },
  

});
