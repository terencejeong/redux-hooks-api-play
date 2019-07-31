import React, { useCallback, useState, memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { AppStore, Product } from '../types';
import { useDispatchToStore } from '../hooks';
import ProductItem from '../components/ProductItem';
import CountView from '../components/CountView';
import { actions } from '../actions/constants';

const ProductListHooks: React.FC = memo(() => {

  const products: Product[] = useSelector((state: AppStore) => state.productsModule.products, shallowEqual);

  const handleDispatch = useDispatchToStore(actions.ADD_TO_CART);

  const dispatchToStore = useCallback(
    handleDispatch,
    [actions.ADD_TO_CART]
  );
 
  const [count, setCount] = useState(0);
  
  return (
    <>
      <h1>Product Container with useSelector Hooks</h1>
      {
        products.map((product: Product) => {
          return (
            <ProductItem product={product} key={product.id} dispatchToStore={dispatchToStore} />
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