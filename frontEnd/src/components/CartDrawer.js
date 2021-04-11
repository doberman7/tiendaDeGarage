import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Cart from './Cart';
const CartDrawer = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

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
        <ShoppingCartOutlined />
      </Button>

      <Drawer
        title="Basic Drawer"
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
