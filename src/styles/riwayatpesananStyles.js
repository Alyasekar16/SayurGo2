import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },

    header: {
        backgroundColor: '#2E7D32',
        paddingTop: 18,
        paddingBottom: 12,
        paddingHorizontal: 12,
    },

    headerInner: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },

    backButton: {
        position: 'absolute',
        left: 10,
        top: 8,
        padding: 8,
    },

    headerTitle: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
    },



tanggal: {
    fontSize: 11,
    color: '#6B7280',
    marginBottom: 6,
},

row: {
    flexDirection: 'row',
    alignItems: 'center',
},

image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    resizeMode: 'cover',
},

status: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 18,
    marginBottom: 10,
},

statusText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '700',
},

namaProduk: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
},

jumlah: {
    fontSize: 12,
    color: '#6B7280',
},


cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
},

cardLogo: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
},

kirimText: {
    fontSize: 11,
    color: '#6B7280',
},

contactText: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
    marginBottom: 4,
},

imageBox: {
    width: 72,
    height: 72,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    marginRight: 12,
},

deskripsi: {
    fontSize: 10,
    color: '#6B7280',
    marginTop: 2,
    marginBottom: 4,
},

button: {
    alignSelf: 'center',
    marginTop: 0,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    minWidth: 72,
    justifyContent: 'center',
    elevation: 2,
},

buttonPrimary: {
    backgroundColor: '#FFB300',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
},

buttonSecondary: {
    backgroundColor: '#F59E0B',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
},

successBanner: {
    backgroundColor: '#22C55E',
    padding: 10,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
},

successText: {
    color: '#fff',
    fontWeight: '600',
},

emptyContainer: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 220,
},

emptyText: {
    color: '#374151',
    fontSize: 16,
},

buttonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
},

card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: '#F3F4F6',
},
});
