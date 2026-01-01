import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },

  header: {
    backgroundColor: "#2E7D32",
    paddingHorizontal: 20,
    paddingVertical: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    gap: 12,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 16,
    marginTop: 2,
    marginBottom: 2,
    fontWeight: "600",
  },

  editText: {
    color: "#fff",
    fontWeight: "600",
    marginTop: 5,
  },

  /* ===== STICKY ===== */

  stickyContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingBottom: 35,
  },

  voucherRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  voucherText: {
    marginLeft: 10,
    fontWeight: "600",
    flex: 1,
  },

  voucherRight: {
    color: "#999",
    fontSize: 12,
  },

  coinIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },

  coinRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  coinLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  coinText: {
    fontSize: 13,
    color: "#333",
  },

  coinBrand: {
    fontWeight: "700",
    color: "#FFA500",
  },

  checkoutRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingTop: 15,
  },

  selectAll: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    backgroundColor: "#FFA500",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  checkboxOff: {
    backgroundColor: "#fff",
    marginTop: -5,
    borderWidth: 1,
    borderColor: "#ccc",
  },

  selectAllText: {
    fontSize: 13,
    color: "#333",
  },

  totalBox: {
    alignItems: "flex-end",
  },

  totalText: {
    color: "#2E7D32",
    fontWeight: "700",
    marginBottom: 6,
  },

  checkoutRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 12,
  },

  rightBox: {
    marginLeft: "auto",
    alignItems: "flex-end",
    flexDirection: "row",
    marginRight: 10,
    marginLeft: 35,
    gap: 6,
  },

  priceBox: {
    alignItems: "flex-end",
  },

  totalText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#2E7D32",
  },

  minText: {
    fontSize: 12,
    color: "#777",
    marginTop: 4, // jarak atas-bawah
  },

  checkoutBtn: {
    backgroundColor: "#FFA500",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
  },

  checkoutDisabled: {
    backgroundColor: "#ccc",
  },

  checkoutText: {
    color: "#fff",
    fontWeight: "600",
  },

  deleteBtnBottom: {
    backgroundColor: "#FFA500",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
  },

  deleteTextBottom: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },

  editActions: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },

  favBtn: {
    backgroundColor: "#2E7D32",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
  },

  favText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },

  categoryCard: {
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 5,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 12,
    elevation: 3,
  },

  categoryHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  categoryTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginTop: -5,
    color: "#333",
  },
});
