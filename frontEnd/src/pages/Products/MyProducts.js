import { getUserProducts } from '../../services/Products';
import { useContextInfo } from '../../hooks/context';

import {
  Row,
  Col,
  Typography,
  Card,
  Button,
  // Modal,
  Divider,
  Image,
  // Avatar,
  // Space,
  Spin,
  Tag,
  Alert,
} from 'antd';
import { EditOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carrusel } from './Carrusel';

const { Title } = Typography;
const { Meta } = Card;
const style = { background: '#1C84B9', padding: '1px' };

function MyProducts() {
  //es importa recordar que user el JSON de la respuesta del back end, no necesariamente un usuario
  const { user } = useContextInfo();

  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function getAnProduct() {
      const { data } = await getUserProducts();
      setProducts(data.products);
    }
    getAnProduct();
  }, []);

  return user ? (
    <>
      <div style={{ padding: '1rem 3rem' }}>
        <Title level={1}>Productos</Title>
        <div>
          <p>Crea los productos que deseas vender</p>
          {/* <br /> */}
          <Button type="primary " ghost>
            <Link to="/createProduct">Crear Productos</Link>
          </Button>
          <Divider />
        </div>
        <Row gutter={[16, 24]}>
          {products ? (
            products.map((product) => (
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
                    extra={
                      <Link to={`/product/${product._id}`}>
                        <br />
                        <EditOutlined />
                      </Link>
                    }
                  >
                    <p>
                      <b>Descripción:</b> {product.description}
                    </p>

                    <p>
                      <b>$</b> {product.price}
                    </p>
                    <p>
                      <b>Cantidad</b>{' '}
                      {product.quantity ? product.quantity : null}
                    </p>
                    <Carrusel images={product.image} />
                    {/* este div es para que JSC reconosca el espacio */}
                    <div>
                      <br />
                    </div>
                    <Meta
                      // iterar entre las categorias del wish, mostrarlas como tagas azules
                      //esta description no es el atributoo de un objeto, pertenece al componente Card de antD
                      description=<Tag color="cyan">{product.category}</Tag>
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
    // <Redirect to="/" />
    <>
      <Spin tip="Loading...">
        <Alert
          message="This is taking to much time"
          description="You may not be signed in, go Home and sing in please"
          type="info"
        />
      </Spin>
    </>
  );
}
export default MyProducts;
