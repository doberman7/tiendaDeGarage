import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LayoutApp from './components/LayoutApp';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ViewProducts from './pages/ViewProducts';
import EditProduct from './pages/EditProduct';
import './Router.css';

import ButtonsHome from './pages/ButtonsHome';
import EditUser from './pages/EditUser';
import CreateProduct from './pages/CreateProduct';

// const Login = () => <h1>Login</h1>
// const Signup = () => <h1>Signup</h1>
// const Profile = () => <h1>Profile</h1>

const Router = () => {
  return (
    <BrowserRouter>
      <LayoutApp>
        <Switch>
          <Route path="/" component={ButtonsHome} exact />
          <Route path="/edituser" component={EditUser} exact />
          <Route path="/createProduct" component={CreateProduct} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/profile" component={Profile} exact />
          <Route path="/viewProducts" component={ViewProducts} exact />
          <Route path="/product/:productId" component={EditProduct} exact />
        </Switch>
      </LayoutApp>
    </BrowserRouter>
  );
};

export default Router;
