import React, { memo, MouseEvent } from 'react';
import { partial } from 'ramda';
import { Product } from '../types';

const ProductItem: Function = memo((({ product, dispatchToStore }: ProductItemProps) => {
  function handleClick(product: Product, event: MouseEvent, ) {
    event.preventDefault();
    dispatchToStore(product);
  }
  return (
    <div className="productItem">
      <div className="productItem__title">
        {product.title}
      </div>
      <div className="productItem__price">
        ${product.value}
      </div>
      <div className="productItem__quantity">
        x {product.quantity}
      </div>
      <div className="productItem__purchase">
        <button
          onClick={partial(handleClick, [product])}
          disabled={product.quantity === 0}
        >
          Buy One
        </button>
      </div>
    </div>
  )
}
))

type ProductItemProps = {
  product: Product,
  dispatchToStore: Function
}

export default ProductItem;