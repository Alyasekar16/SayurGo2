import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 14,
    padding: 10,
    marginBottom: 14,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },

  heartIcon: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: '#FFF',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    zIndex: 10,

    // shadow iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,

  },

  image: {
    width: '100%',
    height: 90,
    marginBottom: 6,
  },

  name: {
    fontSize: 13,
    fontWeight: '600',
    color: '#222',
  },

  weight: {
    fontSize: 11,
    color: '#888',
    marginBottom: 6,
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },

  price: {
    fontSize: 10,
    fontWeight: '700',
    color: '#2E7D32',
    marginTop: -20,
  },

  cartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',

    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 8,
    marginLeft: 20,
    gap: 3,

    marginTop: 15,

    // shadow iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,

    // shadow Android
    elevation: 4,
  },

  cartIcon: {
    width: 10,
    height: 10,
    tintColor: '#FFA726',
  },

  cartButtonText: {
    color: '#FFA726',
    fontSize: 10,
    fontWeight: '200',
  },


});
