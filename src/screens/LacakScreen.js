import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import styles from "../styles/lacakStyles";

export default function LacakPesanan() {
  const { orderId } = useLocalSearchParams();

  const timeline = [
  {
    id: 5,
    title: "Selesai",
    time: "02 Desember 2025 • 12.00",
    icon: require("../../assets/images/selesai.png"),
  },
  {
    id: 4,
    title: "Diterima",
    time: "02 Desember 2025 • 08.37",
    icon: require("../../assets/images/diterima.png"),
  },
  {
    id: 3,
    title: "Dalam Pengiriman",
    time: "02 Desember 2025 • 08.20",
    icon: require("../../assets/images/kirim.png"),
  },
  {
    id: 2,
    title: "Sedang Diproses",
    time: "02 Desember 2025 • 08.10",
    active: true,
    icon: require("../../assets/images/bungkus.png"),
  },
  {
    id: 1,
    title: "Pesanan Masuk",
    time: "02 Desember 2025 • 08.00",
    icon: require("../../assets/images/masuk.png"),
  },
];


  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Lacak</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* INFO */}
        <View style={styles.infoBox}>
          <Text style={styles.label}>No. Pengiriman</Text>
          <Text style={styles.value}>{orderId}</Text>

          <View style={styles.divider} />

          <Text style={styles.label}>Jasa Pengiriman</Text>
          <Text style={styles.value}>KURIR INTERNAL</Text>
        </View>

        {/* TIMELINE */}
        <View style={styles.card}>
          <Text style={styles.section}>Riwayat Pengiriman</Text>

          {timeline.map((item, index) => (
            <View key={item.id} style={styles.timelineRow}>
              {/* ICON IMAGE */}
              <Image source={item.icon} style={styles.icon} />
              {/* LINE */}
              <View style={styles.lineContainer}>
                <View style={[styles.dot, item.active && styles.dotActive]} />
                {index !== timeline.length - 1 && <View style={styles.line} />}
              </View>

              {/* CONTENT */}
              <View style={styles.timelineContent}>
                <Text
                  style={[
                    styles.timelineTitle,
                    item.active && styles.activeText,
                  ]}
                >
                  {item.title}
                </Text>
                <Text style={styles.timelineTime}>{item.time}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* BOTTOM BAR */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryText}>Beli Lagi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
