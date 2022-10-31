import {
  requestStart,
  requestComplete,
  requestError,
} from './ProductsItemSlise';
import product from '../../product.json';
import { Action } from 'redux';
import { Dispatch } from 'redux';
import type {} from 'redux-thunk/extend-redux';
import { Sneaker, Sneakers } from '../../components/product-list/types';

export const requestProducts =
  (id: any) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch(requestStart());
      const data: Sneakers = JSON.parse(JSON.stringify(product));
      const a = data.sneakers.filter((obj) => (obj.id == id ?  obj : undefined));
      dispatch(requestComplete(a[0]));
    } catch {
      dispatch(requestError());
    }
  };
