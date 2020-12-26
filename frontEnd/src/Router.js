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
import MyItems from './pages/MyItems'; //añado items del usuario
import CreateItemForm from './pages/CreateItem'; //añado formulario de items del usuario
import EditItem from './pages/EditItem'; //añado edicion del formulario del usuario
import ItemsAll from './pages/ItemsAll';
import Category from './pages/Category';

//añado createItemForm,MyItems y Edit Item
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
          <Route path="/createItem" component={CreateItemForm} exact />
          <Route path="/MyItems" component={MyItems} exact />
          <Route path="/item/:itemId" component={EditItem} exact />
          <Route path="/ItemsAll" component={ItemsAll} exact />
          <Route path="/category" component={Category} exact />
        </Switch>
      </LayoutApp>
    </BrowserRouter>
  );
};

export default Router;
