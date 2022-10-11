import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import all_product from './all_products';
import products_item from './products_item'

const store = configureStore({
  reducer: {
    all_product,
    products_item
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
