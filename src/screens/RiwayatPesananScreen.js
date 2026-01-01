import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PesananContext } from "../../src/context/PesananContext";

export default function PesananScreen() {
  const router = useRouter();
  const { orders, lastAdded, clearLastAdded } = useContext(PesananContext);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (lastAdded) {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
        clearLastAdded();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [lastAdded]);

  const getColorForStatus = (status) => {
    switch (status) {
      case "Selesai":
        return "#22C55E";
      case "Dibatalkan":
        return "#F7D274"; // Orange/kuning muda sesuai gambar
      default:
        return "#FACC15"; // Kuning untuk "Sedang Diproses"
    }
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Riwayat Pesanan</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 12 }}>
        {/* SUCCESS BANNER */}
        {showSuccess && lastAdded && (
          <View style={styles.successBanner}>
            <Text style={styles.successText}>
              ✅ Pesanan berhasil dibuat • {lastAdded.tanggal}
            </Text>
          </View>
        )}

        {/* LIST PESANAN */}
        {orders?.length > 0 ? (
          orders.map((order) => (
            <View key={order.id} style={styles.card}>
              {/* CARD HEADER */}
              <View style={styles.cardHeader}>
                <View style={styles.scooterIconContainer}>
                  <Ionicons name="bicycle-outline" size={20} color="#2E7D32" />
                </View>
                <View style={styles.headerTextContainer}>
                  <Text style={styles.tanggal}>
                    {order.tanggal || "02 Desember 2025 - 08.37 WIB"}
                  </Text>
                  <Text style={styles.kirimText}>
                    Dikirim Ke Alamat - {order.items?.length ?? 1} Pengiriman
                  </Text>
                </View>
              </View>

              {/* BODY (IMAGE + INFO) */}
              <View style={styles.cardBody}>
                <Image
                  source={{
                    uri:
                      order.items?.[0]?.gambar ||
                      order.items?.[0]?.image ||
                      "https://i.imgur.com/1bX5QH6.png",
                  }}
                  style={styles.image}
                />

                <View style={styles.info}>
                  <View
                    style={[
                      styles.status,
                      { backgroundColor: getColorForStatus(order.status) },
                    ]}
                  >
                    <Text style={styles.statusText}>{order.status}</Text>
                  </View>

                  <Text style={styles.contactText}>
                    {order.contact || "0-23409-9099"}
                  </Text>

                  <Text numberOfLines={2} style={styles.namaProduk}>
                    {order.items?.[0]?.nama ||
                      order.items?.[0]?.name ||
                      "Strawbery Jepang (Ready)"}
                  </Text>

                  <Text style={styles.jumlah}>
                    {order.items?.length ?? 1} Produk
                  </Text>
                </View>
              </View>

              {/* BUTTON DI BAWAH */}
              <View style={styles.buttonWrapper}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    if (
                      order.status === "Selesai" ||
                      order.status === "Dibatalkan"
                    ) {
                      router.replace("/beranda");
                    } else {
                      router.push({
                        pathname: "/detailpesanan",
                        params: { orderId: order.id },
                      });
                    }
                  }}
                >
                  <Text style={styles.buttonText}>
                    {order.status === "Selesai" ||
                    order.status === "Dibatalkan"
                      ? "Beli Lagi"
                      : "Lihat"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.emptyText}>Tidak ada riwayat pesanan.</Text>
        )}
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
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  successBanner: {
    backgroundColor: "#DCFCE7",
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },

  successText: {
    color: "#166534",
    fontSize: 12,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  scooterIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  headerTextContainer: {
    flex: 1,
  },

  tanggal: {
    fontSize: 12,
    color: "#333",
    marginBottom: 2,
  },

  kirimText: {
    fontSize: 12,
    color: "#666",
    fontWeight: "400",
  },

  cardBody: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: "#f5f5f5",
  },

  info: {
    flex: 1,
  },

  status: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 6,
  },

  statusText: {
    fontSize: 11,
    color: "#fff",
    fontWeight: "600",
  },

  contactText: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },

  namaProduk: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },

  jumlah: {
    fontSize: 12,
    color: "#666",
  },

  buttonWrapper: {
    alignItems: "flex-end",
    marginTop: 4,
  },

  button: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: "#F97316",
  },

  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },

  emptyText: {
    textAlign: "center",
    marginTop: 40,
    color: "#6B7280",
  },
});
