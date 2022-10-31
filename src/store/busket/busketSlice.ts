import { createSlice } from '@reduxjs/toolkit';
import { Sneaker } from '../../components/product-list/types';
import { RootState } from '..';

type InitialState = {
  cart: undefined | Array<ItemInCart>;
};

export type ItemInCart = {
  item: Sneaker;
  quantity: number;
  productSize: number;
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
        (cartItem) =>
          cartItem.item.id === action.payload.sneaker.id &&
          cartItem.productSize === action.payload.productSize
      );

      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart = state.cart
          ? [
              ...state.cart,
              {
                item: action.payload.sneaker,
                quantity: 1,
                productSize: action.payload.productSize,
              },
            ]
          : [
              {
                item: action.payload.sneaker,
                quantity: 1,
                productSize: action.payload.productSize,
              },
            ];
      }
    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.cart?.find(
        (cartItem) => cartItem.item.id === action.payload.id &&
        cartItem.productSize === action.payload.productSize
      );
      if (itemInCart) {
        itemInCart.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.cart?.find(
        (cartItem) => cartItem.item.id === action.payload.id &&
        cartItem.productSize === action.payload.productSize
      );
       console.log(action.payload)
      if (itemInCart?.quantity === 1) {
        itemInCart.quantity = 1;
      } else if (itemInCart) {
        itemInCart.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart?.filter(
        (cartItem) => cartItem.item.id !== action.payload&&
        cartItem.productSize !== action.payload.productSize
      );
      state.cart = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
export const getProducts = (state: RootState) => state.cart.cart;
