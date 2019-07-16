import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore, StoreHours } from '../types';
import { actions } from '../actions/constants';
import ProductListHooks from './ProductListHooks';
import CartContainerHooks from './CartContainerHooks';
import ProductListContainer from './ProductListContainer';

const ParentContainer: React.FC = () => {
  const storeHoursModule: StoreHours = useSelector((state: AppStore) => state.storeHoursModule);
  const handleStoreHours = useDispatch();
  return (
    <>
      <div>
        <h1>{storeHoursModule.open ? 'OPEN' : 'CLOSE'}</h1>
        <button
          onClick={() => handleStoreHours({type: actions.STORE_OPERATING})}
        >
        {storeHoursModule.open ? 'close store' : 'open store'}
        </button>
      </div>
      <ProductListHooks />
      <CartContainerHooks />
      <ProductListContainer />
    </>
  )
};

export default ParentContainer;