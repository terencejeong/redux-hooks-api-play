import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { AppStore, CartItem } from '../types';

const getShoppingCart = (state: AppStore): Array<CartItem> => state.cartsModule.cart;

const makeShoppingCartSelector = createSelector(
  [getShoppingCart],
  (shoppingCart: Array<CartItem>) => {
    return shoppingCart
  }
)

const makeShoppigCartTotalPriceSelector = createSelector(
  [getShoppingCart],
  (shoppingCart: Array<CartItem>) => {
    return shoppingCart.reduce((accum: number, current: CartItem) => {
      return accum + (current.value * current.quantityBought)
    }, 0)
  }
)

const CartContainerHooks: React.FC = () => {
  // since we are using selectors here, these values are only recalculated when state.cartsModule.cart changes.
  const cartsModule = useSelector((state: AppStore) => makeShoppingCartSelector(state));
  const totalCartPrice = useSelector((state: AppStore) => makeShoppigCartTotalPriceSelector(state));
  return (
    <>
      <h1>Cart Container with useSelector Hooks and Reselect</h1>
      <div>
        {
          cartsModule.map((item: CartItem) => {
            return (
              <div key={item.id}>
                {item.id} {item.quantityBought}
              </div>
            )
          })
        }
        Total Price: ${totalCartPrice}
      </div>
      <hr></hr>
    </>
  )
};

export default CartContainerHooks;