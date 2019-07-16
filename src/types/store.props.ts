import { Cart } from './cart.props';
import { Products } from './products.props';
import { StoreHours } from './storeHours.props'

export interface AppStore {
  cartsModule: Cart,
  productsModule: Products,
  storeHoursModule: StoreHours,
  productsOldModule: Products,
};