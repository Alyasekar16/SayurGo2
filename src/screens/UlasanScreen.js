import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';

export default function UlasanScreen() {
  const router = useRouter(); 
  const [rating, setRating] = useState(0);
  const [ulasan, setUlasan] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Penilaian & Ulasan</Text>
      </View>

      {/* Card Rating */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Beri penilaian</Text>
        <Text style={styles.subtitle}>Bagaimana layanan kami?</Text>

        <View style={styles.starRow}>
          {[1, 2, 3, 4, 5].map((i) => (
            <TouchableOpacity key={i} onPress={() => setRating(i)}>
              <Ionicons
                name={i <= rating ? 'star' : 'star-outline'}
                size={30}
                color="#FFC107"
              />
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.hint}>Tap bintang untuk memberi nilai</Text>
      </View>

      {/* Ulasan */}
      <Text style={styles.sectionTitle}>Bantu kami untuk jadi lebih baik</Text>
      <Text style={styles.sectionDesc}>
        Berikan kami saran demi meningkatkan pelayanan yang terbaik untuk Anda
      </Text>

      <TextInput
        placeholder="Tulis ulasan Anda di sini..."
        style={styles.input}
        value={ulasan}
        onChangeText={setUlasan}
        multiline
      />

      <Text style={styles.minChar}>*Berikan min 5 karakter</Text>

      {/* Button */}
      <TouchableOpacity
        style={[
          styles.button,
          ulasan.length < 5 && { opacity: 0.5 },
        ]}
        disabled={ulasan.length < 5}
        onPress={() => router.push('/detailulasan')}
      >
        <Text style={styles.buttonText}>Kirim</Text>
      </TouchableOpacity>
    </View>
  );
}
