import { CartContext } from "@/src/context/CartContext";
import { FavoriteContext } from "@/src/context/FavoriteContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useContext } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
  const router = useRouter();
  const { cart } = useContext(CartContext) || { cart: [] };
  const cartCount = cart?.length || 0;
  const favoriteContext = useContext(FavoriteContext);
  const { favorites, toggleFavorite } = favoriteContext || { favorites: [], toggleFavorite: () => {} };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        {/* BAR ATAS: AKUN + CART */}
        <View style={styles.headerTop}>
          <Text style={styles.account}>Akun</Text>

          <TouchableOpacity
            onPress={() => router.push("/cart")}
            style={styles.headerIcon}>
            <Ionicons name="cart-outline" size={24} color="#FFFFFF" />
            {cartCount > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{cartCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        {/* INFO USER + ARROW */}
        <View style={styles.userInfoRow}>
          <View style={styles.userInfo}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
              }}
              style={styles.avatar}
            />

            <View>
              <Text style={styles.name}>Anisa Nur</Text>
              <Text style={styles.phone}>09867869340</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              try {
                console.log(
                  "attempting router.push with pathname /detailprofile"
                );
                router.push({ pathname: "/detailprofile" });
              } catch (err) {
                console.warn("router.push failed", err);
                // Fallback: navigate by setting window.location (web only)
                if (typeof window !== "undefined") {
                  console.log("fallback: window.location -> /detailprofile");
                  window.location.href = "/detailprofile";
                }
              }
            }}
          >
            <Ionicons name="chevron-forward" size={26} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* SECTION */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Produk Favorit</Text>
          
          {favorites.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>Belum ada produk favorit</Text>
            </View>
          ) : (
            favorites.map((item: any) => {
              const name = item.name || item.nama;
              const price = item.harga || item.price || 0;
              const image = item.image;
              
              return (
                <View key={item.id} style={styles.favoriteItem}>
                  {/* IMAGE */}
                  <Image
                    source={typeof image === "string" ? { uri: image } : image}
                    style={styles.favoriteImage}
                  />
                  
                  {/* INFO */}
                  <View style={styles.favoriteInfo}>
                    <Text style={styles.favoriteName} numberOfLines={2}>
                      {name}
                    </Text>
                    <Text style={styles.favoritePrice}>
                      Rp {price.toLocaleString()}
                    </Text>
                    <View style={styles.deliveryBadge}>
                      <Text style={styles.deliveryText}>Pengiriman Instan</Text>
                    </View>
                  </View>
                  
                  {/* DELETE BUTTON */}
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => {
                      toggleFavorite(item);
                    }}
                  >
                    <Ionicons name="trash-outline" size={20} color="#d32f2f" />
                  </TouchableOpacity>
                </View>
              );
            })
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  header: {
    backgroundColor: "#2E7D32",
    padding: 20,
  },

  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 9,
  },

  account: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
    marginTop: -15,
  },
  headerIcon: {
    marginTop: -10,
    position: "relative",
  },

  cartBadge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#FFA500",
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  cartBadgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },

  headerIconText: {
    fontSize: 22,
  },

  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  userInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  userLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: "#FFF",
  },

  name: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "500",
  },

  phone: {
    color: "#E0E0E0",
    fontSize: 12,
  },

  scrollView: {
    flex: 1,
  },

  section: {
    backgroundColor: "#FFF",
    margin: 16,
    padding: 14,
    borderRadius: 12,
  },

  sectionTitle: {
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 12,
  },

  emptyState: {
    paddingVertical: 40,
    alignItems: "center",
  },

  emptyText: {
    color: "#888",
    fontSize: 14,
  },

  favoriteItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },

  favoriteImage: {
    width: 70,
    height: 70,
    resizeMode: "cover",
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
  },

  favoriteInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "flex-start",
  },

  favoriteName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },

  favoritePrice: {
    fontSize: 14,
    fontWeight: "700",
    color: "#d32f2f",
    marginBottom: 6,
  },

  deliveryBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#e8f5e9",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },

  deliveryText: {
    fontSize: 11,
    color: "#2E7D32",
    fontWeight: "600",
  },

  deleteButton: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
