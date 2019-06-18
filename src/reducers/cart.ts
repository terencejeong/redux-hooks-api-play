import { Action, Reducer } from 'redux';
import { Cart, CartItem, Product } from '../types';
const initialState: Cart = {
  cart: [],
  isLoading: false,
  error: false
};

const addItemToCart: Function = (cart: Array<CartItem>, product: Product): Array<CartItem> => {
  const { quantity, ...item } = product;
  let foundItem = cart.find((item: CartItem) => item.id === product.id);
  if (foundItem) return cart.map((item: CartItem) => item.id === product.id ? { ...item, quantityBought: item.quantityBought + 1 } : item)
  return [
    ...cart,
    { ...item, quantityBought: 1 }
  ]
}

export const cart: Reducer<Cart, Action> = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: addItemToCart(state.cart, action.payload)
      }
    default:
      return initialState
  }
}