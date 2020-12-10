import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import '../Router.css';
import { Button } from 'antd';
import { Divider } from 'antd';
import { useContextInfo } from '../hooks/context';
import { Image } from 'antd';
function ImageDemo() {
  return (
    <Image
      width={400}
      src="https://www.itl.cat/pngfile/big/327-3275501_second-hand-furniture-stores-guide-elegant-garage-sale.jpg"
    />
  );
}
const Router = () => {
  const { user } = useContextInfo();
  return !user ? (
    <div className="site-button-ghost-wrapper">
      <h1>Mr Garage</h1>
      <ImageDemo />
      <Divider />
      <p>
        La experciencia más amena en compras e intercambios de sillas, mesas,
        trastos, aparatos electronicos, jarras vasos, plato, cucharas, tenedores
        reglas, lápizes, mochilas y demás chunches que puedas encontrar en tu
        Gargage sólo aquí con MR GARAGE
      </p>
      <Button type="primary" ghost>
        <Link to="/Signup">Sign up</Link>
      </Button>
      <Divider />
      <Button type="primary" ghost>
        <Link to="/Login">Login</Link>
      </Button>
    </div>
  ) : (
    <Redirect to="/profile" />
  );
};

export default Router;
