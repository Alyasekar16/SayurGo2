import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },

  // ===== TOP SEARCH BAR =====
  topSearchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#388E3C",
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 13,
    color: "#333",
  },
  searchIconText: {
    fontSize: 16,
    marginLeft: 8,
  },
  headerIcon: {
    padding: 4,
    position: "relative",
  },
  headerIconText: {
    fontSize: 22,
  },
  cartBadge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#FFA500",
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cartBadgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },

  // ===== HERO SECTION =====
  heroSection: {
    width: "100%",
    marginBottom: 16,
  },
  heroImage: {
    width: "100%",
    height: 200,
  },

  // ===== SECTION =====
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    paddingHorizontal: 18,
    marginBottom: 20,
  },
  boldGreen: {
    fontWeight: "600",
    color: "#2E7D32",
  },
  

  // ===== CATEGORY =====
  categoryRow: {
    flexDirection: "row",
    gap: 10,
  },
  categoryBox: {
    flex: 1,
    backgroundColor: "#E8F5E9",
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  // square variant for horizontal category carousel
  categoryBoxSquare: {
    width: 92,
    height: 92,
    backgroundColor: "#E8F5E9",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  categoryImage: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  categoryLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#2E7D32",
  },

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

  // ===== PROMO BANNER 1 (FINAL) =====

  promoRow: {
    flexDirection: "row",
    gap: 12,
  },

  // ===== BANNER 1 (LEBAR) =====
  promoBanner: {
    flex: 1.7,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    position: "relative",
    overflow: "hidden",
    elevation: 3,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  promoLeftContent: {
    width: "65%",
    justifyContent: 'flex-start', 
  },

  promoTag: {
    backgroundColor: "#22C55E",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginBottom: 8,
    alignSelf: "flex-start",
  },

  promoTagText: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "700",
  },

  promoTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
    lineHeight: 20,
    marginBottom: 6,
  },

  promoSubtitle: {
    fontSize: 11,
    color: "#6B7280",
    lineHeight: 15,
    marginBottom: 12,
  },
  promoBtn: {
    backgroundColor: "#FFA500",
    paddingHorizontal: 6,
    paddingVertical: 7,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginBottom: 0,   
  },

  promoBtnText: {
    fontSize: 9,
    fontWeight: "500",
    color: "#FFFFFF",
  },

  promoRightImage: {
    position: "absolute",
    right: -20,
    bottom: -10,
    top: "50%",
    transform: [{ translateY: -55 }],
    width: 95,
    height: 110,
    resizeMode: "contain",
  },

  promoTitle: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 18,
    marginBottom: 4,
  },

  promoSubtitle: {
    fontSize: 11,
    lineHeight: 14,
    marginBottom: 8,
  },

  // ===== BANNER 2 (KECIL) =====
  promoBannerYellow: {
    flex: 1, // ⬅️ LEBIH KECIL
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#FFE9C7",
    borderRadius: 20,
    justifyContent: "space-between",

    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },

  promoImageTop: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    marginTop: -20,
    marginBottom: -10,
  },

  promoTitleYellow: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
    lineHeight: 20,
    marginBottom: 5,
  },

  promoSubtitleYellow: {
    fontSize: 11,
    lineHeight: 15,
    color: "#388E3C",
    marginBottom: 5,
  },

  promoBtnYellow: {
    backgroundColor: "#FFA500",
    paddingHorizontal: 5,
    paddingVertical: 6,
    borderRadius: 7,
    alignSelf: "flex-start",
    marginTop: 0,
  },

  promoBtnTextYellow: {
    fontSize: 9,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  // ===== KEEP OLD STYLES (for other screens compatibility) =====
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  greeting: { fontSize: 18, fontWeight: "bold", color: "#2E7D32" },
  subtitle: { color: "#555", fontSize: 14 },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2E7D32",
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 10,
  },
  searchWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 30,
  },
  searchHeaderInput: {
    flex: 1,
    fontSize: 12,
    color: "#333",
  },
  topIcons: {
    flexDirection: "row",
    gap: 12,
  },
  icon: {
    fontSize: 20,
    color: "#1B5E20",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E7D32",
    marginLeft: 20,
    marginBottom: 10,
  },
  categoryCard: {
    alignItems: "center",
    marginRight: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 10,
    width: 80,
  },
  categoryIcon: { width: 40, height: 40, marginBottom: 6 },
  categoryText: { fontSize: 12, color: "#388E3C", fontWeight: "500" },
  productCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
    marginRight: 15,
    width: 130,
  },
  productImage: { width: 60, height: 60, marginBottom: 10 },
  productName: { fontSize: 13, color: "#333", fontWeight: "500" },
  productPrice: {
    fontSize: 12,
    color: "#2E7D32",
    marginTop: 1,
    fontWeight: "bold",
  },
});

export default styles;
