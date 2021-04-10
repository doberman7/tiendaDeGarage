import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import '../App.css';
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
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default CartDrawer;
