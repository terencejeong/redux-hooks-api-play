import React from 'react';
import { connect } from 'react-redux';

// TODO Fix all the types. 
const mapStateToProps = (state: any) => {
  return ({
    productsModule: state.productsModule
  })
}
const ProductListContainer: React.FC = (props: any) => {
  const { productsModule } = props;
  return (
    <>
      <h1>This is the tried and trusty connect</h1>
      <div>
        {
          productsModule.products.map((product: any) => {
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
