import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { AppStore, Product } from '../types';
import ProductItem from '../components/ProductItem';
import { useDispatchToStore } from '../hooks';

const ProductListHooks: React.FC = () => {
  const productsModule = useSelector((state: AppStore) => state.productsModule);
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
      <hr></hr>
    </>
  )
};

export default ProductListHooks;
