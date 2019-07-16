import { Cart } from './cart.types';
import { Products } from './products.types';
import { StoreHours } from './storeHours.types'

export interface AppStore {
  cartsModule: Cart,
  cartsOldModule: Cart,
  productsModule: Products,
  storeHoursModule: StoreHours,
  productsOldModule: Products,
};