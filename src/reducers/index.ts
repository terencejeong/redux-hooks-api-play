import { combineReducers } from 'redux';
import { cart } from './cart';
import { products } from './products';
import { productsOld } from './productOld';
import { storeHours } from './storeHours';

const reducers = combineReducers({
  cartsModule: cart,
  productsModule: products,
  storeHoursModule: storeHours,
  productsOldModule: productsOld
});

export default reducers;