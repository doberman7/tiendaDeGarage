import { Row, Col, Card, Image, Spin, Tag, Button } from 'antd';
import React, { useContext } from 'react';

import { CartContext } from '../hooks/CartContext';

const { Meta } = Card;
const style = { background: '#1D99A9', padding: '1px' };

function ProductList({ products = [] }) {
  // console.log(CartContext.addProduct);
  const { addProduct, cartItems, increase } = useContext(CartContext);

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };
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
                      <br />
                      {isInCart(product) && (
                        <Button
                          onClick={() => increase(product)}
                          className="btn btn-outline-primary btn-sm"
                        >
                          Add more
                        </Button>
                      )}

                      {!isInCart(product) && (
                        <Button
                          onClick={() => addProduct(product)}
                          className="btn btn-primary btn-sm"
                        >
                          Add to cart
                        </Button>
                      )}
                      <br />
                      <br />
                    </div>
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
