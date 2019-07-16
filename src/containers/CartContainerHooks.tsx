import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { AppStore, CartItem } from '../types';

type cartSelectorData = {
  shoppingCart: CartItem[],
  shoppingCartTotal: number
}

const getShoppingCart = (state: AppStore): CartItem[] => {
  return state.cartsModule.cart;
}

const makeShoppingCartSelector = createSelector(
  [getShoppingCart],
  (shoppingCart: CartItem[]): cartSelectorData => {
    const shoppingCartTotal = shoppingCart.reduce((accum: number, current: CartItem) => {
      return accum + (current.value * current.quantityBought)
    }, 0)
    return {
      shoppingCart,
      shoppingCartTotal
    }
  }
)

const CartContainerHooks: React.FC = () => {
  // since we are using selectors here, these values are only recalculated when state.cartsModule.cart changes.
  const cartsModule: cartSelectorData = useSelector((state: AppStore) => makeShoppingCartSelector(state));
  return (
    <>
      <h1>Cart Container with useSelector Hooks and Reselect</h1>
      <div>
        {
          cartsModule.shoppingCart.map((item: CartItem) => {
            return (
              <div key={item.id}>
                {item.id} {item.quantityBought}
              </div>
            )
          })
        }
        Total Price: ${cartsModule.shoppingCartTotal}
      </div>
      <hr></hr>
    </>
  )
};

export default CartContainerHooks;