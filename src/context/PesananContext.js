import { createContext, useState } from 'react';

export const PesananContext = createContext();

export function PesananProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [lastAdded, setLastAdded] = useState(null);

  const tambahPesanan = (pesananBaru) => {
    setOrders((prev) => [pesananBaru, ...prev]);
    setLastAdded(pesananBaru);
  };

  const clearLastAdded = () => setLastAdded(null);

  return (
    <PesananContext.Provider value={{ orders, tambahPesanan, lastAdded, clearLastAdded }}>
      {children}
    </PesananContext.Provider>
  );
} 
