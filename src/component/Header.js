import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Sayur.Go</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: colors.primary },
  logo: { color: 'white', fontSize: 20, fontWeight: 'bold' },
});