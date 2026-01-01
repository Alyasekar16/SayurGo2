import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useContext, useState } from "react";
import {
  Animated,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import styles from "../../src/styles/homeStyles";
import { CartContext } from "../context/CartContext";
import { FavoriteContext } from "../context/FavoriteContext";
import { PRODUCTS } from "../data/products";

export default function HomeScreen() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const { addToCart, cart } = useContext(CartContext);
  const [addedItems, setAddedItems] = useState(new Map());

  const scaleAnim = new Animated.Value(1);

  const handleAddToCart = (item) => {
    // Trigger animation
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();

    addToCart({
      id: item.id,
      name: item.nama || item.name,
      price: item.harga || item.price,
      image: item.image,
      berat: item.berat,
      jenis: item.jenis,
    });

    // Mark as added
    setAddedItems((prev) => {
      const newMap = new Map(prev);
      newMap.set(item.id, true);
      return newMap;
    });
  };

  const categories = [
    {
      id: 1,
      name: "Sayuran",
      icon: require("../../assets/images/vegetables.png"),
    },
    {
      id: 2,
      name: "Buah",
      icon: require("../../assets/images/Buah.png"),
    },
    {
      id: 3,
      name: "Bumbu",
      icon: require("../../assets/images/Bumbu.png"),
    },
    {
      id: 4,
      name: "Lauk",
      icon: require("../../assets/images/IKAN.png"),
    },
  ];
  const products = PRODUCTS;
  const fav = useContext(FavoriteContext);
  console.log(" HOME FAVORITES:", fav.favorites);

  const { toggleFavorite, isFavorite } = fav || {};

  
  return (
    <View style={{ flex: 1 }}>
      {/* ===== Top Search Bar (White) ===== */}
      <View style={styles.topSearchBar}>
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Cari produk disini..."
            placeholderTextColor="#999"
            value={search}
            onChangeText={setSearch}
          />
          <Text style={styles.searchIconText}></Text>
        </View>

        <TouchableOpacity
          onPress={() => router.push("/cart")}
          style={styles.headerIcon}
        >
          <Ionicons name="cart-outline" size={24} color="#FFFFFF" />
          {cart.length > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cart.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* ===== Hero Image (Full Width) ===== */}
        <View style={styles.heroSection}>
          <Image
            source={require("../../assets/images/pedagang.png")}
            style={styles.heroImage}
            resizeMode="cover"
          />
        </View>

        {/* ===== Category Section ===== */}
        <View style={[styles.section, { paddingHorizontal: 0 }]}>
          <Text style={styles.sectionHeader}>
            Cari Berdasarkan <Text style={styles.boldGreen}>Kategori</Text> ...
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
          >
            {categories.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.categoryBoxSquare}
                onPress={() => {
                  const key = item.name.toLowerCase();
                  if (key === "sayuran") router.push("/sayur");
                  else if (key === "buah") router.push("/buah");
                  else if (key === "bumbu") router.push("/bumbu");
                  else if (key === "lauk") router.push("/lauk");
                }}
              >
                <Image
                  source={
                   typeof item.icon === "string" ? 
                   { uri: item.icon }: item.icon }
                  style={[
                    styles.categoryImage,
                    { width: 40, height: 40, marginBottom: 8 },
                  ]}
                />
                <Text style={styles.categoryLabel}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* ===== Product Section ===== */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>
            Produk <Text style={styles.boldGreen}>Populer</Text>...
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products
              .filter((p) =>
                p.nama.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => (
                <View key={item.id} style={styles.productBox}>
                  {/* IMAGE */}
                  <View style={styles.productImageContainer}>
                    <Image
                      source={item.image}
                      style={styles.productImage}
                      resizeMode="contain"
                    />

                    <TouchableOpacity
                    style={styles.heartIcon}
                    onPress={() => {
                      toggleFavorite({
                        id: `${item.jenis}-${item.id}`,
                        name: item.nama,
                        image: item.image,
                        category: item.jenis,
                        harga: item.harga,
                        price: item.harga,
                        berat: item.berat,
                      });
                    }}
                  >
                    <Text style={styles.heartIconText}>
                      {isFavorite(`${item.jenis}-${item.id}`) ? "❤️" : "♡"}
                    </Text>
                  </TouchableOpacity>

                    <View style={styles.ratingBox}>
                      <Text style={styles.ratingText}>⭐ {item.rating}</Text>
                    </View>
                  </View>

                  {/* INFO */}
                  <View style={styles.productInfo}>
                    <Text style={styles.productName} numberOfLines={1}>
                      {item.nama}
                    </Text>
                    <Text style={styles.productWeight}>{item.berat}</Text>
                  </View>

                  {/* PRICE + ADD */}
                  <View style={styles.priceRow}>
                    <Text style={styles.productPrice}>
                      Rp. {item.harga.toLocaleString()}
                    </Text>

                    <TouchableOpacity
                      style={styles.cartButton}
                      onPress={() => handleAddToCart(item)}
                    >
                      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                        <Image
                          source={require("../../assets/images/carticons.png")}
                          style={styles.cartIcon}
                        />
                      </Animated.View>
                      <Text style={styles.cartButtonText}>tambah</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={styles.promoRow}>
            {/* ===== BANNER 1 (LEBAR) ===== */}
            <View style={styles.promoBanner}>
              <View style={styles.promoLeftContent}>
                <View style={styles.promoTag}>
                  <Text style={styles.promoTagText}>PROMO 15%</Text>
                </View>

                <Text style={styles.promoTitle}>
                  Buah Segar,{"\n"}Berkualitas Tinggi
                </Text>

                <Text style={styles.promoSubtitle}>
                  Dapatkan buah berkualitas, tinggi vitamin dari tangan pertama.
                </Text>

                <TouchableOpacity style={styles.promoBtn}>
                  <Text style={styles.promoBtnText}>Belanja Sekarang→</Text>
                </TouchableOpacity>
              </View>

              <Image
                source={require("../../assets/images/buahpot.png")}
                style={styles.promoRightImage}
              />
            </View>

            {/* ===== BANNER 2 (KECIL) ===== */}
            <View style={styles.promoBannerYellow}>
              {/* GAMBAR DI ATAS */}
              <Image
                source={require("../../assets/images/ojek.png")}
                style={styles.promoImageTop}
              />

              {/* KONTEN DI BAWAH */}
              <View>
                <Text style={styles.promoTitleYellow}>
                  Segarnya,{"\n"}sampai rumah
                </Text>

                <Text style={styles.promoSubtitleYellow}>
                  Gratis ongkir 10km!
                </Text>

                <TouchableOpacity style={styles.promoBtnYellow}>
                  <Text style={styles.promoBtnTextYellow}>Pesan Sekarang→</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}
