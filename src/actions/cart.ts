const addToCartSafe: Function = (productId: string) => ({
  type: 'ADD_TO_CART',
  payload: productId
});

export const addToCart = (productId: string) => (dispatch: Function, getState: Function) => {
  dispatch(addToCartSafe(productId));
};