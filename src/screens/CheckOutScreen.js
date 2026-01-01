import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useContext } from "react";
import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PesananContext } from "../context/PesananContext";
import { PromoContext } from "../context/PromoContext";
import styles from "../styles/checkoutStyles";

export default function CheckOutScreen() {
  const router = useRouter();
  const { items } = useLocalSearchParams();
  const { tambahPesanan } = useContext(PesananContext);
  const [showModal, setShowModal] = React.useState(false);

  let selectedItems = [];

  try {
    selectedItems = items ? JSON.parse(items) : [];
  } catch (e) {
    selectedItems = [];
  }
  const { selectedVoucher, selectedOngkir, useCoin, coinBalance } =
    useContext(PromoContext);

  // Calculate totals
  // subtotal
  const subtotal = Array.isArray(selectedItems)
    ? selectedItems.reduce(
        (sum, item) => sum + (item.harga || item.price) * item.qty,
        0
      )
    : 0;

  // ===== VOUCHER =====
  // minBelanja already checked in VoucherScreen, so always apply if selected
  let voucherValue = 0;
  if (selectedVoucher) {
    voucherValue =
      selectedVoucher.type === "nominal"
        ? selectedVoucher.value
        : Math.floor(subtotal * (selectedVoucher.value / 100));
  }

  // ===== ONGKIR =====
  // default shipping cost when user hasn't selected ongkir yet
  const DEFAULT_ONGKIR = 5000;
  const ongkir =
    typeof selectedOngkir?.harga === "number"
      ? selectedOngkir.harga
      : DEFAULT_ONGKIR;

  // ===== COIN =====
  // Conversion rate: 1 koin = 100 Rupiah (adjustable)
  const COIN_VALUE_RP = 10;
  const maxRedeemRp = (coinBalance || 0) * COIN_VALUE_RP;
  const coin = useCoin
    ? Math.min(maxRedeemRp, subtotal + ongkir - voucherValue)
    : 0;

  // ===== TOTAL =====
  const totalBelanja = Math.max(subtotal + ongkir - voucherValue - coin, 0);

  const MIN_ORDER = 20000;
  const canCheckout = subtotal >= MIN_ORDER;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={{ padding: 8 }}
          >
            <Ionicons name="chevron-back" size={26} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Pesan dan Bayar</Text>
        </View>
      </View>

      {/* Success modal shown after order is placed */}
      <Modal
        visible={showModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={localStyles.overlay}>
          <View style={localStyles.modalCard}>
            <Ionicons name="checkmark-circle" size={92} color="#22C55E" />
            <Text style={localStyles.modalTitle}>Pesanan Berhasil</Text>
            <Text style={localStyles.modalSubtitle}>
              Terima Kasih telah membuat pesanan, silahkan cek kembali di riwayat pemesanan
            </Text>

            <TouchableOpacity
              style={localStyles.modalButton}
              onPress={() => {
                setShowModal(false);
                router.replace('/(tabs)');
              }}
            >
              <Text style={localStyles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Alamat Pengiriman */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Alamat Pengiriman</Text>
          <View style={styles.addressBox}>
            <View style={styles.addressHeader}>
              <Ionicons name="home" size={20} color="#2E7D32" />
              <Text style={styles.addressName}>Rumah Ibu</Text>
            </View>
            <Text style={styles.addressText}>
              Jl. Puspita Mekar No.21, Sukabumi
            </Text>
          </View>
        </View>

        {/* Pesanan */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pesanan</Text>
          {selectedItems.map((item) => (
            <View key={item.id} style={styles.orderItem}>
              {item.gambar || item.image ? (
                <Image
                  source={
                    typeof (item.gambar || item.image) === "string"
                      ? { uri: item.gambar || item.image }
                      : item.gambar || item.image
                  }
                  style={styles.orderItemImage}
                />
              ) : (
                <View style={styles.orderItemImagePlaceholder} />
              )}

              <View style={styles.orderItemInfo}>
                <Text style={styles.itemName}>{item.nama || item.name}</Text>
                <Text style={styles.itemDetails}>
                  {item.qty}x{" "}
                  {item.deskripsi ||
                    `(${(item.qty * (item.harga || item.price)) / item.qty}g)`}
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
              <Text style={styles.summaryValue}>
                Rp {subtotal.toLocaleString()}
              </Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Voucher</Text>
              <Text style={styles.summaryValue}>
                - Rp {voucherValue.toLocaleString()}
              </Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Koin</Text>
              <Text style={styles.summaryValue}>
                - Rp {coin.toLocaleString()}{" "}
                {coin > 0 && `(${Math.floor(coin / COIN_VALUE_RP)} koin)`}
              </Text>
            </View>

            <View style={[styles.summaryRow, styles.summaryBorder]}>
              <Text style={styles.summaryLabel}>Total Kirim</Text>
              <Text style={styles.summaryValue}>
                Rp {ongkir.toLocaleString()}
              </Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabelBold}>Total Belanja</Text>
              <Text style={styles.summaryValueBold}>
                Rp {totalBelanja.toLocaleString()}
              </Text>
            </View>
          </View>
        </View>

        <View style={{ height: 16 }} />
        {!canCheckout && (
          <View style={{ paddingHorizontal: 16, marginBottom: 8 }}>
            <Text style={{ color: "#d32f2f" }}>
              Minimal belanja Rp{MIN_ORDER.toLocaleString()} untuk melakukan
              checkout.
            </Text>
          </View>
        )}
        <View style={{ height: 84 }} />
      </ScrollView>

      {/* Sticky Button */}
      <View style={styles.stickyButton}>
        <TouchableOpacity
  disabled={!canCheckout}
  style={[styles.pesanBtn, !canCheckout && { opacity: 0.5 }]}
  onPress={() => {
    if (!canCheckout) return;

    tambahPesanan({
      id: Date.now(),
      tanggal: new Date().toLocaleString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }) + ' WIB',
      items: selectedItems,
      status: "Sedang Diproses",
      voucherValue: voucherValue,
      ongkir: ongkir,
      coin: coin,
      subtotal: subtotal,
      totalBelanja: totalBelanja,
    });

    // Show modal success dialog; user will tap OK to leave checkout
    setShowModal(true);
  }}
>
  <Text style={styles.pesanText}>Pesan</Text>
</TouchableOpacity>
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
  },
  modalCard: {
    width: '100%',
    maxWidth: 520,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 28,
    paddingHorizontal: 22,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 18,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 12,
    marginBottom: 6,
  },
  modalSubtitle: {
    textAlign: 'center',
    color: '#6B7280',
    marginBottom: 20,
  },
  modalButton: {
    marginTop: 6,
    backgroundColor: '#6EC1E4',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
});