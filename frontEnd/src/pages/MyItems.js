import { getUserItems } from '../services/Items';
import { getItemDetails } from '../services/Items';
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
} from 'antd';
import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
const { Title, Text } = Typography;
const { Meta } = Card;
const style = { background: '#1D99A9', padding: '1px' };

function MyItems() {
  //es importa recordar que user el JSON de la respuesta del back end, no necesariamente un usuario
  const { user } = useContextInfo();

  const [items, setItems] = useState(null);

  useEffect(() => {
    async function getAnItem() {
      const { data } = await getUserItems();
      setItems(data.items);
    }
    getAnItem();
  }, []);

  return user ? (
    <>
      <div style={{ padding: '1rem 3rem' }}>
        <Title level={1}>Items</Title>
        <div>
          <p>From here you can create and see all the items you want to sell</p>
          <br />
          <Button type="primary " ghost>
            <Link to="/createItem">Create Item</Link>
          </Button>
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
                        <Tag color="cyan">{i}</Tag>
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
}
export default MyItems;
