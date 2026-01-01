import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  header: {
    backgroundColor: '#2E7D32',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },

  headerTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 16,
  },

  avatarWrapper: {
    alignItems: 'center',
    marginTop: -30,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#EEE',
  },

  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: '38%',
    backgroundColor: '#FFA000',
    padding: 4,
    borderRadius: 12,
  },

  card: {
    backgroundColor: '#FFF',
    margin: 16,
    borderRadius: 12,
    padding: 16,
    elevation: 3,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  cardTitle: {
    fontWeight: '600',
    fontSize: 14,
  },

  editText: {
    color: '#2E7D32',
    fontSize: 13,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderColor: '#EEE',
  },

  label: {
    color: '#777',
    fontSize: 13,
  },

  value: {
    color: '#333',
    fontSize: 13,
    maxWidth: '60%',
    textAlign: 'right',
  },
});
