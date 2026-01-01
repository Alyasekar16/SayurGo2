import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: { flex: 1, backgroundColor: "#F3F4F6" },
  
    header: {
      backgroundColor: "#2E7D32",
      flexDirection: "row",
      alignItems: "center",
      padding: 16,
    },
    headerTitle: {
      color: "#fff",
      fontWeight: "700",
      fontSize: 18,
      marginLeft: 12,
    },
  
    //card pengiriman
  
    icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  
    content: { padding: 14, paddingBottom: 120 },
  
    infoBox: {
      backgroundColor: "#fff",
      borderRadius: 12,
      padding: 14,
      marginBottom: 14,
    },
  
    label: { fontSize: 11, color: "#6B7280" },
    value: { fontSize: 13, fontWeight: "700", marginBottom: 8 },
  
    divider: {
      height: 1,
      backgroundColor: "#E5E7EB",
      marginVertical: 10,
    },
  
    card: {
      backgroundColor: "#fff",
      borderRadius: 12,
      padding: 14,
    },
  
    section: { fontWeight: "700", marginBottom: 12 },
  
    timelineRow: {
      flexDirection: "row",
      marginBottom: 18,
    },
  
    lineContainer: {
      alignItems: "center",
      width: 24,
    },
  
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: "#FCD34D",
    },
  
    dotActive: {
      backgroundColor: "#F59E0B",
    },
  
    line: {
      width: 2,
      flex: 1,
      backgroundColor: "#E5E7EB",
      marginTop: 4,
    },
  
    timelineContent: {
      marginLeft: 12,
      flex: 1,
    },
  
    timelineTitle: {
      fontSize: 13,
      fontWeight: "600",
    },
  
    activeText: {
      color: "#F59E0B",
      fontWeight: "700",
    },
  
    timelineTime: {
      fontSize: 11,
      color: "#6B7280",
      marginTop: 2,
    },
  
    bottomBar: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      padding: 14,
      backgroundColor: "#fff",
      borderTopWidth: 1,
      borderColor: "#E5E7EB",
      alignItems: "center",
    },
  
    primaryButton: {
      backgroundColor: "#F8DEB7",
      width: 280,
      padding: 14,
      borderRadius: 12,
      alignItems: "center",
    },
  
    primaryText: {
      color: "#fff",
      fontWeight: "700",
    },
  });
  