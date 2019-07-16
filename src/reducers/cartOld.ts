import { Action, Reducer } from 'redux';
import { Cart, CartItem, Product } from '../types';
import { actions } from '../actions/constants';

const initialState: Cart = {
  cart: [],
  isLoading: false,
  error: false
};

const addItemToCart: Function = (cart: CartItem[], product: Product): CartItem[] => {

  const { quantity, ...item } = product;

  let foundItem = cart.find((item: CartItem) => item.id === product.id);

  if (foundItem) return cart.map((item: CartItem) => item.id === product.id ? { ...item, quantityBought: item.quantityBought + 1 } : item)

  return [
    ...cart,
    { ...item, quantityBought: 1 }
  ]
}

export const cartOld: Reducer<Cart, Action> = (state = initialState, action: any) => {
  
  switch (action.type) {
    case actions.ADD_TO_CART_OLD:
      return {
        ...state,
        cart: addItemToCart(state.cart, action.payload)
      }
    default:
      return initialState
  }
}