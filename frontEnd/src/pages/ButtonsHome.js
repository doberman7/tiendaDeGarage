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
      src="https://cdn.ramseysolutions.net/media/common_images/article_images/blog_ai_lg/blog_ai_lg_yard_sale_types.jpg"
    />
  );
}
const Router = () => {
  const { user } = useContextInfo();
  return !user ? (
    <div className="site-button-ghost-wrapper">
      <h1>Mr Garage</h1>
      <ImageDemo />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
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
