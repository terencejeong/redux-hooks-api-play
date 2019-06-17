import React from 'react';
import { connect } from 'react-redux';
import { AppStore, Product, Products } from '../types';

// TODO Fix all the types. 
const mapStateToProps = (state: AppStore) => {
  return ({
    products: state.productsModule.products
  })
}
const ProductListContainer: React.FC = (props: any) => {
  const { products } = props;
  return (
    <>
      <h1>This is the tried and trusty connect</h1>
      <div>
        {
          products.map((product: Product) => {
            return (
              <div key={product.id}>
                {product.title}
              </div>
            )
          })
        }
      </div>
      <hr></hr>
    </>
  )
};

export default connect(mapStateToProps, null)(ProductListContainer);
