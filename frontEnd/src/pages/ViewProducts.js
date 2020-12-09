import React, { useEffect, useState } from 'react';
import { useContextInfo } from '../hooks/context';
import { Redirect } from 'react-router-dom';
import { Card, Row, Divider, Col, Avatar } from 'antd';
import { getUserProductsFn } from '../services/auth';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const style = { background: '#800080', padding: '10px' };
const { Meta } = Card;

const Profile = ({ history }) => {
  const { user } = useContextInfo();

  const [userProducts, setProducts] = useState(null);

  async function getProducts() {
    const products = await getUserProductsFn();
    setProducts(products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return user ? (
    <div>
      <Divider orientation="left">Products</Divider>
      <Row gutter={16}>
        {userProducts?.map((product) => (
          <Col className="gutter-row" span={6}>
            <div style={style}>
              <Card
                cover={<img alt="example" src={product.picture} />}
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta title={product.name} description={product.description} />
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default Profile;
