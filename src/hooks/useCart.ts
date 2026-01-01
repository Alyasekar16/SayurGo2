import { useState } from "react";
import { CartItem } from ".././types";

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Omit<CartItem, "quantity">) => {
    setItems(prev => {
      const exist = prev.find(i => i.id === product.id);
      if (exist) {
        return prev.map(i =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increase = (id: string) => {
    setItems(prev =>
      prev.map(i =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const decrease = (id: string) => {
    setItems(prev =>
      prev
        .map(i =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter(i => i.quantity > 0)
    );
  };

  const total = items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return {
    items,
    addToCart,
    increase,
    decrease,
    total,
  };
}
