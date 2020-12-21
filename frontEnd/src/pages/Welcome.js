import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import '../Router.css';
import { Divider } from 'antd';
import { useContextInfo } from '../hooks/context';
import { isAuthFn, currentUserFn } from '../services/auth';

import { Image, Button } from 'antd';
function ImageDemo() {
  return <Image width={200} src="open.jpg" />;
}
const Welcomee = () => {
  const [currentUserG, setCurrentUserG] = useState(null);

  useEffect(() => {
    async function getUser() {
      isAuthFn()
        .then((response) => {
          console.log(response.data.user);
          setCurrentUserG(response.data.user);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getUser();
  }, []);

  // const Router = () => {
  const { user } = useContextInfo();
  console.log(currentUserG);
  return user || currentUserG ? (
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
    <Redirect to="/" />
  );
};

export default Welcomee;
// export default Router;
