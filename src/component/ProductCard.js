import React, { useContext } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { CartContext } from '../context/CartContext';
import { FavoriteContext } from '../context/FavoriteContext';
import styles from '../styles/productCardStyles';

export default function ProductCard({ item }) {
  const { addToCart } = useContext(CartContext);
  const favoriteContext = useContext(FavoriteContext);
  const { toggleFavorite, isFavorite } = favoriteContext || { toggleFavorite: () => {}, isFavorite: () => false };
  
  // Generate favorite ID: use item.id if it already has composite format, otherwise use jenis-id format
  const favoriteId = typeof item.id === 'string' && item.id.includes('-') ? item.id : `${item.jenis}-${item.id}`;
  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      nama: item.nama,
      harga: item.harga,
      image: item.image,
      berat: item.berat,
      jenis: item.jenis,
    });
  };

  return (
    <View style={styles.card}>

      {/* FAVORITE */}
      <TouchableOpacity
        style={styles.heartIcon}
        onPress={() => {
          toggleFavorite({
            id: favoriteId,
            name: item.nama,
            image: item.image,
            category: item.jenis,
            harga: item.harga,
            price: item.harga,
            berat: item.berat,
          });
        }}
      >
        <Text style={{ fontSize: 16 }}>
          {isFavorite(favoriteId) ? "❤️" : "♡"}
        </Text>
      </TouchableOpacity>

      {/* IMAGE */}
      <Image
        source={item.image}
        style={styles.image}
        resizeMode="contain"
      />

      {/* INFO */}
      <Text style={styles.name} numberOfLines={1}>
        {item.nama}
      </Text>
      <Text style={styles.weight}>
        {item.berat}
      </Text>

      {/* PRICE + CART */}
      <View style={styles.bottomRow}>
        <Text style={styles.price}>
          Rp. {item.harga.toLocaleString()}
        </Text>

        {/* 🔥 TOMBOL TAMBAH KE KERANJANG */}
        <TouchableOpacity
          style={styles.cartButton}
          onPress={handleAddToCart}
          activeOpacity={0.8}
        >
          <Image
            source={require('../../assets/images/carticons.png')}
            style={styles.cartIcon}
          />
          <Text style={styles.cartButtonText}>
            tambah
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
