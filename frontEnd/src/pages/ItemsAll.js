import { srvAllItems } from '../services/Items';

import { useContextInfo } from '../hooks/context';
import { Link, useHistory } from 'react-router-dom';
import {
  Row,
  Col,
  Typography,
  Card,
  Divider,
  Image,
  Spin,
  Tag,
  Alert,
  Input,
  AutoComplete,
} from 'antd';
import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import Search from './Search';

const { Title } = Typography;
const { Meta } = Card;
const style = { background: '#1D99A9', padding: '1px' };

function ItemsAll(props) {
  //es importa recordar que user el JSON de la respuesta del back end, no necesariamente un usuario
  const { user } = useContextInfo();
  const [input, setInput] = useState('');

  const [items, setItems] = useState(null);
  const [itemListDefault, setItemListDefault] = useState(null);
  useEffect(() => {
    async function getAllItems() {
      const { data } = await srvAllItems();
      //data es la response de back, en este caso todos los items
      setItems(data);
      setItemListDefault(data);
    }
    getAllItems();
  }, []);

  //funciones para la barra de búsqueda
  const updateInput = async (input) => {
    const filtered = itemListDefault.filter((item) => {
      return item.title.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setItems(filtered);
  };

  return user ? (
    <>
      <div style={{ padding: '1rem 3rem' }}>
        <Title level={1}>Items</Title>
        <div>
          <p>From here you can all the items for you to buy</p>
          <Search input={input} onChange={updateInput} />

          <Divider />
        </div>
        <ItemList items={items} />
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
export default ItemsAll;
