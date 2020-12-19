import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import '../Router.css';
import { Divider } from 'antd';
import { useContextInfo } from '../hooks/context';
import { Image, Button } from 'antd';
function ImageDemo() {
  return <Image width={200} src="open.jpg" />;
}
const Router = () => {
  const { user } = useContextInfo();

  return user ? (
    <>
      <div className="site-button-ghost-wrapper">
        <h1>W E L C O M E </h1>
        <Divider />
        <p>You have created a user with email: {user.email}</p>
        <ImageDemo />
        <p>In this app you can create Wishes and Items</p>
        <ul>
          <li>
            <b>Wishes:</b> things you d wanna buy
          </li>
          <li>
            <b>Items:</b> the stuff you have and want to sell
          </li>
        </ul>
        <Button type="primary" ghost>
          <Link to="/profile">Got it</Link>
        </Button>
      </div>
    </>
  ) : (
    <Redirect to="/" />
  );
};

export default Router;
