import React from 'react';
import { connect } from 'react-redux';
import { AppStore, CartItem } from '../types';

function getCartPrice(cart: any) {
  return cart.reduce((accum: number, current: CartItem) => {
      return accum + (current.value * current.quantityBought)
    }, 0)
}

// TODO Fix all the types. 
const mapStateToProps = (state: AppStore) => ({
  shoppingCart: state.cartsOldModule.cart,
  shoppingCartTotal: getCartPrice(state.cartsOldModule.cart)
});

const CartContainerOld: React.FC = (props: any) => {
  return (
    <>
      <h1>Tried and true Cart Container with Connect</h1>
      <div>
        {
          props.shoppingCart.map((item: CartItem) => {
            return (
              <div key={item.id}>
                {item.id} {item.quantityBought}
              </div>
            )
          })
        }
        Total Price: ${props.shoppingCartTotal}
      </div>
      <hr></hr>
    </>
  )
}

export default connect(mapStateToProps)(CartContainerOld);