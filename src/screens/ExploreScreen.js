import { Ionicons } from "@expo/vector-icons";
import React, { useContext, useRef, useState } from "react";
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { CartContext } from "../context/CartContext";
import { FavoriteContext } from "../context/FavoriteContext";

import { BUAH_DATA } from "../data/BuahData";
import { BUMBU_DATA } from "../data/BumbuData";
import { LAUK_DATA } from "../data/LaukData";
import { SAYUR_DATA } from "../data/SayurData";

/* ===============================
   GABUNG SEMUA PRODUK (SATU SUMBER)
================================ */
const ALL_PRODUCTS = [
  ...SAYUR_DATA.map((item) => ({
    id: `sayuran-${item.id}`,
   name: item.nama || item.nama,
    price: item.harga || item.price,
    image: item.image,
    berat: item.berat,
    rating: item.rating,
    category: "Sayuran",
  })),
  ...BUAH_DATA.map((item) => ({
    id: `buah-${item.id}`,
    name: item.nama || item.nama,
    price: item.harga || item.price,
    image: item.image,
    berat: item.berat,
    rating: item.rating,
    category: "Buah",
  })),
  ...BUMBU_DATA.map((item) => ({
    id: `bumbu-${item.id}`,
    name: item.nama || item.nama,
    price: item.harga || item.price,
    image: item.image,
    berat: item.berat,
    rating: item.rating,
    category: "Bumbu",
  })),
  ...LAUK_DATA.map((item) => ({
    id: `lauk-${item.id}`,
    name: item.nama || item.nama,
    price: item.harga || item.price,
    image: item.image,
    berat: item.berat,
    rating: item.rating,
    category: "Lauk",
  })),
];

export default function ExploreScreen() {
  const [search, setSearch] = useState("");
  const { addToCart } = useContext(CartContext);
  const favoriteContext = useContext(FavoriteContext);
  const { toggleFavorite, isFavorite } = favoriteContext || { toggleFavorite: () => {}, isFavorite: () => false };

  // animasi tombol cart
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const animateCart = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleAddToCart = (product) => {
    animateCart();
    addToCart(product);
  };

  const filteredProducts = ALL_PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Cari Bahan Segar</Text>
          <Ionicons name="search" size={24} color="#2E7D32" />
        </View>

        {/* SEARCH */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Cari sayuran, buah, lauk, bumbu..."
            placeholderTextColor="#999"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* IKLAN */}
        <View style={styles.ojekAdContainer}>
          <View style={styles.ojekAdContent}>
            <Text style={styles.ojekAdTitle}>
              Segarnya sampai rumah, ongkirnya 10Km !!
            </Text>
            <TouchableOpacity style={styles.ojekAdButton}>
              <Text style={styles.ojekAdButtonText}>
                Belanja Sekarang →
              </Text>
            </TouchableOpacity>
          </View>

          <Image
            source={require("../../assets/images/ojek.png")}
            style={styles.ojekAdImage}
            resizeMode="contain"
          />
        </View>

        {/* PRODUK */}
        <Text style={styles.sectionTitle}>Produk</Text>

        <View style={styles.productsContainer}>
          {filteredProducts.map((item) => (
            <View key={item.id} style={styles.productBox}>
              <View style={styles.productImageContainer}>
                <Image
                  source={item.image}
                  style={styles.productImage}
                />

                <TouchableOpacity
                  style={styles.heartIcon}
                  onPress={() => {
                    toggleFavorite({
                      id: item.id,
                      name: item.name,
                      image: item.image,
                      category: item.category,
                      harga: item.price,
                      price: item.price,
                      berat: item.berat,
                    });
                  }}
                >
                  <Text style={styles.heartIconText}>
                    {isFavorite(item.id) ? "❤️" : "♡"}
                  </Text>
                </TouchableOpacity>

                <View style={styles.ratingBox}>
                  <Text style={styles.ratingText}>⭐ {item.rating}</Text>
                </View>
              </View>

              <View style={styles.productInfo}>
                    <Text style={styles.productName} numberOfLines={1}>
                      {item.name}
                    </Text>
                    <Text style={styles.productWeight}>{item.berat}</Text>
                  </View>

              <View style={styles.priceRow}>
                <Text style={styles.productPrice}>
                  Rp {item.price.toLocaleString("id-ID")}
                </Text>

                <TouchableOpacity
                  style={styles.cartButton}
                  onPress={() => handleAddToCart(item)}
                >
                  <Animated.View
                    style={{ transform: [{ scale: scaleAnim }] }}
                  >
                    <Image
                      source={require("../../assets/images/carticons.png")}
                      style={styles.cartIcon}
                    />
                  </Animated.View>
                  <Text style={styles.cartButtonText}>Tambah</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

/* ===============================
   STYLE
================================ */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2E7D32",
  },

  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 12,
    shadowColor: "#000",
  },
  searchInput: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 12,
    fontSize: 14,
  },

  ojekAdContainer: {
    flexDirection: "row",
    backgroundColor: "#E8F5E9",
    borderRadius: 16,
    margin: 16,
    padding: 12,
  },
  ojekAdContent: { flex: 1 },
  ojekAdTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },
  ojekAdButton: {
    backgroundColor: "#FFA500",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  ojekAdButtonText: {
    color: "#FFF",
    fontSize: 12,
  },
  ojekAdImage: {
    width: 90,
    height: 90,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginHorizontal: 16,
    marginBottom: 8,
  },

  productsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },

  productBox: {
    width: 135,
    height: 185,
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },

  productImageContainer: {
    width: "100%",
    height: 70,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },

  productImage: {
    width: 70,
    height: 60,
    resizeMode: "contain",
  },

 heartIcon: {
    position: "absolute",
    top: -6,
    right: -6, // ⬅️ pindah ke kiri
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,

    elevation: 4,
  },

  heartIconText: {
    fontSize: 20,
  },

  ratingBox: {
    bottom: 6,
    left: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },

  ratingText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#333",
  },

  productInfo: {
    width: "100%",
    alignItems: "flex-start",
    lineHeight: 8,
  },

  productName: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
    marginBottom: 2,
  },

  productWeight: {
    fontSize: 11,
    color: "#999",
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  productPrice: {
    fontSize: 10,
    fontWeight: "700",
    color: "#2E7D32",
    marginBottom: 20,
  },

  cartButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 8,
    gap: 3,

    marginTop: 28,
    // shadow iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,

    // shadow Android
    elevation: 4,
  },

  cartIcon: {
    width: 14,
    height: 14,
    tintColor: "#FFA726",
  },
  cartButtonText: {
    fontSize: 10,
    color: "#FFA726",
  },
});
