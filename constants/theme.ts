/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform, StyleSheet } from 'react-native';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
/* ===== STYLE ===== */
export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6' },

  header: {
    backgroundColor: '#2E7D32',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },

  headerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 12,
  },

  content: { padding: 14 },

  //card 1 
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
  },

  row: { flexDirection: 'row', alignItems: 'center' },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },

  date: { fontSize: 11, color: '#6B7280' },
  store: { fontSize: 13, fontWeight: '700' },

  status: {
    backgroundColor: '#f9f39bff',
    padding: 6,
    width: 240,
    height: 25,
    borderRadius: 8,
    marginTop: 10,
    alignSelf: 'flex-start',
  },

  statusText: {
    color: '#F59E0B',
    fontWeight: '700',
    alignSelf: 'center',
    fontSize: 12,
  },

  // card 3
  section: { fontWeight: '700', marginBottom: 8 },
  section2: { fontWeight: '700', marginBottom: 8, color: '#F59E0B', },

  badge: {
    backgroundColor: '#f9f39bff',
    color: '#F59E0B',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    fontSize: 9,
  },

  // card 4 daftar pesanan
  label: { fontSize: 11, color: '#6B7280' },
  value: { fontSize: 12, color: '#111827' },

  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },

  product: { fontSize: 13, fontWeight: '700' },
  qty: { fontSize: 11, color: '#6B7280' },

  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 10,
  },

  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },

  // 5 Btn lihat ulasan
  bold: { fontWeight: '700' },

  outlineButton: {
    borderWidth: 1,
    borderColor: '#F59E0B',
    width: 180,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 12,


    color: '#F59E0B',
    fontWeight: '700',
    textAlign: 'center',
  },


  // 6 btn beli lagi
  bottomBar: {
    backgroundColor: '#F8DEB7',
    padding: 12,
    borderRadius: 10,
    width: 280,
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },

  primaryText: {
    alignContent: 'center',
    color: '#fff',
    fontWeight: '700',
  },
});
