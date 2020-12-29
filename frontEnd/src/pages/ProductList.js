import { Row, Col, Card, Image, Spin, Tag } from 'antd';
import React from 'react';
const { Meta } = Card;
const style = { background: '#1D99A9', padding: '1px' };

function ProductList({ products = [] }) {
  return (
    <>
      <div style={{ padding: '1rem 3rem' }}>
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
                  <Card title={product.title}>
                    <p>
                      <b>Description:</b> {product.description}
                    </p>

                    <p>
                      <b>$</b> {product.price}
                    </p>
                    <Image src={product.image} />
                    {/* este div es para que JSC reconosca el espacio */}
                    <div>
                      <br />
                    </div>
                    {/* depending on the category assign a color to each tag */}
                    {product.category === 'electronics' ? (
                      <Meta
                        description=<Tag color="volcano">
                          {product.category}
                        </Tag>
                      />
                    ) : (
                      false
                    )}
                    {product.category === 'books' ? (
                      <Meta
                        description=<Tag color="gold">{product.category}</Tag>
                      />
                    ) : (
                      false
                    )}
                    {product.category === 'clothes' ? (
                      <Meta
                        description=<Tag color="orange">{product.category}</Tag>
                      />
                    ) : (
                      false
                    )}
                    {product.category === 'other' ? (
                      <Meta
                        description=<Tag color="lime">{product.category}</Tag>
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
export default ProductList;
