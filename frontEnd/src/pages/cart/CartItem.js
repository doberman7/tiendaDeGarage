import React, { useContext } from 'react';
//// TODO: sustituir className

import {
  PlusCircleTwoTone,
  MinusCircleTwoTone,
  DeleteTwoTone,
} from '@ant-design/icons';
import { CartContext } from '../../hooks/CartContext';

import { formatNumber } from '../../helpers/utils';

const CartItem = ({ product }) => {
  const { increase, decrease, removeProduct } = useContext(CartContext);

  return (
    <>
      <div style={{ textAlign: 'left' }}>
        <div>
          <img
            alt={product.name}
            style={{ margin: '0 auto', maxHeight: '50px' }}
            src={product.image}
          />
        </div>
        <div>
          <h5>{product.name}</h5>
          <p>Price: {formatNumber(product.price)} </p>
        </div>
        <div>
          <p>Qty: {product.quantity}</p>
        </div>
        <div>
          <button onClick={() => increase(product)}>
            <PlusCircleTwoTone width={'20px'} />
          </button>

          {product.quantity > 1 && (
            <button
              onClick={() => decrease(product)}
              className="btn btn-danger btn-sm "
            >
              <MinusCircleTwoTone width={'20px'} />
            </button>
          )}

          {product.quantity === 1 && (
            <button
              onClick={() => removeProduct(product)}
              className="btn btn-danger btn-sm "
            >
              <DeleteTwoTone width={'20px'} />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CartItem;
