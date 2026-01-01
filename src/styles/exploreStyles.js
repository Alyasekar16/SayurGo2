import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FAFAFA',
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
  },

  header: { 
    fontSize: 24, 
    fontWeight: '700', 
    color: '#2E7D32',
  },

  searchContainer: {
    paddingHorizontal: 20,
    paddingBottom: 12,
  },

  searchInput: {
    backgroundColor: '#E8F5E9',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: '#333',
  },

  sectionTitle: { 
    fontSize: 16, 
    fontWeight: '700', 
    color: '#2E7D32', 
    paddingHorizontal: 20, 
    marginTop: 16,
    marginBottom: 12,
  },

  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingBottom: 20,
  },

  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    alignItems: 'center',
    width: '48%',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },

  productImageContainer: {
    width: 60,
    height: 60,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  productImage: { 
    width: 60, 
    height: 60,
    resizeMode: 'contain',
  },

  productName: { 
    fontSize: 14, 
    fontWeight: '600', 
    color: '#333', 
    textAlign: 'center',
    marginBottom: 6,
  },

  productPrice: { 
    fontSize: 13, 
    color: '#2E7D32', 
    fontWeight: '700',
  },

  // Ojek Advertisement
  ojekAdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF3E0',
    marginHorizontal: 12,
    marginTop: 12,
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },

  ojekAdContent: {
    flex: 1,
    marginRight: 10,
  },

  ojekAdTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
    lineHeight: 20,
  },

  ojekAdButton: {
    backgroundColor: '#FFA500',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },

  ojekAdButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },

  ojekAdImage: {
    width: 110,
    height: 90,
  },

  // Category styles
  categoryCard: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 10,
    marginRight: 10,
    width: 86,
  },

  categoryCardActive: {
    borderWidth: 1,
    borderColor: '#2E7D32',
    backgroundColor: '#E8F5E9',
  },

  categoryIcon: { width: 36, height: 36, marginBottom: 6 },
  categoryText: { fontSize: 12, color: '#388E3C' },
  categoryTextActive: { fontWeight: '700' },
   // ===== PRODUCT =====
  productBottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },

  addButton: {
    borderWidth: 1,
    borderColor: "#FFA500",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },

  addButtonText: {
    color: "#FFA500",
    fontSize: 12,
    fontWeight: "600",
  },

  productBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 12,
    width: 140, // ⬅️ KUNCI UTAMA (biar gede)
    marginRight: 18,
    marginBottom: 8,
    marginLeft: 9,
    justifyContent: "space-between",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  productImageContainer: {
    width: "100%",
    height: 70,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },
  productImage: {
    width: 55,
    height: 55,
    resizeMode: "contain",
  },

  heartIcon: {
    position: "absolute",
    top: -6,
    right: -6, // ⬅️ pindah ke kiri
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,

    elevation: 4,
  },
  heartIconText: {
    fontSize: 20,
  },
  ratingBox: {
    bottom: 6,
    left: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  ratingText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#333",
  },
  productInfo: {
    width: "100%",
    alignItems: "flex-start", // ⬅️ ini kuncinya
  },
  productName: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
    marginBottom: 2,
  },
  productWeight: {
    fontSize: 11,
    color: "#999",
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start", // ⬅️ penting
    marginTop: 2,
  },

  productPrice: {
    fontSize: 12,
    fontWeight: "700",
    color: "#2E7D32",
  },

  cartButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",

    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 8,
    gap: 3,

    marginTop: 15, // ⬅️ bikin turun ke bawah dikit

    // shadow iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,

    // shadow Android
    elevation: 4,
  },

  cartIcon: {
    width: 10,
    height: 10,
    tintColor: "#FFA726",
  },

  cartButtonText: {
    color: "#FFA726",
    fontSize: 10,
    fontWeight: "200",
  },
});
