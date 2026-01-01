export const vouchers = [
  // 🔖 VOUCHER DISKON NOMINAL
  {
    id: "Diskon 10RB",
    code: "DISKON10",
    type: "nominal",
    value: 10000,
    minBelanja: 30000,
    expired: false,
  },

  // 🔖 VOUCHER DISKON PERSEN
  {
    id: "Diskon 20%",
    code: "DISKON20",
    type: "percent",
    value: 20,
    minBelanja: 50000,
    expired: false,
  },

  // 🚚 VOUCHER GRATIS ONGKIR
  {
    id: "Gratis Ongkir",
    code: "ONGKIR35",
    type: "ongkir",
    value: 0,
    minBelanja: 35000, // ✅ sesuai request
    expired: false,
  },
];
export const ongkirList = [
  {
    id: "REG",
    name: "Reguler",
    harga: 5000,
  },
  {
    id: "EXP",
    name: "Express",
    harga: 10000,
  },
];
