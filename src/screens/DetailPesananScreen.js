import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useContext, useMemo, useState } from 'react';
import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { PesananContext } from '../context/PesananContext';
import { PromoContext } from '../context/PromoContext';
import styles from '../styles/detailpesananStyles';

export default function PesananDetail() {
  const { orderId } = useLocalSearchParams();
  const [showProducts, setShowProducts] = useState(false);
  const { orders } = useContext(PesananContext);
  const { selectedVoucher, selectedOngkir, useCoin, coinBalance } = useContext(PromoContext) || {};
  
  // Find order by orderId
  const order = useMemo(() => {
    const orderIdNum = typeof orderId === 'string' ? parseInt(orderId, 10) : orderId;
    return orders.find(o => o.id === orderIdNum || o.id === orderId);
  }, [orders, orderId]);

  // Calculate totals from order items or use saved values
  const subtotal = useMemo(() => {
    if (order?.subtotal !== undefined) return order.subtotal;
    if (!order?.items) return 0;
    return order.items.reduce((sum, item) => sum + (item.harga || item.price || 0) * (item.qty || 1), 0);
  }, [order]);

  const voucherValue = order?.voucherValue || 0;
  const ongkir = order?.ongkir || 5000;
  const coin = order?.coin || 0;
  const totalBelanja = order?.totalBelanja || (subtotal + ongkir - voucherValue - coin);


  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detail Pesanan</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}
  showsVerticalScrollIndicator={false}>
        {/* TOKO */}
        {order ? (
          <View style={styles.card}>
            <View style={styles.row}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
                }}
                style={styles.avatar}
              />
              <View>
                <Text style={styles.date}>
                  {order.tanggal || "02 Desember 2025 • 08.37 WIB"}
                </Text>
                <Text style={styles.store}>Anisa FM</Text>
              </View>
            </View>

            <View style={[styles.status, { backgroundColor: getStatusColor(order.status) }]}>
              <Text style={styles.statusText}>{order.status || "Sedang Diproses"}</Text>
            </View>
          </View>
        ) : (
          <View style={styles.card}>
            <Text style={styles.errorText}>Pesanan tidak ditemukan</Text>
          </View>
        )}

        {/* INFO */}
        {order && (
          <View style={styles.card}>
            <Item label="No. Pesanan" value={String(order.id || orderId)} />
            <Item label="Jumlah Pengiriman" value={`${order.items?.length || 1} Pengiriman`} />
            <Item label="Alamat Toko" value="2J7B – CISAAT SUKABUMI" />
            <Item
              label="Alamat Pengiriman"
              value="Anisa FM\nJl. Puspa Mekar No.21, Sukabumi"
            />
          </View>
        )}  

        {/* PENGIRIMAN */}
        {order && (
          <View style={styles.card}>
            <View style={styles.rowBetween}>
              <Text style={styles.section}>Pengiriman Instan</Text>
              <View style={[styles.badgeContainer, { backgroundColor: getStatusColor(order.status) }]}>
                <Text style={styles.badgeText}>{order.status || "Sedang Diproses"}</Text>
              </View>
            </View>

            <Item label="Penerima Paket" value="Anisa FM" />
            <View style={styles.rowBetween}>
              <View style={{ flex: 1 }}>
                <Item label="No Pengiriman" value={String(order.id || orderId)} />
              </View>
              <TouchableOpacity
                onPress={() =>
                  router.push({
                    pathname: '/lacak',
                  })
                }
              >
                <Text style={styles.section2}>Lacak &gt;</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.rowBetween}>
              <View style={{ flex: 1 }}>
                <Item label="Pengiriman Maksimal" value="Selasa, 02 Desember 2025\n07.00 – 21.00" />
              </View>
              <TouchableOpacity onPress={() => setShowProducts(!showProducts)}>
                <Text style={styles.section2}>
                  {order.items?.length || 0} Produk {showProducts ? '˅' : '&gt;'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {showProducts && order && (
          <View style={styles.card}>
            <Text style={styles.section}>Daftar Pesanan</Text>

            {order.items?.map((item, index) => {
              const itemImage = item.gambar || item.image;
              const itemName = item.nama || item.name || 'Produk';
              const itemPrice = item.harga || item.price || 0;
              const itemQty = item.qty || 1;

              return (
                <View key={item.id || index}>
                  <View style={styles.row}>
                    <Image
                      source={
                        typeof itemImage === 'string'
                          ? { uri: itemImage }
                          : itemImage || { uri: 'https://via.placeholder.com/60' }
                      }
                      style={styles.productImage}
                    />
                    <View style={{ flex: 1 }}>
                      <Text style={styles.product}>{itemName}</Text>
                      <Text style={styles.qty}>
                        {itemQty} x Rp {itemPrice.toLocaleString('id-ID')}
                      </Text>
                    </View>
                  </View>
                  {index < order.items.length - 1 && <View style={styles.divider} />}
                </View>
              );
            })}

            <View style={styles.divider} />

            <Price label="Subtotal" value={`Rp ${subtotal.toLocaleString('id-ID')}`} />
            <Price label="Diskon" value="Rp 0" />
            <Price label="Voucher" value={`Rp ${voucherValue.toLocaleString('id-ID')}`} />
            <Price label="Total Kirim" value={`Rp ${ongkir.toLocaleString('id-ID')}`} />

            <View style={styles.divider} />

            <Price
              label="Total Belanja"
              value={`Rp ${totalBelanja.toLocaleString('id-ID')}`}
              total
            />
          </View>
        )}



        <TouchableOpacity style={styles.outlineButton}
        onPress={() => router.push({
                pathname: '/ulasan',}) }>
       <Text style={styles.outlineText}> Lihat Ulasan</Text>
        </TouchableOpacity>

      </ScrollView >

      <View style={styles.bottomBar}>
  <TouchableOpacity style={styles.buttomBar}>
    <Text style={styles.primaryText}>Beli Lagi</Text>
  </TouchableOpacity>
</View>
    </View>
  );
}

/* ===== HELPER FUNCTIONS ===== */

const getStatusColor = (status) => {
  switch (status) {
    case "Selesai":
      return "#22C55E";
    case "Dibatalkan":
      return "#F7D274";
    default:
      return "#FACC15"; // Kuning untuk "Sedang Diproses"
  }
};

/* ===== COMPONENT ===== */

const Item = ({ label, value }) => (
  <View style={{ marginBottom: 8 }}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{String(value).replace(/\n/g, '\n')}</Text>
  </View>
);

const Price = ({ label, value, total }) => (
  <View style={styles.priceRow}>
    <Text style={[styles.label, total && styles.bold]}>
      {label}
    </Text>
    <Text
      style={[
        styles.value,
        total && styles.bold,
        total && { color: '#EF4444' },
      ]}
    >
      {value}
    </Text>
  </View>
);

