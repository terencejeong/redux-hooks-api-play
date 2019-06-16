import React from 'react';
import './App.scss';
import ProductListHooks from './containers/ProductListHooks';
import ProductListContainer from './containers/ProductListContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <ProductListHooks />
      <ProductListContainer />
    </div>
  );
}

export default App;
