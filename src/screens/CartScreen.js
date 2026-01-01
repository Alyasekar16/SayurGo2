import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useContext, useState } from "react";
import {
  FlatList,
  Image,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CartItem from "../component/CartItem";
import { CartContext } from "../context/CartContext";
import { PromoContext } from "../context/PromoContext";
import styles from "../styles/cartStyles";

export default function CartScreen() {
  const { cart, increaseQty, decreaseQty, removeFromCart } =
    useContext(CartContext);

  const router = useRouter();
  const coinLogo = require("../../assets/images/logo.png");

  const [selectedIds, setSelectedIds] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const allSelected = cart.length > 0 && selectedIds.length === cart.length;
  
  // Group by category
  const groupedCart = cart.reduce((acc, item) => {
    const category = item.jenis || item.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});
  
  // Order categories consistently: Sayuran, Buah, Bumbu, Lauk
  const categoryOrder = ["Sayuran", "Buah", "Bumbu", "Lauk"];
  const categories = categoryOrder.filter((cat) => groupedCart[cat]);


  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(cart.map((item) => item.id));
    }
  };

  const totalPrice = cart
    .filter((item) => selectedIds.includes(item.id))
    .reduce((sum, item) => sum + (item.harga || item.price) * item.qty, 0);

  const MIN_ORDER = 20000;

  const meetsMin = totalPrice >= MIN_ORDER;

  // prepare selected items and promo from PromoContext
  const selectedItems = cart.filter((item) => selectedIds.includes(item.id));
  const {
    selectedVoucher,
    selectedOngkir,
    useCoin,
    setSelectedVoucher,
    setSelectedOngkir,
    setUseCoin,
    coinBalance,
  } = useContext(PromoContext);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Keranjang Saya ({cart.length})</Text>
        </View>

        <TouchableOpacity onPress={() => setEditMode(!editMode)}>
          <Text style={styles.editText}>{editMode ? "Selesai" : "Ubah"}</Text>
        </TouchableOpacity>
      </View>

      {/* LIST ITEM */}
      <FlatList
  data={categories}
  keyExtractor={(item) => item}
  showsVerticalScrollIndicator={false}
  contentContainerStyle={{ paddingBottom: 260 }}
  renderItem={({ item: category }) => {
    const items = groupedCart[category];

    const allChecked = items.every((i) =>
      selectedIds.includes(i.id)
    );

    return (
      <View style={styles.categoryCard}>
        {/* HEADER KATEGORI */}
        <TouchableOpacity
          style={styles.categoryHeader}
          onPress={() => {
            if (allChecked) {
              setSelectedIds((prev) =>
                prev.filter(
                  (id) => !items.some((i) => i.id === id)
                )
              );
            } else {
              setSelectedIds((prev) => [
                ...new Set([...prev, ...items.map((i) => i.id)]),
              ]);
            }
          }}
        >
          <View style={[styles.checkbox, !allChecked && styles.checkboxOff]}>
            {allChecked && (
              <Ionicons name="checkmark" size={14} color="#fff" />
            )}
          </View>
          <Text style={styles.categoryTitle}>{category}</Text>
        </TouchableOpacity>

        {/* PRODUK DALAM KATEGORI */}
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            checked={selectedIds.includes(item.id)}
            onToggle={() => toggleSelect(item.id)}
            onIncrease={() => increaseQty(item.id)}
            onDecrease={() => decreaseQty(item.id)}
          />
        ))}
      </View>
    );
  }}
