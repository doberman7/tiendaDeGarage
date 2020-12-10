import React, { useEffect, useState } from 'react';
import { useContextInfo } from '../hooks/context';
import { Redirect, Link } from 'react-router-dom';
import {
  Card,
  Row,
  Divider,
  Col,
  Avatar,
  notification,
  Space,
  Button,
  Image,
} from 'antd';
import { getUserProductsFn } from '../services/auth';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import {
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
} from '@ant-design/icons';
const style = { background: '#800080', padding: '10px' };
const { Meta } = Card;
const openNotification = (message) => {
  notification.info({
    message: `${message}`,
    description: message,
  });
};
const ViewProducts = ({ history }) => {
  const { user } = useContextInfo();

  const [userProducts, setProducts] = useState(null);

  async function getProducts() {
    const products = await getUserProductsFn();
    setProducts(products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  function ImageDemo() {
    return (
      <Image
        width={200}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
    );
  }
  return user ? (
    <div>
      <Divider orientation="left">Wishes</Divider>
      {/* <Button type="primary" onClick={() => openNotification('bottomRight')}>
        <RadiusBottomrightOutlined />
        bottomRight
      </Button> */}
      <Row gutter={16}>
        {userProducts?.map((product) => (
          <Col className="gutter-row" span={6} key={product._id}>
            <div style={style}>
              <Card
                cover={<Image src={product.picture} />}
                actions={[
                  <Link to={`/product/${product._id}`}>
                    <EditOutlined key={'edit'} />
                  </Link>,
                ]}
                key={product.id}
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

export default ViewProducts;
