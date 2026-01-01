import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    width: "100%",
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 16,
    color: "#111827",
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginVertical: 12,
  },
  primaryButton: {
    backgroundColor: "#22C55E",
    paddingVertical: 14,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    marginTop: 16,
  },
  primaryText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
  secondaryButton: {
    paddingVertical: 14,
    width: "100%",
    alignItems: "center",
    marginTop: 8,
  },
  secondaryText: {
    color: "#22C55E",
    fontWeight: "600",
    fontSize: 14,
  },
});
