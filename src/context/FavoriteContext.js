import { createContext, useState } from "react";

export const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const isFavorite = (id) => {
    return favorites.some((item) => item.id === id);
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
