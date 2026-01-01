import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/detailulasanSyles';

export default function DetailUlasanScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Ionicons name="close" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Lihat Penilaian & Ulasan</Text>
      </View>

      {/* Info */}
      <View style={styles.infoRow}>
        <View>
          <Text style={styles.infoLabel}>No. Pesanan</Text>
          <Text style={styles.infoValue}>021225 - ASDFG</Text>
        </View>
        <View>
          <Text style={styles.infoLabel}>Dinilai & diulas pada</Text>
          <Text style={styles.infoValue}>05 Desember 2025</Text>
        </View>
      </View>

      {/* Card */}
      <View style={styles.card}>
        <View style={styles.starRow}>
          {[1, 2, 3, 4, 5].map((i) => (
            <Ionicons key={i} name="star" size={26} color="#FFC107" />
          ))}
        </View>

        <Text style={styles.result}>Sangat Baik</Text>
      </View>

      {/* Ulasan */}
      <Text style={styles.sectionTitle}>Ulasan</Text>
      <Text style={styles.ulasanText}>
        Alhamdulillah , barang sampai dengan baik, kualitas buah segar,
        pelayanan bagus. Terimakasih sayurgo
      </Text>
    </View>
  );
}
