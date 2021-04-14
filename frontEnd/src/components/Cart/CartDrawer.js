import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Cart from './Cart';
import { useCart } from 'react-use-cart';
import { motion } from 'framer-motion';
const CartDrawer = () => {
  const isItCliked = false;
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
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ['20%', '20%', '50%', '50%', '20%'],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeatDelay: 1,
          }}
        >
          <motion.div whileHover={{ scale: 1.8 }}>
            <ShoppingCartOutlined />
            <totalItems />
            <>{itemsOnCart}</>
          </motion.div>
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
