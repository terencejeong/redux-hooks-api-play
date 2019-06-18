import React, { useCallback } from 'react';
import { Dispatch } from 'redux';
import { useSelector } from 'react-redux';
import { AppStore, Product, Products } from '../types';
import ProductItem from '../components/ProductItem';
import { useDispatchToStore } from '../hooks';
import { actions } from '../actions/constants';

const ProductListHooks: React.FC = () => {
  const productsModule: Products = useSelector((state: AppStore) => state.productsModule);
  const handleDispatch = useDispatchToStore(actions.ADD_TO_CART);
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
