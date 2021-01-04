import React, { useContext } from 'react';
import { Layout, Menu } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { useContextInfo } from '../hooks/context';
import { logoutFn } from '../services/auth';
import { ShoppingCartOutlined, ProfileOutlined } from '@ant-design/icons';
import { CartContext } from '../hooks/CartContext';

const { Header, Content } = Layout;

const LayoutApp = ({ children }) => {
  let history = useHistory();
  const { user, logout } = useContextInfo();
  async function handleLogout() {
    await logoutFn();
    logout();
    history.push('/');
  }
  const { itemCount } = useContext(CartContext);

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          {!user ? (
            <>
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/signup">Signup</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/login">Login</Link>
              </Menu.Item>
            </>
          ) : (
            <React.Fragment>
              <Menu.Item key="4">
                <Link to="/profile">
                  <ProfileOutlined style={{ color: '#6abe39' }} />
                </Link>
              </Menu.Item>

              <Menu.Item key="5">
                <Link to="/MyWishes" style={{ color: '#e8d639' }}>
                  My Wishes
                </Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/MyProducts" style={{ color: '#a9d134' }}>
                  My Products
                </Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to="/ProductsAll" style={{ color: '#e8b339' }}>
                  All products
                </Link>
              </Menu.Item>
              <Menu.Item key="9">
                <Link to="/cart">
                  <ShoppingCartOutlined />({itemCount})
                </Link>
              </Menu.Item>
              <Menu.Item
                key="8"
                onClick={handleLogout}
                style={{ color: 'gray' }}
              >
                Logout
              </Menu.Item>
            </React.Fragment>
          )}
        </Menu>
      </Header>
      <br />
      <Content style={{ padding: '0 50px', height: 'calc(100vh - 153.6px)' }}>
        <div className="site-layout-content">{children}</div>
      </Content>
    </Layout>
  );
};

export default LayoutApp;
