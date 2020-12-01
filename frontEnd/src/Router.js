import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import LayoutApp from './components/LayoutApp';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import './Router.css';
import { Button } from 'antd';
import { Divider } from 'antd';
import ButtonsHome from './pages/ButtonsHome';

// const Login = () => <h1>Login</h1>
// const Signup = () => <h1>Signup</h1>
// const Profile = () => <h1>Profile</h1>

const Router = () => {
  return (
    <BrowserRouter>
      <LayoutApp>
        <Switch>
          <Route path="/" component={ButtonsHome} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/profile" component={Profile} exact />
        </Switch>
      </LayoutApp>
    </BrowserRouter>
  );
};

export default Router;
