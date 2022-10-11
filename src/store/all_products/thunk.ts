import { requestStart, requestComplete, requestError } from './ProductsSlise';
import product from '../../product.json';
import { Action } from 'redux';
import { Dispatch } from 'redux';
import type {} from 'redux-thunk/extend-redux';

export const requestProducts = () => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch(requestStart());
      const data = JSON.parse(JSON.stringify(product));
   
      dispatch(requestComplete(data));
    } catch {
      dispatch(requestError());
    }
  };
