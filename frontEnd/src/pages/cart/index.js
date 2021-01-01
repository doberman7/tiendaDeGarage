import React, { useContext } from 'react';
import { Button, Divider } from 'antd';
import CartProducts from './CartProducts';
import { CartContext } from '../../hooks/CartContext';
import { formatNumber } from '../../helpers/utils';
import { Link } from 'react-router-dom';
// TODO: identificar
const Cart = () => {
  const {
    total,
    cartItems,
    itemCount,
    clearCart,
    checkout,
    handleCheckout,
  } = useContext(CartContext);
  // TODO: sustiituir className
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <div className="text-center mt-5">
          <h1>Cart</h1>
          <p>This is the Cart Page.</p>
        </div>

        <div className="row no-gutters justify-content-center">
          <div className="col-sm-9 p-3">
            {cartItems.length > 0 ? (
              <CartProducts />
            ) : (
              <div className="p-3 text-center text-muted">
                Your cart is empty
              </div>
            )}

            {checkout && (
              <div className="p-3 text-center text-success">
                <p>Checkout successfull</p>
                <Link
                  to="/ProductsAll"
                  className="btn btn-outline-success btn-sm"
                >
                  BUY MORE
                </Link>
              </div>
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="col-sm-3 p-3">
              <div className="card card-body">
                <p className="mb-1">Total Items</p>
                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                <p className="mb-1">Total Payment</p>
                <h3 className="m-0 txt-right">{formatNumber(total)}</h3>
                <Divider />
                <div className="text-center">
                  <Button
                    type="button"
                    className="btn btn-primary mb-2"
                    onClick={handleCheckout}
                  >
                    CHECKOUT
                  </Button>
                  <div>
                    <br />
                  </div>
                  <Button
                    type="button"
                    className="btn btn-outlineprimary btn-sm"
                    onClick={clearCart}
                  >
                    CLEAR
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
