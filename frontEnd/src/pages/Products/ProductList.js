import { Row, Col, Card, Image, Spin, Tag } from 'antd';
import React from 'react';
import { motion } from 'framer-motion';
import AddButton from './AddButton';
import { Carrusel } from './Carrusel';
const { Meta } = Card;
const style = { background: '#1D99A9', padding: '1px' };

function ProductList({ products = [] }) {
  // if (products.length) {
  //   products.map((product) => console.log(product));
  // }
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
                    <Carrusel images={product.image} />
                    <p>
                      <b>Description:</b> {product.description}
                    </p>
                    <p>
                      <b>$</b> {product.price}
                    </p>
                    <p>
                      <b>Cantidad</b>{' '}
                      {product.quantity ? product.quantity : null}
                    </p>
                    {/* este div es para que JSC reconosca el espacio */}
                    <div>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 1 }}
                        whileTap={{
                          scale: 0.95,
                        }}
                      >
                        <AddButton product={product} />
                      </motion.div>
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
