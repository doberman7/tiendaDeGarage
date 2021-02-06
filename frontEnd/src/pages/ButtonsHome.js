import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import '../Router.css';
import { Button, Carousel, Divider, message, Alert } from 'antd';
import { useContextInfo } from '../hooks/context';
import { loginFn } from '../services/auth';

import { useHistory } from 'react-router-dom';

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
    backgroundImage: `url(${Background1})`,
    backgroundSize: 'cover',
  },
  dos: {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundImage: `url(${Background2})`,
    backgroundSize: 'cover',
  },
  tres: {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundImage: `url(${Background3})`,
    backgroundSize: 'cover',
  },
  cuatro: {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundImage: `url(${Background4})`,
    backgroundSize: 'cover',
  },
};

// const Router = () => {
const Home = () => {
  //es importa recordar que user es el JSON de la respuesta del back end, no necesariamente un usuario
  const { user, login } = useContextInfo();
  const [error, setError] = useState(null);

  async function testUser() {
    try {
      const { data } = await loginFn({
        name: 'test',
        email: 'test@mail.com',
        password: 'test',
      });
      console.log('DATA:', data);
      login(data);
      useHistory.push('/profile');

      message.success('Welcome');
    } catch (e) {
      // console.dir(e.response.data.message);
      // setError(e.response.data.message);
    }
  }

  return user ? (
    <>
      <Redirect to="/profile" />
    </>
  ) : (
    <div className="buttonsHome">
      <h1>Tienda de Garage</h1>
      {error && <Alert message={error} type="error" showIcon />}

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
        The most enjoyable experience in purchases and exchanges of chairs,
        tables, dishes, electronic devices, jugs, glasses, plate, spoons, forks,
        rulers, pencils, backpacks and other junk you can find in your garage
        only here with your Tienda de Garage
      </p>
      <Button type="primary" ghost>
        <Link to="/Signup">Sign up</Link>
      </Button>
      <Divider />
      <Button type="primary" ghost>
        <Link to="/Login">Login</Link>
      </Button>
      <Divider />
      <Button type="primary" ghost onClick={testUser}>
        User for tests
      </Button>
    </div>
  );
};

// export default Router;
export default Home;
