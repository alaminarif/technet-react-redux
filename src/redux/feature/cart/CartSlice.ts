/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IProduct } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
interface ICart {
  products: IProduct[];
  total: number;
}
const initialState: ICart = {
  products: [],
  total: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const exsiting = state.products.find((product) => {
        return product._id === action.payload._id;
      });
      if (exsiting) {
        exsiting.quantity = exsiting.quantity! + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
    },
    removeOne: (state, action: PayloadAction<IProduct>) => {
      const exsiting = state.products.find((product) => {
        return product._id === action.payload._id;
      });
      if (exsiting && exsiting.quantity! > 1) {
        exsiting.quantity = exsiting.quantity! - 1;
      } else {
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        );
      }
      state.total -= action.payload.price;
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );

      state.total -= action.payload.price * action.payload.quantity!;
    },
  },
});
export const { addToCart, removeFromCart, removeOne } = cartSlice.actions;

export default cartSlice.reducer;
