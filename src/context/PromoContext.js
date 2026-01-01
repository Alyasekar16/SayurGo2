import { createContext, useState } from "react";

export const PromoContext = createContext();

export function PromoProvider({ children }) {
  const [selectedVoucher, setSelectedVoucher] = useState(null);
  const [selectedOngkir, setSelectedOngkir] = useState(null);
  const [useCoin, setUseCoin] = useState(false);
  // Dummy coin balance for now — replace with API call to load real balance
  const [coinBalance, setCoinBalance] = useState(120);

  const addCoins = (amount) => setCoinBalance((c) => c + amount);
  const deductCoins = (amount) => setCoinBalance((c) => Math.max(0, c - amount));

  // Example stub to fetch coin balance from backend
  const fetchCoinBalance = async () => {
    // replace with real fetch; keep as stub so callers can await
    // const res = await fetch('/api/coins');
    // const json = await res.json();
    // setCoinBalance(json.balance);
    return coinBalance;
  };

  return (
    <PromoContext.Provider
      value={{
        selectedVoucher,
        setSelectedVoucher,
        selectedOngkir,
        setSelectedOngkir,
        useCoin,
        setUseCoin,
        coinBalance,
        addCoins,
        deductCoins,
        fetchCoinBalance,
      }}
    >
      {children}
    </PromoContext.Provider>
  );
}
