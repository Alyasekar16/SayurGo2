import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
  id: string;
  name: string;
  price: number | string;
  qty: number;
  image?: any;
};

type CartState = {
  list: CartItem[];
};

const initialState: CartState = { list: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const idx = state.list.findIndex(i => i.id === action.payload.id);
      if (idx >= 0) {
        state.list[idx].qty += action.payload.qty;
      } else {
        state.list.push(action.payload);
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.list = state.list.filter(i => i.id !== action.payload);
    },
    clearAllCart(state) {
      state.list = [];
    },
    increaseQty(state, action: PayloadAction<string>) {
      const it = state.list.find(i => i.id === action.payload);
      if (it) it.qty += 1;
    },
    decreaseQty(state, action: PayloadAction<string>) {
      const it = state.list.find(i => i.id === action.payload);
      if (it && it.qty > 1) it.qty -= 1;
    },
  },
});

export const { addToCart, removeFromCart, clearAllCart, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;
 