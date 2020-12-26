import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useContextInfo } from '../hooks/context';
import { srvAllItems } from '../services/Items';
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
const { Title } = Typography;
const { Meta } = Card;
const style = { background: '#1D99A9', padding: '1px' };

const Electronics = () => {
  let history = useHistory();
  const { user } = useContextInfo();
  const [items, setItems] = useState(null);
  const [itemsAll, setItemsAll] = useState(null);
  let electronics = [];
  useEffect(() => {
    async function getAllItems() {
      const { data } = await srvAllItems();
      //data es la response de back, en este caso todos los items
      setItems(data);
      setItemsAll(data);
    }
    getAllItems();
    itemsAll.map((itm) => {
      if (itm.category == 'electronics') {
        electronics.push(itm);
      }
    });
  }, []);

  return user ? (
    <>
      {/* // TODO: if clothes, if boocks, electronics, else other*/}
      <p>category</p>
    </>
  ) : (
    <p>nop</p>
  );
};

export default Electronics;
