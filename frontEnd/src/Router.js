import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LayoutApp from './components/LayoutApp';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Welcome from './pages/Welcome';
import ViewProducts from './pages/ViewProducts';
import EditProduct from './pages/EditProduct';
import './Router.css';
import ButtonsHome from './pages/ButtonsHome';
import EditUser from './pages/EditUser';
import CreateProduct from './pages/CreateProduct';
import MyItems from './pages/MyItems'; //añado items del usuario
import CreateItemForm from './pages/CreateItem'; //añado formulario de items del usuario
import EditItem from './pages/EditItem'; //añado edicion del formulario del usuario
import ItemsAll from './pages/ItemsAll';

//añado createItemForm,MyItems y Edit Item
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
          <Route path="/welcome" component={Welcome} exact />
          <Route path="/viewProducts" component={ViewProducts} exact />
          <Route path="/product/:productId" component={EditProduct} exact />
          <Route path="/createItem" component={CreateItemForm} exact />
          <Route path="/MyItems" component={MyItems} exact />
          <Route path="/item/:itemId" component={EditItem} exact />
          <Route path="/ItemsAll" component={ItemsAll} exact />
        </Switch>
      </LayoutApp>
    </BrowserRouter>
  );
};

export default Router;
