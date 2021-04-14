import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Cart from './Cart';
import { useCart } from 'react-use-cart';
import { motion } from 'framer-motion';

const CartDrawer = () => {
  const { totalItems } = useCart();
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  let itemsOnCart = totalItems;

  return (
    <>
      <Button
        type="dashed"
        // ghost
        onClick={showDrawer}
        style={{
          position: 'fixed',
          zIndex: '100',
          right: '20px',
          top: '20px',
          color: '#eb2f96',
        }}
      >
        <motion.div whileHover={{ scale: 1.8 }}>
          <ShoppingCartOutlined />
          <totalItems />
          <>{itemsOnCart}</>
        </motion.div>
      </Button>

      <Drawer
        title="My Cart"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Cart />
      </Drawer>
    </>
  );
};

export default CartDrawer;
