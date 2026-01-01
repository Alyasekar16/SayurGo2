import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useContext } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { CartContext } from '../context/CartContext';
import styles from '../styles/pesananStyles';

export default function PesananScreen() {
  const { cart } = useContext(CartContext);
  const router = useRouter();

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + (item.harga || item.price) * item.qty, 0);
  const diskon = 0;
  const voucher = 0;
  const ongkir = 5000;
  const totalBelanja = subtotal + ongkir - diskon - voucher;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => router.back()} style={{ padding: 8 }}>
            <Ionicons name="chevron-back" size={26} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Pesan dan Bayar</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Alamat Pengiriman */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Alamat Pengiriman</Text>
          <View style={styles.addressBox}>
            <View style={styles.addressHeader}>
              <Ionicons name="home" size={20} color="#2E7D32" />
              <Text style={styles.addressName}>Rumah Ibu</Text>
            </View>
            <Text style={styles.addressText}>Jl. Puspita Mekar No.21, Sukabumi</Text>
          </View>
        </View>

        {/* Pesanan */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pesanan</Text>
          {cart.map((item) => (
            <View key={item.id} style={styles.orderItem}>
              {item.gambar || item.image ? (
                <Image
                  source={typeof (item.gambar || item.image) === 'string' ? { uri: item.gambar || item.image } : (item.gambar || item.image)}
                  style={styles.orderItemImage}
                />
              ) : (
                <View style={styles.orderItemImagePlaceholder} />
              )}

              <View style={styles.orderItemInfo}>
                <Text style={styles.itemName}>{item.nama || item.name}</Text>
                <Text style={styles.itemDetails}>
                  {item.qty}x {item.deskripsi || `(${item.qty * (item.harga || item.price) / item.qty}g)`}
                </Text>
              </View>

              <Text style={styles.itemPrice}>
                Rp {((item.harga || item.price) * item.qty).toLocaleString()}
              </Text>
            </View>
          ))}
        </View>

        {/* Ringkasan Pesanan */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ringkasan Pesanan</Text>
          <View style={styles.summaryBox}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal</Text>
              <Text style={styles.summaryValue}>Rp {subtotal.toLocaleString()}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Diskon</Text>
              <Text style={styles.summaryValue}>Rp {diskon}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Voucher</Text>
              <Text style={styles.summaryValue}>Rp {voucher}</Text>
            </View>
            <View style={[styles.summaryRow, styles.summaryBorder]}>
              <Text style={styles.summaryLabel}>Total Kirim</Text>
              <Text style={styles.summaryValue}>Rp {ongkir.toLocaleString()}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabelBold}>Total Belanja</Text>
              <Text style={styles.summaryValueBold}>Rp {totalBelanja.toLocaleString()}</Text>
            </View>
          </View>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Sticky Button */}
      <View style={styles.stickyButton}>
        <TouchableOpacity style={styles.pesanBtn}>
          <Text style={styles.pesanText}>Pesan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
