import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
  
    avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  
    date: { fontSize: 11, color: '#6B7280' },
    store: { fontSize: 13, fontWeight: '700' },
  
    status: {
      padding: 6,
      width: 240,
      height: 25,
      borderRadius: 8,
      marginTop: 10,
      alignSelf: 'flex-start',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    statusText: {
      color: '#fff',
      fontWeight: '700',
      fontSize: 12,
    },
  
    badgeContainer: {
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 20,
    },
  
    badgeText: {
      color: '#fff',
      fontSize: 11,
      fontWeight: '600',
    },
  
    errorText: {
      color: '#EF4444',
      textAlign: 'center',
      padding: 20,
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
  
    },
    outlineText:{
      color: '#F59E0B',
      fontWeight: '700',
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