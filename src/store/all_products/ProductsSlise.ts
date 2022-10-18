import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { Sneakers } from '../../components/product-list/types';

type InitialState = {
  data: undefined | Sneakers;
  isLoading: boolean;
  isError: boolean;
  gender: 'men' | 'women' | '';
};

const initialState = {
  data: undefined,
  isLoading: false,
  isError: false,
  gender: '',
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
    changeGender: (state, action) => {
      state.gender = action.payload;
    },
  },
});

export const { requestStart, requestComplete, requestError, changeGender } =
  productsSlice.actions;

export default productsSlice.reducer;
export const selectProducts = (state: RootState) => state.all_product.data;
export const getGender = (state: RootState) => state.all_product.gender;
