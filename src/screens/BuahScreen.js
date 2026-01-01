import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import React, { useContext, useState } from 'react';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../../src/styles/homeStyles'; // ⬅️ PENTING
import BottomTabBar from '../component/BottomTabBar';
import ProductCard from '../component/ProductCard';
import { CartContext } from '../context/CartContext';
import { BUAH_DATA } from '../data/BuahData';

export default function BuahScreen() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const { cart } = useContext(CartContext);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FAFAFA' }} edges={['top']}>
      <View style={{ flex: 1 }}>
        {/* ===== TOP SEARCH BAR (SAMA KAYA HOME) ===== */}
        <View style={styles.topSearchBar}>
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Cari produk disini..."
            placeholderTextColor="#999"
            value={search}
            onChangeText={setSearch}
          />
      
        </View> 
        <TouchableOpacity onPress={() => router.push('/cart')} style={styles.headerIcon}>
          <Ionicons name="cart-outline" size={24} color="#FFFFFF" />
          {cart.length > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cart.length}</Text>
            </View>
          )}
        </TouchableOpacity>
        </View>

      {/* TITLE */}
      <Text style={{
        fontSize: 18,
        fontWeight: '700',
        color: '#555',
        marginTop: 16,
        marginLeft: 16,
      }}>
        Kategori <Text style={{ color: '#2E7D32' }}>Buah</Text> ...
      </Text>

      {/* PRODUCT GRID */}
      <FlatList
        contentContainerStyle={{ padding: 15 }}
        data={BUAH_DATA.filter(item =>
          item.nama.toLowerCase().includes(search.toLowerCase())
        )}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => <ProductCard item={item} />}
        showsVerticalScrollIndicator={false}
      />
      </View>
      <BottomTabBar />
    </SafeAreaView>
  );
}
