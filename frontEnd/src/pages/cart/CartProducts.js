import React, { useContext } from 'react';
import { CartContext } from '../../hooks/CartContext';

import CartItem from './CartItem';
// import styles from './CartProducts.module.scss';

const CartProducts = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems.map((product) => console.log(product)));
  return (
    <div>
      <div className="card card-body border-0">
        {/* <p>CartProducts</p> */}
        {cartItems.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CartProducts;
