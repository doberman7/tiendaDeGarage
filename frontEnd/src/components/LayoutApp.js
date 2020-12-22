import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { useContextInfo } from '../hooks/context';
import { logoutFn } from '../services/auth';
const { Header, Content, Footer } = Layout;

const LayoutApp = ({ children }) => {
  let history = useHistory();
  const { user, logout } = useContextInfo();
  async function handleLogout() {
    await logoutFn();
    logout();
    history.push('/');
  }

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
                <Link to="/profile">Profile</Link>
              </Menu.Item>

              <Menu.Item key="5">
                <Link to="/viewProducts">My Wishes</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/MyItems">My Items</Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to="/ItemsAll">All items</Link>
              </Menu.Item>
              <Menu.Item key="8" onClick={handleLogout}>
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
