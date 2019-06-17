import { Product } from '../types'

const addToCartSafe: Function = (product: Product) => ({
  type: 'ADD_TO_CART',
  payload: product
});

export const addToCart = (product: Product) => (dispatch: Function, getState: Function) => {
  dispatch(addToCartSafe(product));
};