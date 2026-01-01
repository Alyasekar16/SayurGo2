import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  header: {
    backgroundColor: '#2E7D32',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
  },

  headerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 12,
  },

  card: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    alignItems: 'center',
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  subtitle: {
    fontSize: 12,
    color: '#6B7280',
    marginVertical: 6,
  },

  starRow: {
    flexDirection: 'row',
    marginVertical: 10,
  },

  hint: {
    fontSize: 11,
    color: '#6B7280',
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginHorizontal: 16,
    marginTop: 10,
  },

  sectionDesc: {
    fontSize: 12,
    color: '#6B7280',
    marginHorizontal: 16,
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    padding: 12,
    borderRadius: 8,
    height: 80,
    textAlignVertical: 'top',
  },

  minChar: {
    fontSize: 11,
    color: '#F97316',
    marginHorizontal: 16,
    marginTop: 4,
  },

  button: {
    backgroundColor: '#FFA726',
    margin: 16,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
  },

  infoLabel: {
    fontSize: 11,
    color: '#6B7280',
  },

  infoValue: {
    fontSize: 13,
    fontWeight: '600',
  },

  result: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 6,
  },

  ulasanText: {
    fontSize: 13,
    color: '#374151',
    marginHorizontal: 16,
    marginTop: 6,
    lineHeight: 18,
  },
});
