// need to import the actions
import { Products, Product } from '../types';

const initialState: Products = {
  products: [
    {
      id: '1a',
      title: 'MacBook Pro',
      value: 2000,
      quantity: 3
    },
    {
      id: '2b',
      title: 'iPad',
      value: 1200,
      quantity: 6
    },
    {
      id: '3c',
      title: 'iPod Classic',
      value: 400,
      quantity: 1
    },
  ],
  loading: false,
  error: false
};

const getProduct = (state: Products, productId: string) => {
  return state.products.map((product: Product) => {
    if (product.id === productId) {
      return {
        ...product,
        quantity: product.quantity - 1
      }
    }
    return product
  })
}

export const products = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
      }
    case "ADD_TO_CART":
      return {
        ...state,
        products: getProduct(state, action.payload)
      }
    default:
      return initialState
  }
}
