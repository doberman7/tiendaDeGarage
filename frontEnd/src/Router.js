import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LayoutApp from './components/LayoutApp';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Welcome from './pages/Welcome';
import MyWishes from './pages/MyWishes';
import EditWish from './pages/EditWish';
import './Router.css';
import ButtonsHome from './pages/ButtonsHome';
import EditUser from './pages/EditUser';
import CreateWish from './pages/CreateWish';
import MyProducts from './pages/MyProducts'; //añado products del usuario
import CreateProductForm from './pages/CreateProduct'; //añado formulario de products del usuario
import EditProduct from './pages/EditProduct'; //añado edicion del formulario del usuario
import ProductsAll from './pages/ProductsAll';
import Cart from './pages/Cart';

const Router = () => {
  return (
    <BrowserRouter>
      <LayoutApp>
        <Switch>
          <Route path="/" component={ButtonsHome} exact />
          <Route path="/edituser" component={EditUser} exact />
          <Route path="/createWish" component={CreateWish} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/profile" component={Profile} exact />
          <Route path="/welcome" component={Welcome} exact />
          <Route path="/MyWishes" component={MyWishes} exact />
          <Route path="/wish/:wishId" component={EditWish} exact />
          <Route path="/createProduct" component={CreateProductForm} exact />
          <Route path="/MyProducts" component={MyProducts} exact />
          <Route path="/product/:productId" component={EditProduct} exact />
          <Route path="/ProductsAll" component={ProductsAll} exact />
          <Route path="/Cart" component={Cart} exact />
        </Switch>
      </LayoutApp>
    </BrowserRouter>
  );
};

export default Router;
