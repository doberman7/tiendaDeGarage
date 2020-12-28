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
                    {/* depending on the category assign a color to each tag */}
                    {item.category === 'electronics' ? (
                      <Meta
                        description=<Tag color="volcano">{item.category}</Tag>
                      />
                    ) : (
                      false
                    )}
                    {item.category === 'books' ? (
                      <Meta
                        description=<Tag color="gold">{item.category}</Tag>
                      />
                    ) : (
                      false
                    )}
                    {item.category === 'clothes' ? (
                      <Meta
                        description=<Tag color="orange">{item.category}</Tag>
                      />
                    ) : (
                      false
                    )}
                    {item.category === 'other' ? (
                      <Meta
                        description=<Tag color="lime">{item.category}</Tag>
                      />
                    ) : (
                      false
                    )}
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
