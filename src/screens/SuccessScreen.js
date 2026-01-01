import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../../src/styles/successStyles";


export default function SuccessScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Ionicons
          name="checkmark-circle"
          size={100}
          color="#22C55E"
        />

        <Text style={styles.title}>Pesanan Berhasil</Text>

        <Text style={styles.subtitle}>
          Pesanan kamu sudah berhasil dibuat dan sedang diproses.
        </Text>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.replace("/pesanan")}
        >
          <Text style={styles.primaryText}>
            Lihat Riwayat Pesanan
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.replace("/(tabs)")}
        >
          <Text style={styles.secondaryText}>
            Kembali ke Beranda
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
