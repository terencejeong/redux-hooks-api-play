import { Dispatch } from 'redux';
import { Product } from '../types'
import { actions } from './constants';

const addToCartSafe: Function = (product: Product) => ({
  type: actions.ADD_TO_CART,
  payload: product
});

export const addToCart = (product: Product) => (dispatch: Dispatch, getState: Function) => {
  dispatch(addToCartSafe(product));
};