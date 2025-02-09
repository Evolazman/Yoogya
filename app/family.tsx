import React from 'react'
import { View, Text, Image, StyleSheet, Platform , TextInput, Button} from "react-native";
import { useRouter } from 'expo-router';
import { Header_page } from '@/components/Header_page';
import { ThemedText } from '@/components/ThemedText';
const family = () => {
    const router = useRouter();
  return (
    <View style={{display: 'flex' , justifyContent: 'center' , alignItems: 'center' }}>
      <View style={styles.TopContainer}>
          <Header_page name='ครอบครัวของฉัน'></Header_page>
      </View>
      <View style={styles.BottomContainer}>
        <ThemedText type='default'>เพิ่มสมาชิกครอบครัว</ThemedText>
        
        <View style={styles.addUIDandButton}>
          <TextInput
            style={styles.input}
            placeholder="กรอก UID"
            keyboardType="numeric"
          />
          <View style={styles.button}>
            <Button title="เพิ่มสมาชิก"  onPress={() => {}} />
          </View>
        </View>

      </View>
      
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
    },
    BottomContainer: {
      width: '90%',

      height: "80%",
      paddingTop: "10%",
    },
    input: {
      width: '65%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 0,
      borderRadius: 100,
      paddingHorizontal: 10,
      marginTop: 20,
      backgroundColor: '#fff',
      paddingLeft: 20,
    },
    button: {
      width: '30%',
      height: 40,
      marginTop: 20,
      borderRadius: 100,
      backgroundColor: '#55C3CC',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    addUIDandButton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
  });