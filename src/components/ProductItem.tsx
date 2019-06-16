import React, { memo, MouseEvent } from 'react';
import { partial } from 'ramda';
import { Product } from '../types';

const ProductItem: Function = memo((
  ({ product, dispatchToStore }: ProductItemProps) => {
    function handleClick(id: string, event: MouseEvent, ) {
      event.preventDefault();
      dispatchToStore(id);
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
            onClick={partial(handleClick, [product.id])}
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