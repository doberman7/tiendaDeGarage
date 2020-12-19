import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import '../Router.css';
import { Divider } from 'antd';
import { useContextInfo } from '../hooks/context';
import { Image, Button } from 'antd';
function ImageDemo() {
  return (
    <Image
      width={400}
      src="https://images.unsplash.com/photo-1533745848184-3db07256e163?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
    />
  );
}
const Router = () => {
  const { user } = useContextInfo();

  return user ? (
    <div className="site-button-ghost-wrapper">
      <ImageDemo />
      <Divider />
      <p>welcome {user.email}</p>

      <Button type="primary" ghost>
        <Link to="/profile">Got it</Link>
      </Button>
      <Divider />
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default Router;
