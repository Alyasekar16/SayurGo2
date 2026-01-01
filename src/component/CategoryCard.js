import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';

export default function CategoryCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Kategori Produk</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { margin: 10, padding: 15, backgroundColor: colors.secondary, borderRadius: 10 },
  text: { color: 'white', fontWeight: 'bold' },
});