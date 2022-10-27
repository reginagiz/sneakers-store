import { createSlice } from '@reduxjs/toolkit';
import { Sneaker } from '../../components/product-list/types';
import { RootState } from '..';

type InitialState = {
  cart: undefined | Array<ItemInCart>;
};

export type ItemInCart = {
  item: Sneaker;
  quantity: number;
};

const initialState: InitialState = {
  cart: undefined,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState as InitialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart?.find(
        (cartItem) => cartItem.item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart = state.cart
          ? [...state.cart, { item: action.payload, quantity: 1 }]
          : [{ item: action.payload, quantity: 1 }];
      }
    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.cart?.find(
        (cartItem) => cartItem.item.id === action.payload
      );
      if (itemInCart) {
        itemInCart.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.cart?.find(
        (cartItem) => cartItem.item.id === action.payload
      );
      if (itemInCart?.quantity === 1) {
        itemInCart.quantity = 1;
      } else if (itemInCart) {
        itemInCart.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart?.filter(
        (item) => item.item.id !== action.payload
      );
      state.cart = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
export const getProducts = (state: RootState) => state.cart.cart;
