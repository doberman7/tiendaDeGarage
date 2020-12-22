import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import '../Router.css';
import { Divider } from 'antd';
import { useContextInfo } from '../hooks/context';
// import { currentUserFn } from '../services/auth';

import { Image, Button, Spin, Alert } from 'antd';
function ImageDemo() {
  return <Image width={200} src="open.jpg" />;
}
const Welcomee = () => {
  const { user, setUserUpdtade } = useContextInfo();

  console.log(user);
  return user ? (
    <>
      <div className=" welcome">
        <h1>W E L C O M E </h1>
        <Divider />
        <ImageDemo />
        <Divider />
        <p>
          Greetings <b>{user.name}</b>
        </p>
        <p>In this app you can create Wishes and Items</p>

        <p>
          <b>Wishes:</b> things you wanna buy
        </p>
        <p>
          <b>Items:</b> the stuff you have and want to sell
        </p>

        <Button type="primary" ghost>
          <Link to="/profile">Got it</Link>
        </Button>
      </div>
    </>
  ) : (
    <>
      <Spin tip="Loading...">
        <Alert
          message="This is taking to much time"
          description="You may not be signed in, go Home and sing in please"
          type="info"
        />
      </Spin>
    </>
  );
};

export default Welcomee;
// export default Router;
