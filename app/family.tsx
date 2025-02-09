import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, Platform , TextInput, Button , Alert , TouchableOpacity , FlatList} from "react-native";
import { useRouter } from 'expo-router';
import { Header_page } from '@/components/Header_page';
import { ThemedText } from '@/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';
const family = () => {
    const router = useRouter();
    const [members, setMembers] = useState([
      { id: 1, name: "Mahamud", age: 39, role: "มารดา" }
    ]);
    const addMember = () => {
      Alert.alert(
        "เพิ่มสมาชิก",
        "คุณต้องการเพิ่มสมาชิกใช่หรือไม่",
        [
          { text: "ไม่ใช่", style: "cancel" },
          { 
            text: "ใช่", 
            onPress: () => {
              const newMember = { id: Date.now(), name: "New Member", age: 30, role: "บิดา" };
              setMembers([...members, newMember]);
              Alert.alert("Success", "เพิ่มสมาชิกสำเร็จ");
            } 
          }
        ]
      );
    };

    const deleteMember = (id : any) => {
      Alert.alert(
        "ลบสมาชิก",
        "คุณต้องการลบสมาชิกนี้หรือไม่?",
        [
          { text: "ยกเลิก", style: "cancel" },
          { 
            text: "ลบ", 
            onPress: () => {
              setMembers(members.filter(member => member.id !== id));
              Alert.alert("Deleted", "ลบสมาชิกสำเร็จ");
            }, 
            style: "destructive"
          }
        ]
      );
    };

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
          <TouchableOpacity onPress={addMember} style={styles.button} >
              <ThemedText type='default'>เพิ่มสมาชิก</ThemedText>
          </TouchableOpacity>
        </View>
        <FlatList
          data={members}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Ionicons name="person-circle" size={40} color="#004D40" />
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.age}>Age : {item.age}</Text>
              </View>
              <View style={styles.rightSection}>
                <TouchableOpacity style={styles.roleButton}>
                  <Text style={styles.roleText}>{item.role}</Text>
                </TouchableOpacity>
                <View style={styles.actionButtons}>
                  <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.editText}>EDIT</Text>
                  </TouchableOpacity>
                  <TouchableOpacity  onPress={() => deleteMember(item.id)}>
                    <Ionicons name="trash-outline" size={20} color="gray" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
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
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    addUIDandButton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
    ,card: {
      flexDirection: "row",
      backgroundColor: "white",
      padding: 15,
      borderRadius: 12,
      alignItems: "center",
      marginTop: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      height: 100,
    },
    info: {
      flex: 1,
      marginLeft: 10,
    },
    name: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#004D40",
    },
    age: {
      fontSize: 14,
      color: "gray",
    },
    rightSection: {
      flexDirection: "column",
      alignItems: "flex-end",
    },
    roleButton: {
      backgroundColor: "#81C784",
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 20,
    },
    roleText: {
      color: "white",
      fontSize: 14,
      fontWeight: "bold",
    },
    actionButtons: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 8,
    },
    editButton: {
      backgroundColor: "gray",
      paddingVertical: 5,
      paddingHorizontal: 12,
      borderRadius: 15,
      marginRight: 8,
    },
    editText: {
      color: "white",
      fontSize: 12,
      fontWeight: "bold",
    },
  });