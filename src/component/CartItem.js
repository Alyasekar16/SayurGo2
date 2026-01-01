import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/cartItemStyles";

export default function CartItem({
  item,
  onIncrease,
  onDecrease,
  checked = false,
  onToggle,
}) {
  const name = item.nama || item.name;
  const category = item.jenis || item.category;
  const price = item.harga || item.price;
  const image = item.image;
  const weight = item.berat || "250 gram";

  return (
    <View style={styles.wrapper}>
      {/* CATEGORY HEADER */}
      <View style={styles.categoryHeader}>
      </View>

      <View style={styles.card}>
        {/* CHECKBOX */}
        <TouchableOpacity
          style={styles.checkboxWrap}
          onPress={onToggle}
          activeOpacity={0.7}
        >
          {checked ? (
            <View style={styles.checkboxChecked}>
              <Ionicons name="checkmark" size={14} color="#fff" />
            </View>
          ) : (
            <View style={styles.checkbox} />
          )}
        </TouchableOpacity>

        {/* IMAGE */}
        <Image
          source={typeof image === "string" ? { uri: image } : image}
          style={styles.image}
        />

        {/* INFO */}
        <View style={styles.info}>
          <Text style={styles.name} numberOfLines={2}>
            {name}
          </Text>
          <Text style={styles.weight}>{weight}</Text>
          <Text style={styles.price}>Rp {price.toLocaleString()}</Text>

          <View style={styles.bottomRow}>
            <View />
            <View style={styles.qtyWrapper}>
              <View style={styles.qtyRow}>
                <TouchableOpacity style={styles.qtyBtn} onPress={onDecrease}>
                  <Text style={styles.qtyText}>−</Text>
                </TouchableOpacity>

                <Text style={styles.qtyNumber}>{item.qty}</Text>

                <TouchableOpacity style={styles.qtyBtn} onPress={onIncrease}>
                  <Text style={styles.qtyText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}