/>
      {/* STICKY BOTTOM */}
      <View style={styles.stickyContainer}>
        {/* VOUCHER */}
        {!editMode && (
          <TouchableOpacity
            style={styles.voucherRow}
            onPress={() =>
              router.push({
                pathname: "/voucher",
                params: { items: JSON.stringify(selectedItems) },
              })
            }
          >
            <Ionicons name="ticket-outline" size={18} color="#FFA500" />
            <Text style={styles.voucherText}>Voucher & Ongkir</Text>
            <Text style={styles.voucherRight}>
              {selectedVoucher ? selectedVoucher.id : "Gunakan/masukkan kode"}
            </Text>
          </TouchableOpacity>
        )}

        {/* COIN */}
        {!editMode && (
          <View style={styles.coinRow}>
            <View style={styles.coinLeft}>
              <Image source={coinLogo} style={styles.coinIcon} />
              {selectedIds.length === 0 ? (
                <Text style={styles.coinText}>
                  Tidak ada produk yang dipilih
                </Text>
              ) : (
                <Text style={styles.coinText}>
                  Tukarkan koin ({coinBalance.toLocaleString()}){" "}
                  <Text style={styles.coinBrand}>Sayur.GO</Text>
                </Text>
              )}
            </View>

            <Switch
              value={useCoin}
              onValueChange={(v) => setUseCoin(v)}
              disabled={coinBalance === 0 || selectedIds.length === 0}
              trackColor={{ false: "#ccc", true: "#2E7D32" }}
            />
          </View>
        )}

        {/* CHECKOUT / EDIT BAR */}
        <View style={styles.checkoutRow}>
          {/* SELECT ALL (SELALU ADA) */}
          <TouchableOpacity style={styles.selectAll} onPress={toggleSelectAll}>
            <View style={[styles.checkbox, !allSelected && styles.checkboxOff]}>
              {allSelected && (
                <Ionicons name="checkmark" size={14} color="#fff" />
              )}
            </View>
            <Text style={styles.selectAllText}>Semua</Text>
          </TouchableOpacity>

          {/* KANAN: BEDA MODE */}
          {editMode ? (
            // 🔴 MODE UBAH (edit mode): show Hapus + Favoritkan
            <View style={styles.editActions}>
              <TouchableOpacity
                disabled={selectedIds.length === 0}
                style={[
                  styles.deleteBtnBottom,
                  selectedIds.length === 0 && styles.checkoutDisabled,
                ]}
                onPress={() => {
                  selectedIds.forEach((id) => removeFromCart(id));
                  setSelectedIds([]);
                }}
              >
                <Text style={styles.deleteTextBottom}>
                  Hapus ({selectedIds.length})
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                disabled={selectedIds.length === 0}
                style={[styles.favBtn, selectedIds.length === 0 && styles.checkoutDisabled]}
                onPress={() => {
                  if (selectedIds.length === 0) return;
                  // navigate to profile favorites; pass selected items if needed
                  router.push({ pathname: "/profile", params: { tab: "favorites", items: JSON.stringify(selectedItems) } });
                }}
              >
                <Text style={styles.favText}>Favoritkan</Text>
              </TouchableOpacity>
            </View>
          ) : (
            // 🟢 MODE NORMAL
            <View style={styles.rightBox}>
                <View
                  style={[
                    styles.priceBox,
                    { marginRight: 6 },
                    meetsMin
                      ? { justifyContent: "center", minHeight: 40, marginBottom: -3 }
                      : { justifyContent: "flex-start" },
                  ]}
                >
                  <Text style={styles.totalText}>
                    Rp{totalPrice.toLocaleString()}
                  </Text>

                  {totalPrice < MIN_ORDER && (
                    <Text style={styles.minText}>
                      Minimal belanja Rp{MIN_ORDER.toLocaleString()}
                    </Text>
                  )}
                </View>

              <TouchableOpacity
                disabled={
                  selectedIds.length === 0 || totalPrice < MIN_ORDER
                }
                style={[styles.checkoutBtn,
                  (selectedIds.length === 0 || totalPrice < MIN_ORDER) &&
                    styles.checkoutDisabled,
                ]}
                onPress={() => {
                  if (selectedIds.length === 0 || totalPrice < MIN_ORDER) return;
                  router.push({
                    pathname: "/checkout",
                    params: { items: JSON.stringify(selectedItems) },
                  });
                }}
              >
                <Text style={styles.checkoutText}>
                  Checkout ({selectedIds.length})
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
