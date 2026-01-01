const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: colors.primary,
  },
  backBtn: {
    marginRight: 10,
    padding: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  listContent: {
    paddingTop: 10,
    paddingBottom: 120, 
  },
});
