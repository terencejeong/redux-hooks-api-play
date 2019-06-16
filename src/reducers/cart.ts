import { Action, Reducer } from 'redux';
import { Cart } from '../types';

const initialState: Cart = {
  cart: [],
  isLoading: false,
  error: false
};

export const cart: Reducer<Cart, Action> = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [
          ...state.cart,
          action.payload
        ]
      }
    default:
      return initialState
  }
}