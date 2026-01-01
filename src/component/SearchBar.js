import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import colors from '../styles/colors';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Cari produk disini..." />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.secondary,
  },
});