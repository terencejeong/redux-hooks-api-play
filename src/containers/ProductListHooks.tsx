import React, { useCallback, useState, memo } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { AppStore, Product } from '../types';
import ProductItem from '../components/ProductItem';
import CountView from '../components/CountView';
import { actions } from '../actions/constants';

const ProductListHooks: React.FC = memo(() => {

  const dispatch = useDispatch();

  const products: Product[] = useSelector((state: AppStore) => state.productsModule.products, shallowEqual);

  const partialDispatch = useCallback(
    (payload) => dispatch({ type: actions.ADD_TO_CART, payload}),
    [dispatch]
  );

  const [count, setCount] = useState(0);
  
  return (
    <>
      <h1>Product Container with useSelector Hooks</h1>
      {
        products.map((product: Product) => {
          return (
            <ProductItem product={product} key={product.id} dispatchToStore={partialDispatch} />
          )
        })
      }
      <hr></hr>
      <CountView count={count}/>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  )
});

export default ProductListHooks;