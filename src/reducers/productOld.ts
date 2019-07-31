// need to import the actions
import { Products, Product } from '../types';
import { actions } from '../actions/constants';

const initialState: Products = {
  products: [
    {
      id: '3a',
      title: 'MacBook Old',
      value: 2000,
      quantity: 3
    },
    {
      id: '4b',
      title: 'iPad Old',
      value: 1200,
      quantity: 6
    },
    {
      id: '5c',
      title: 'iPod Classic Old',
      value: 400,
      quantity: 1
    },
  ],
  loading: false,
  error: false
};

const getProduct = (state: Products, selectedProduct: Product): Product[] =>
  state.products.map((product: Product) =>
    (product.id === selectedProduct.id ? { ...product, quantity: product.quantity - 1 } : product));

export const productsOld = (state = initialState, action: any) => {

  switch (action.type) {
    case actions.SET_PRODUCTS_OLD:
      return {
        ...state,
      }
      
    case actions.ADD_TO_CART_OLD:
      return {
        ...state,
        products: getProduct(state, action.payload)
      }
    default:
      return {
        ...state
      }
  }
}
