import { combineReducers } from 'redux';
import { cart } from './cart';
import { products } from './products';

const reducers = combineReducers({
  cartsModule: cart,
  productsModule: products
});

export default reducers;