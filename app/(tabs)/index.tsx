import {  } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View, Text, Image, StyleSheet, Platform } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.TopContainer}>
      <Text>My Profile</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  }
});
