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
  Typography,
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
const { Title, Text } = Typography;

const openNotification = (message) => {
  notification.info({
    message: `${message}`,
    description: message,
  });
};
const ViewProducts = ({ history }) => {
  //es importa recordar que user el JSON de la respuesta del back end, no necesariamente un usuario
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
    <>
      <div style={{ padding: '1rem 3rem' }}>
        <Title level={1}>Wishes</Title>
        <div>
          <p>You can create a product</p>
          <br />
          <Link to="/createProduct">
            <Button type="primary">Create a wish</Button>
          </Link>
          <Divider />
        </div>

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
                  <Meta
                    title={product.name}
                    description={product.description}
                  />
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  ) : (
    <Redirect to="/" />
  );
};

export default ViewProducts;
