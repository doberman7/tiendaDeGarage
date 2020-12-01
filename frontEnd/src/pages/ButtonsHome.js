import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import '../Router.css';
import { Button } from 'antd';
import { Divider } from 'antd';

const Router = () => {
  const [visibility, setVisibility] = useState(true);

  return visibility ? (
    <div className="site-button-ghost-wrapper">
      <h1>IronProfile</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <Button type="primary" ghost>
        <Link to="/Signup">Sign up</Link>
      </Button>
      <Divider />
      <Button type="primary" ghost onClick={() => setVisibility(false)}>
        <Link to="/Login">Login</Link>
      </Button>
    </div>
  ) : (
    <div className="site-button-ghost-wrapper"></div>
  );
};

export default Router;
