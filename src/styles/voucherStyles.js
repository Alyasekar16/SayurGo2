import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  /* CONTAINER */
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  /* HEADER */
  topHeader: {
    backgroundColor: "#2E7D32",
    paddingHorizontal: 25,
    paddingVertical: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 24,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  topTitle: {
    fontSize: 16,
    marginTop: 4,
    fontWeight: "700",
    color: "#FFF",
  },

  /* INPUT KODE VOUCHER */
  codeBox: {
    flexDirection: "row",
    alignItems: "center",
    margin: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: "#F9F9F9",
  },

  codeInput: {
    flex: 1,
    fontSize: 14,
    color: "#333",
    paddingVertical: 15,
  },

  codeBtn: {
    backgroundColor: "#FFA500",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },

  codeBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
  },

  /* SECTION TITLE */
  sectionTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginVertical: 8,
    color: "#333",
  },

  /* CARD */
  card: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
    elevation: 2,
  },

  activeCard: {
    borderColor: "#4CAF50",
    backgroundColor: "#F1F8E9",
  },

  activeCardBlue: {
    borderColor: "#2196F3",
    backgroundColor: "#E3F2FD",
  },

  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#E8F5E9",
    alignItems: "center",
    justifyContent: "center",
  },

  ongkirIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },

  title: {
    fontSize: 14,
    fontWeight: "700",
    color: "#333",
  },

  desc: {
    fontSize: 13,
    marginTop: 2,
    color: "#555",
  },

  min: {
    fontSize: 11,
    color: "#777",
    marginTop: 2,
  },

  /* FOOTER */
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
  },

  doneBtn: {
    backgroundColor: "#FFA500",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  doneText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default styles;
