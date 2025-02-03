import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { StyleSheet } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import BlurTabBarBackground from '@/components/ui/TabBarBackground.ios';
import List from 'assets/clipboard-list.svg';
import { SvgXml } from 'react-native-svg';
import { Button } from "react-native";
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    screenOptions={{
      headerShown: false,
      tabBarBackground: () => <BlurTabBarBackground />, // ใช้งาน BlurView
      headerStyle: { 
        backgroundColor: "#55C3CC",
        height: 200,

       }, // เปลี่ยนสีพื้นหลัง
      headerTintColor: "#fff", // เปลี่ยนสีข้อความ
      headerTitleStyle: { fontSize: 20, fontWeight: "bold" }, // ปรับขนาดตัวอักษร
      tabBarStyle: {
        
        position: "absolute",
        // borderRadius: 50, // ทำให้ขอบโค้งมน
        borderTopLeftRadius: 50, // ทำให้ขอบบนซ้ายเป็นมุม
        borderTopRightRadius: 50, // ทำให้ขอบบนซ้ายเป็นมุม
        height: 110, // กำหนดความสูงของ Tab Bar
        overflow: "hidden",
        backgroundColor: "#ffffff",
        paddingTop: 28,
        borderWidth: 0,
      },
      tabBarActiveTintColor: "#00514D",
      tabBarInactiveTintColor: "#99B9B8",
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'My Profile',
          tabBarIcon: ({ color }) => <IconSymbol size={50} name="house.fill" color={color} />,
          tabBarLabelStyle: { fontSize: 13, fontWeight: "bold", marginTop:10 }, // ปรับขนาดตัวหนังสือ
          
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: 'รายการยา',
          tabBarIcon: ({ color }) => <List width={50} height={50} color={color} />,
          tabBarLabelStyle: { fontSize: 13, fontWeight: "bold",marginTop:10 }, // ปรับขนาดตัวหนังสือ
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: 'เพิ่มข้อมูลยา',
          tabBarIcon: ({ color }) => <IconSymbol size={50} name="paperplane.fill" color={color} />,
          tabBarLabelStyle: { fontSize: 13, fontWeight: "bold",marginTop:10 }, // ปรับขนาดตัวหนังสือ
          
        }}
      />
      <Tabs.Screen
        name="book"
        options={{
          title: 'สารบัญยา',
          tabBarIcon: ({ color }) => <IconSymbol size={50} name="paperplane.fill" color={color} />,
          tabBarLabelStyle: { fontSize: 13, fontWeight: "bold",marginTop:10 }, // ปรับขนาดตัวหนังสือ
        }}
      />
      
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10, // ยกขึ้นจากขอบล่าง
    left: 20, // ขยับจากขอบซ้าย
    right: 20, // ขยับจากขอบขวา

    borderRadius: 40, // เพิ่มมุมโค้งมน
    overflow: 'hidden', // ทำให้ borderRadius มีผลกับ BlurView
    backgroundColor: "red",
  },
  blurView: {
    ...StyleSheet.absoluteFillObject, // ทำให้ BlurView ครอบเต็ม container
    borderRadius: 20, // ทำให้มุมโค้งมน
  },

});
