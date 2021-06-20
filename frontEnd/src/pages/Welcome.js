import React from 'react';
import { Link } from 'react-router-dom';

import '../Router.css';
import { Divider } from 'antd';
import { useContextInfo } from '../hooks/context';
// import { currentUserFn } from '../services/auth';

import { Image, Button, Spin, Alert } from 'antd';
function ImageDemo() {
  return <Image width={200} src="open.jpg" />;
}
const Welcomee = () => {
  const { user } = useContextInfo();

  return user ? (
    <>
      <div className=" welcome">
        <h1>W E L C O M E </h1>
        <Divider />
        <ImageDemo />
        <Divider />
        <p>
          Saludos <b>{user.name}</b>
        </p>
        <p>In this app you can create Wishes and Product</p>
        <p>En esta página web tu puedes crear Deseos y Productos para vender</p>

        <p>
          <b>Deseos:</b> Cosas que deseas comprar y esperas que otra persona te
          pueda vender
        </p>
        <p>
          <b>Productos:</b> Las cosas que tienes por ahí en tu casa y quieres
          vender
        </p>

        <Button type="primary" ghost>
          <Link to="/profile">Entendido!</Link>
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
