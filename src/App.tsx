import React from 'react';
import './App.scss';
import ProductListHooks from './containers/ProductListHooks';
import CartContainerHooks from './containers/CartContainerHooks';
import ProductListContainer from './containers/ProductListContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <ProductListHooks />
      <CartContainerHooks />
      <ProductListContainer />
    </div>
  );
}

export default App;
