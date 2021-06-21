import { srvAllProducts } from '../../services/Products';

import { useContextInfo } from '../../hooks/context';
import { Typography, Divider, Spin, Alert } from 'antd';
import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Search from '../Search';

const { Title } = Typography;

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
      {/* <div style={{ padding: '1rem 3rem' }}> */}
      <div>
        <Title level={1}>Productos</Title>
        <div>
          <p>Añade al carrito lo que deseas comprar</p>
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
//TODO:a list with no user loged
