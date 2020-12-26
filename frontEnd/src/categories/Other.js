import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useContextInfo } from '../hooks/context';
import { srvAllItems } from '../services/Items';

import { Row, Col, Typography, Card, Image, Spin, Tag } from 'antd';
const { Title } = Typography;
const { Meta } = Card;
const style = { background: '#1D99A9', padding: '1px' };

const Other = () => {
  let history = useHistory();
  const { user } = useContextInfo();
  const [items, setItems] = useState(null);

  useEffect(() => {
    async function getAllItems() {
      const { data } = await srvAllItems();
      //data es la response de back, en este caso todos los items
      setItems(data);
    }
    getAllItems();
  }, []);

  return user ? (
    <>
      <Title level={1}>Other</Title>
      {
        <Row gutter={[16, 24]}>
          {items ? (
            items.map((item) =>
              item.category === 'other' ? (
                <Col
                  className="gutter-row"
                  span={6}
                  xs={24}
                  sm={24}
                  md={8}
                  key={item._id}
                >
                  <div style={style}>
                    <Card title={item.title}>
                      <p>
                        <b>Description:</b> {item.description}
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
                        // iterar entre las categorias del wish, mostrarlas como tagas azules
                        //esta description no es el atributoo de un objeto, pertenece al componente Card de antD
                        description=<Tag color="cyan">{item.category}</Tag>
                      />
                    </Card>
                  </div>
                </Col>
              ) : (
                <p></p>
              )
            )
          ) : (
            <Spin size="large" />
          )}
        </Row>
      }
    </>
  ) : (
    <p>nop</p>
  );
};

export default Other;
