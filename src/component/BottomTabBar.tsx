import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface TabItem {
  name: string;
  label: string;
  icon: string;
  route: '/' | '/explore' | '/pesanan' | '/profile';
  isImage?: boolean;
  imagePath?: any;
}

const tabs: TabItem[] = [
  { name: 'beranda', label: 'Beranda', icon: 'home-outline', route: '/', isImage: false },
  { name: 'cari', label: 'Cari', icon: 'search-outline', route: '/explore', isImage: false },
  { name: 'pesanan', label: 'Pesanan', icon: 'time', route: '/pesanan', isImage: true, imagePath: require('../../assets/images/pesanan.png') },
  { name: 'akun', label: 'Akun', icon: 'person-outline', route: '/profile', isImage: false },
];

export default function BottomTabBar() {
  const router = useRouter();
  const size = 24;

  return (
    <View style={styles.tabBar}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={styles.tabItem}
          onPress={() => router.push(tab.route)}
          activeOpacity={0.7}
        >
          {tab.isImage && tab.imagePath ? (
            <Image
              source={tab.imagePath}
              style={{
                width: size,
                height: size,
                tintColor: '#C8E6C9',
              }}
              resizeMode="contain"
            />
          ) : (
            <Ionicons name={tab.icon as any} size={size} color="#C8E6C9" />
          )}
          <Text style={styles.tabLabel}>{tab.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    backgroundColor: '#2E7D32',
    paddingBottom: 8,
    height: 65,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  tabLabel: {
    fontSize: 10,
    color: '#C8E6C9',
    marginTop: 2,
    textAlign: 'center',
  },
});
