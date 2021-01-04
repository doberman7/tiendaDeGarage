import { srvAllProducts } from '../services/Products';

import { useContextInfo } from '../hooks/context';
// import {  useHistory } from 'react-router-dom';
import {
  // Row,
  // Col,
  Typography,
  // Card,
  Divider,
  // Image,
  Spin,
  // Tag,
  Alert,
  // Input,
  // AutoComplete,
} from 'antd';
import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Search from './Search';

const { Title } = Typography;
// const { Meta } = Card;
// const style = { background: '#1D99A9', padding: '1px' };

function ProductsAll(props) {
  //es importa recordar que user el JSON de la respuesta del back end, no necesariamente un usuario
  const { user } = useContextInfo();
  const [input, setInput] = useState('');

  const [products, setProducts] = useState(null);
  const [productListDefault, setProductListDefault] = useState(null);
  useEffect(() => {
    async function getAllProducts() {
      const { data } = await srvAllProducts();
      //data es la response de back, en este caso todos los products
      setProducts(data);
      setProductListDefault(data);
    }
    getAllProducts();
  }, []);

  //funciones para la barra de búsqueda
  const updateInput = async (input) => {
    const filtered = productListDefault.filter((product) => {
      return product.name.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setProducts(filtered);
  };

  return user ? (
    <>
      <div style={{ padding: '1rem 3rem' }}>
        <Title level={1}>Products</Title>
        <div>
          <p>From here you can all the products for you to buy</p>
          <Search input={input} onChange={updateInput} />

          <Divider />
        </div>
        <ProductList products={products} />
      </div>
    </>
  ) : (
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
export default ProductsAll;
