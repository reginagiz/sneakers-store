import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { Sneaker } from '../../components/product-list/types';

type InitialState = {
  data: undefined | Sneaker;
  isLoading: boolean;
  isError: boolean;
};

const initialState = {
  data: undefined,
  isLoading: false,
  isError: false,
};

export const productsItemSlice = createSlice({
  name: 'products_item',
  initialState: initialState as InitialState,
  reducers: {
    requestStart: (state) => {
      state.isLoading = true;
    },
    requestComplete: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    requestError: (state) => {
      state.isError = true;
    },
  },
});

export const { requestStart, requestComplete, requestError } =
productsItemSlice.actions;

export default productsItemSlice.reducer;
export const selectProductsItem = (state: RootState) => state.products_item.data;
