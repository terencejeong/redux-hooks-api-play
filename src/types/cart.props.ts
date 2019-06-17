import { Product } from './index';
export interface Cart {
  cart: Array<CartItem>,
  isLoading: boolean,
  error: boolean
};

export interface CartItem {
  id: string,
  quantityBought: number,
  value: number,
  title: string,
}
