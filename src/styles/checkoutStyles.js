import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#2E7D32',
    elevation: 2,
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },

  content: {
    flex: 1,
    paddingTop: 12,
    paddingHorizontal: 12,
  },

  section: {
    marginBottom: 16,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },

  addressBox: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 8,
    elevation: 1,
  },

  addressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },

  addressName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },

  addressText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 28,
    lineHeight: 18,
  },

  orderItem: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },

  orderItemInfo: {
    flex: 1,
  },

  itemName: {
    fontSize: 13,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },

  itemDetails: {
    fontSize: 12,
    color: '#999',
  },

  itemPrice: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
  },

  orderItemImage: {
    width: 56,
    height: 56,
    borderRadius: 8,
    marginRight: 12,
    resizeMode: 'cover',
    backgroundColor: '#f5f5f5',
  },

  orderItemImagePlaceholder: {
    width: 56,
    height: 56,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#f0f0f0',
  },

  summaryBox: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 8,
    elevation: 1,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },

  summaryBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 8,
  },

  summaryLabel: {
    fontSize: 13,
    color: '#666',
  },

  summaryLabelBold: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
  },

  summaryValue: {
    fontSize: 13,
    color: '#999',
  },

  summaryValueBold: {
    fontSize: 14,
    fontWeight: '700',
    color: '#E91E63',
  },

  stickyButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    elevation: 6,
  },

  pesanBtn: {
    backgroundColor: '#FFA500',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  pesanText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default styles;