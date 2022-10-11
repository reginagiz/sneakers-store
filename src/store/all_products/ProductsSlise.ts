import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { Sneakers } from '../../components/product-list/types';

type InitialState = {
  data: undefined | Sneakers;
  isLoading: boolean;
  isError: boolean;
};

const initialState = {
  data: undefined,
  isLoading: false,
  isError: false,
};

export const productsSlice = createSlice({
  name: 'products',
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
  productsSlice.actions;

export default productsSlice.reducer;
export const selectProducts = (state: RootState) => state.all_product.data;
