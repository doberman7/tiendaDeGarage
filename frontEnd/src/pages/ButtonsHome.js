import React from 'react';
import { Link, Redirect } from 'react-router-dom';

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
  //es importa recordar que user el JSON de la respuesta del back end, no necesariamente un usuario
  const { user } = useContextInfo();
  return !user ? (
    <div className="site-button-ghost-wrapper">
      <h1>Tienda de Garage</h1>

      <ImageDemo />
      <Divider />
      <p>
        La experiencia más amena en compras e intercambios de sillas, mesas,
        trastos, aparatos electronicos, jarras, vasos, plato, cucharas,
        tenedores reglas, lápizes, mochilas y demás chunches que puedas
        encontrar en tu garage sólo aquí con su Tienda Garage
      </p>
      <Button type="primary" ghost>
        <Link to="/Signup">Sign up</Link>
      </Button>
      <Divider />
      <Button type="primary" ghost>
        <Link to="/Login">Login</Link>
      </Button>
      <Divider />
    </div>
  ) : (
    <Redirect to="/profile" />
  );
};

export default Router;
