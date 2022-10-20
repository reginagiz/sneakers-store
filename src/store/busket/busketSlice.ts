import { createSlice } from '@reduxjs/toolkit';
import { Sneaker, Sneakers } from '../../components/product-list/types';

type InitialState = {
  cart: undefined | Sneakers;
  quantity: undefined | number;
};

const initialState = {
  cart: undefined,
  quantity: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState as InitialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart?.find(
        (item: Sneaker) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart?.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart?.find(
        (item: Sneaker) => item.id === action.payload
      );
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart?.find(
        (item: Sneaker) => item.id === action.payload
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart?.filter(
        (item: Sneaker) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;

