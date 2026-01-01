import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useContext, useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Alert,
} from "react-native";

import { PromoContext } from "../context/PromoContext";
import { ongkirList, vouchers } from "../data/PromoData";
import styles from "../styles/voucherStyles";

export default function VoucherScreen() {
  const router = useRouter();
  const {
    selectedVoucher,
    selectedOngkir,
    setSelectedVoucher,
    setSelectedOngkir,
  } = useContext(PromoContext);
  const [voucherCode, setVoucherCode] = React.useState("");
  const handleApplyCode = () => {
  if (!voucherCode) {
    alert("Masukkan kode voucher");
    return;
  }

  if (voucherCode === "FREEONGKIR") {
    alert("Voucher Gratis Ongkir digunakan");
  } else if (voucherCode === "VOUCHER10") {
    alert("Voucher diskon Rp 10.000 digunakan");
  } else {
    alert("Kode voucher tidak valid");
  }
    Alert.alert("Voucher berhasil digunakan");
  };

  const renderVoucher = ({ item }) => {
    const active = selectedVoucher?.id === item.id;

    return (
      <TouchableOpacity
        style={[styles.card, active && styles.activeCard]}
        onPress={() => setSelectedVoucher(item)}
      >
        <View style={styles.cardLeft}>
          <View style={styles.iconBox}>
            <Ionicons name="pricetag" size={18} color="#4CAF50" />
          </View>

          <View>
            <Text style={styles.title}>{item.id}</Text>
            <Text style={styles.desc}>
              {item.type === "nominal"
                ? `Potongan Rp ${item.value.toLocaleString()}`
                : `Diskon ${item.value}%`}
            </Text>
            <Text style={styles.min}>
              Min. belanja Rp {item.minBelanja.toLocaleString()}
            </Text>
          </View>
        </View>

        <Ionicons
          name={active ? "checkbox" : "square-outline"}
          size={22}
          color={active ? "#4CAF50" : "#aaa"}
        />
      </TouchableOpacity>
    );
  };

  const renderOngkir = (item) => {
    const active = selectedOngkir?.id === item.id;

    return (
      <TouchableOpacity
        key={item.id}
        style={[styles.card, active && styles.activeCardBlue]}
        onPress={() => setSelectedOngkir(item)}
      >
        <View style={styles.cardLeft}>
          <View style={[styles.iconBox, { backgroundColor: "#E3F2FD" }]}>
            <Image
              source={require("../../assets/images/ongkir.png")}
              style={styles.ongkirIcon}
            />
          </View>

          <View>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.desc}>
              {item.price === 0
                ? "Gratis Ongkir"
                : `Ongkir Rp ${item.harga.toLocaleString()}`}
            </Text>
          </View>
        </View>

        <Ionicons
          name={active ? "checkbox" : "square-outline"}
          size={22}
          color={active ? "#2196F3" : "#aaa"}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.topHeader}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.topTitle}>Voucher & Ongkir</Text>
        <View style={{ width: 22 }}></View>
      </View>

      {/* INPUT KODE */}
      <View style={styles.codeBox}>
        <TextInput
          style={styles.codeInput}
          placeholder="Masukkan kode voucher"
          value={voucherCode}
          onChangeText={setVoucherCode}
          autoCapitalize="characters"
        />

        <TouchableOpacity style={styles.codeBtn} onPress={handleApplyCode}>
          <Text style={styles.codeBtnText}>Pakai</Text>
        </TouchableOpacity>
      </View>

      {/* VOUCHER */}
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={styles.sectionTitle}>Voucher</Text>
      </View>

      <FlatList
        data={vouchers}
        keyExtractor={(item) => item.id}
        renderItem={renderVoucher}
        contentContainerStyle={{ padding: 16 }}
      />

      {/* ONGKIR */}
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={styles.sectionTitle}>Pengiriman</Text>
        {ongkirList.map(renderOngkir)}
      </View>

      {/* BUTTON */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.doneBtn} onPress={() => router.back()}>
          <Text style={styles.doneText}>Oke</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
