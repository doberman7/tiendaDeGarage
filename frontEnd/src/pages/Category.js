import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { useContextInfo } from '../hooks/context';
import { logoutFn } from '../services/auth';
const { Header, Content, Footer } = Layout;

const Category = () => {
  let history = useHistory();
  const { user } = useContextInfo();

  return user ? (
    <>
      <p>category</p>
    </>
  ) : (
    <p>nop</p>
  );
};

export default Category;
