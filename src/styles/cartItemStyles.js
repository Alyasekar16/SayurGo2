import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    marginTop: 1,
  },

  /* ===== CARD ===== */
  card: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 12,
    marginTop: 10,
    borderRadius: 12,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { height: 1 },
  },

  /* ===== IMAGE ===== */
  image: {
    width: 65,
    height: 65,
    resizeMode: "cover",
    backgroundColor: "#ffffff",
  },

  /* ===== INFO ===== */
  info: {
    flex: 1,
    marginLeft: 18,
  },

  name: {
    fontSize: 15,
    fontWeight: "700",
    color: "#333",
  },

  weight: {
    fontSize: 12,
    color: "#888",
  },

  price: {
    fontSize: 13,
    fontWeight: "700",
    color: "#d32f2f",
    marginTop: 2,
  },

  /* ===== QTY ===== */
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 1,
  },

  qtyWrapper: {
    marginLeft: "auto",
    alignItems: "flex-end",
  },

  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 1,
  },

  qtyBtn: {
    width: 28,
    height: 28,
    backgroundColor: "#f1f1f1",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },

  qtyText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFA500",
  },

  qtyNumber: {
    fontSize: 14,
    fontWeight: "600",
    marginHorizontal: 10,
    color: "#333",
  },

  /* ===== CHECKBOX ===== */
  checkboxWrap: {
    width: 36,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginTop: 30,
  },

  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    backgroundColor: "transparent",
  },

  checkboxChecked: {
    width: 20,
    height: 20,
    borderRadius: 4,
    backgroundColor: "#FFA500",
    alignItems: "center",
    justifyContent: "center",
  },
});
