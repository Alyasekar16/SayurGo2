import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#C8E6C9',
        tabBarStyle: {
          backgroundColor: '#2E7D32',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          height: 65,
          paddingBottom: 8,
        },
      }}
    >
      {/* ===== BERANDA ===== */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Beranda',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      {/* ===== CARI ===== */}
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Cari',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
        }}
      />

      {/* ===== Riwayat Pesanan ===== */}
      <Tabs.Screen
  name="pesanan"
  options={{
    title: 'Pesanan',
    tabBarIcon: ({ color, size }) => (
      <Image
        source={require('../../assets/images/pesanan.png')}
        style={{
          width: size,
          height: size,
          tintColor: color,
    
        }}
        resizeMode="contain"
      />
    ),
  }}
/>
++
      {/* ===== AKUN ===== */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Akun',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
