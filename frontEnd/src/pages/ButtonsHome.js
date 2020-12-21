import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import '../Router.css';
import { Button, Carousel, Divider } from 'antd';
import { useContextInfo } from '../hooks/context';

let Background1 = 'tasas.jpeg';
let Background2 = 'cosas.jpeg';
let Background3 = 'cosas1.jpeg';
let Background4 = 'tools.jpg';

const contentStyle = {
  uno: {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    backgroundImage: `url(${Background1})`,
    backgroundSize: 'cover',
  },
  dos: {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    backgroundImage: `url(${Background2})`,
    backgroundSize: 'cover',
  },
  tres: {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    backgroundImage: `url(${Background3})`,
    backgroundSize: 'cover',
  },
  cuatro: {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    backgroundImage: `url(${Background4})`,
    backgroundSize: 'cover',
  },
};

const Router = () => {
  //es importa recordar que user el JSON de la respuesta del back end, no necesariamente un usuario
  const { user } = useContextInfo();
  return !user ? (
    <>
      <div className="buttonsHome">
        <h1>Tienda de Garage</h1>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle.uno}>B U Y</h3>
          </div>
          <div>
            <h3 style={contentStyle.dos}>S E L L</h3>
          </div>
          <div>
            <h3 style={contentStyle.tres}>B U Y</h3>
          </div>
          <div>
            <h3 style={contentStyle.cuatro}>S E L L</h3>
          </div>
        </Carousel>
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
    </>
  ) : (
    <Redirect to="/profile" />
  );
};

export default Router;
