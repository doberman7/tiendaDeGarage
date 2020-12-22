import { srvAllItems } from '../services/Items';

import { useContextInfo } from '../hooks/context';

import {
  Row,
  Col,
  Typography,
  Card,
  Button,
  Modal,
  Divider,
  Image,
  Avatar,
  Space,
  Spin,
  Tag,
  Alert,
} from 'antd';
import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
const { Title, Text } = Typography;
const { Meta } = Card;
const style = { background: '#1D99A9', padding: '1px' };

function ItemsAll() {
  //es importa recordar que user el JSON de la respuesta del back end, no necesariamente un usuario
  const { user } = useContextInfo();

  const [items, setItems] = useState(null);

  useEffect(() => {
    async function getAllItems() {
      const { data } = await srvAllItems();
      //may data.items
      setItems(data);
    }
    getAllItems();
  }, []);

  return user ? (
    <>
      <div style={{ padding: '1rem 3rem' }}>
        <Title level={1}>Items</Title>
        <div>
          <p>From here you can all the items for you to buy</p>

          <Divider />
        </div>
        <Row gutter={[16, 24]}>
          {items ? (
            items.map((item) => (
              <Col
                className="gutter-row"
                span={6}
                xs={24}
                sm={24}
                md={8}
                key={item._id}
              >
                <div style={style}>
                  <Card
                    title={item.title}
                    extra={<Link to={`/item/${item._id}`}>Edit</Link>}
                  >
                    <p>
                      <b>Description:</b> {item.description}
                    </p>
                    <p>
                      <b>Status:</b> {item.status}
                    </p>
                    <p>
                      <b>$</b> {item.price}
                    </p>
                    <Image src={item.image} />
                    {/* este div es para que JSC reconosca el espacio */}
                    <div>
                      <br />
                    </div>
                    <Meta
                      // iterar entre las categorias del product, mostrarlas como tagas azules
                      //esta description no es el atributoo de un objeto, pertenece al componente Card de antD
                      description={item.category.map((i) => (
                        <Tag color="magenta">{i}</Tag>
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
export default ItemsAll;
