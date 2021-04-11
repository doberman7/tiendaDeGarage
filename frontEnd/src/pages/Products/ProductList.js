import { Row, Col, Card, Image, Spin, Tag, Button } from 'antd';
import React from 'react';
import { useCart } from 'react-use-cart';

const { Meta } = Card;
const style = { background: '#1D99A9', padding: '1px' };

function ProductList({ products = [] }) {
  const { addItem } = useCart();
  return (
    <>
      <div style={{ padding: '1rem 2rem' }}>
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
                  {/* cart needs an id property, but mangose created only _id, so its fixed with this */}
                  <div style={{ display: 'none' }}>
                    {(product.id = product._id)}
                  </div>
                  <Card title={product.name}>
                    <Image src={product.image} />
                    <p>
                      <b>Description:</b> {product.description}
                    </p>
                    <p>
                      <b>$</b> {product.price}
                    </p>
                    {/* este div es para que JSC reconosca el espacio */}
                    <div>
                      <Button
                        type="dashed"
                        ghost
                        style={{ color: '#9e1068' }}
                        onClick={() => addItem(product)}
                      >
                        Add to cart
                      </Button>
                      <br />
                      <br />
                    </div>

                    <Meta
                      description=<Tag color="gold">{product.category}</Tag>
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
export default ProductList;
