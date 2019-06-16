import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { partial } from 'ramda';
import { AppStore, Product } from '../types';
import ProductItem from '../components/ProductItem';
import { useDispatchToStore } from '../hooks';

const ProductListHooks: React.FC = () => {
  const productsModule = useSelector((state: AppStore) => state.productsModule);
  const [count, setCount] = useState(1);
  const handleDispatch = useDispatchToStore('ADD_TO_CART')
  const partialDispatch = useCallback(
    handleDispatch,
    [handleDispatch]
  );
  return (
    <>
      <h1>Product Container with useSelector Hooks</h1>
      {productsModule.products &&
        productsModule.products.map((product: Product) => {
          return (
            <ProductItem product={product} key={product.id} dispatchToStore={partialDispatch} />
          )
        })
      }
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Add count</button>
      <hr></hr>
    </>
  )
};

export default ProductListHooks;
