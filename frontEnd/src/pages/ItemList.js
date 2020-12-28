// import { srvAllItems } from '../services/Items';

// import { useContextInfo } from '../hooks/context';

import { Row, Col, Card, Image, Spin, Tag } from 'antd';
import React from 'react';
const { Meta } = Card;
const style = { background: '#1D99A9', padding: '1px' };

function ItemList({ items = [] }) {
  return (
    <>
      <div style={{ padding: '1rem 3rem' }}>
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
            ))
          ) : (
            <Spin size="large" />
          )}
        </Row>
      </div>
    </>
  );
}
export default ItemList;
