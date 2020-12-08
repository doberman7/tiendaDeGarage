import React, { useEffect, useState } from 'react';
import { useContextInfo } from '../hooks/context';
import { Redirect } from 'react-router-dom';
import { Card } from 'antd';
import { getUserProductsFn } from '../services/auth';

const { Meta } = Card;

const Profile = ({ history }) => {
  const { user } = useContextInfo();

  const [userProducts, setProducts] = useState(null);

  async function getProducts() {
    const products = await getUserProductsFn();
    setProducts(products);
    console.log(products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return user ? (
    <Card
      hoverable="hoverable"
      style={{
        width: 240,
      }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  ) : (
    <Redirect to="/" />
  );
};

export default Profile;
