import React, { useCallback, useState, useMemo } from 'react';
import { useSelector} from 'react-redux';
import { AppStore, Product, Products } from '../types';
import ProductItem from '../components/ProductItem';
import CountView from '../components/CountView';
import { useDispatchToStore } from '../hooks';
import { actions } from '../actions/constants';

const ProductListHooks: React.FC = () => {
  const productsModule: Product[] = useSelector((state: AppStore) => state.productsModule.products);
  const handleDispatch = useDispatchToStore(actions.ADD_TO_CART);
  const partialDispatch = useCallback(
    handleDispatch,
    [handleDispatch]
  );
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Product Container with useSelector Hooks</h1>
      {productsModule &&
        productsModule.map((product: Product) => {
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
};

export default ProductListHooks;


// const productList = useMemo(() => productsModule.products.map((product: Product) => 
// <ProductItem product={product} key={product.id} dispatchToStore={partialDispatch} />), 
// [productsModule.products]);