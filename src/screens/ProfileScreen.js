import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CartContext } from "../context/CartContext";
import { FavoriteContext } from "../context/FavoriteContext";

export default function ProfileScreen() {
  const { cart } = useContext(CartContext) || { cart: [] };
  const cartCount = cart?.length || 0;
  const router = useRouter();
  const favoriteContext = useContext(FavoriteContext);
  const favorites = favoriteContext?.favorites || [];
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/dd1a33d3-dcf6-4685-adee-7b04933f0b98',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ProfileScreen.js:15',message:'ProfileScreen favorites state',data:{favoritesCount:favorites.length,hasContext:!!favoriteContext,favorites:favorites.map(f=>({id:f.id,name:f.name||f.nama,hasImage:!!f.image,keys:Object.keys(f)}))},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
  // #endregion
  console.log(" PROFILE FAVORITES:", favorites);

  return (
    <View style={styles.container}>
      {/* HEADER WITH CART ICON */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profil</Text>
        <TouchableOpacity
          onPress={() => router.push("/cart")}
          style={styles.headerIcon}
        >
          <Ionicons name="cart-outline" size={24} color="#FFFFFF" />
          {cartCount > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cartCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Anisa Nur</Text>
        <Text style={styles.email}>anisa@example.com</Text>

        <View style={styles.card}>
          <Text style={styles.infoTitle}>Alamat</Text>
          <Text style={styles.infoText}>Jl. Puspa Mekar No. 21, Sukabumi</Text>

          <Text style={styles.infoTitle}>Status Akun</Text>
          <Text style={styles.infoText}>Pembeli Aktif</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.infoTitle}>Produk Favorit</Text>

          {favorites.length === 0 ? (
            <Text style={styles.infoText}>Belum ada produk favorit</Text>
          ) : (
            favorites.map((item) => {
              // #region agent log
              fetch('http://127.0.0.1:7242/ingest/dd1a33d3-dcf6-4685-adee-7b04933f0b98',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ProfileScreen.js:57',message:'Rendering favorite item',data:{itemId:item.id,itemName:item.name,itemNama:item.nama,hasImage:!!item.image,itemKeys:Object.keys(item)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
              // #endregion
              return (
              <View
                key={item.id}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 8,
                }}
              >
                <Image
                  source={item.image}
                  style={{ width: 40, height: 40, marginRight: 10 }}
                />
                <View>
                  <Text style={{ fontWeight: "600" }}>{item.name || item.nama}</Text>
                  <Text style={{ fontSize: 12, color: "#666" }}>
                    {item.category || item.jenis}
                  </Text>
                </View>
              </View>
            );
            })
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAFAFA" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#9db99fff",
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingTop: 20,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerIcon: {
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
  content: {
    alignItems: "center",
    paddingTop: 30,
  },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 15 },
  name: { fontSize: 20, fontWeight: "bold", color: "#2E7D32" },
  email: { color: "#666", marginBottom: 20 },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 15,
    width: "85%",
    elevation: 3,
  },
  infoTitle: { fontWeight: "bold", color: "#2E7D32", marginTop: 10 },
  infoText: { color: "#444" },
});
