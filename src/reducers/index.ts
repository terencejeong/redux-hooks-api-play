import { combineReducers } from 'redux';
import { cart } from './cart';
import { products } from './products';
import { storeHours } from './storeHours';

const reducers = combineReducers({
  cartsModule: cart,
  productsModule: products,
  storeHoursModule: storeHours
});

export default reducers;