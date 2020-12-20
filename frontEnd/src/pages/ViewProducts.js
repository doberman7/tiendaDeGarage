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
  Spin,
  Tag,
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
const style = { background: '#2742AF', padding: '10px' };
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

        <Row gutter={[16, 24]}>
          {userProducts ? (
            userProducts.map((product) => (
              <Col
                className="gutter-row"
                span={6}
                xs={24}
                sm={24}
                md={8}
                key={product._id}
              >
                <div style={style}>
                  <Card
                    title={product.name}
                    actions={[
                      <Link to={`/product/${product._id}`}>
                        <EditOutlined key={'edit'} />
                      </Link>,
                    ]}
                    key={product.id}
                  >
                    <p>Description:{product.description}</p>
                    <Image src={product.picture} />
                    {/* este div es para que JSC reconosca el espacio */}
                    <div>
                      <br />
                    </div>
                    <Meta
                      // iterar entre las categorias del product, mostrarlas como tagas azules
                      //esta description no es el atributoo de un objeto, pertenece al componente Card de antD
                      description={product.category.map((c) => (
                        <Tag color="geekblue">{c}</Tag>
                      ))}
                    />
                  </Card>
                </div>
              </Col>
            ))
          ) : (
            <Spin size="large" />
          )}
        </Row>
      </div>
    </>
  ) : (
    <Redirect to="/" />
  );
};

export default ViewProducts;
