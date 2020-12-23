import { srvAllItems } from '../services/Items';

import { useContextInfo } from '../hooks/context';

import {
  Row,
  Col,
  Typography,
  Card,
  Button,
  Modal,
  Divider,
  Image,
  Avatar,
  Space,
  Spin,
  Tag,
  Alert,
  Input,
  AutoComplete,
} from 'antd';
import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { TagOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;
const { Meta } = Card;
const style = { background: '#1D99A9', padding: '1px' };

function ItemsAll() {
  //es importa recordar que user el JSON de la respuesta del back end, no necesariamente un usuario
  const { user } = useContextInfo();

  const [items, setItems] = useState(null);

  useEffect(() => {
    async function getAllItems() {
      const { data } = await srvAllItems();
      //data es la response de back, en este caso todos los items
      setItems(data);
      // console.log(items);
    }
    getAllItems();
  }, []);

  const renderTitle = (title) => {
    return (
      <span>
        {title}
        <a
          style={{
            float: 'right',
          }}
          href="https://www.google.com/search?q=antd"
          target="_blank"
          rel="noopener noreferrer"
        >
          more
        </a>
      </span>
    );
  };

  const renderItem = (title, count) => {
    return {
      value: title,
      label: (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {title}
          <span>
            <TagOutlined /> {count}
          </span>
        </div>
      ),
    };
  };

  const options = [];

  const SearchBar = (opts) => (
    <AutoComplete
      dropdownClassName="certain-taggs-search-dropdown"
      dropdownMatchSelectWidth={500}
      style={{
        width: 250,
      }}
      options={options}
    >
      <Input.Search size="large" placeholder="input here" />
    </AutoComplete>
  );
  let opts = [];
  const TurnIntoOpts = (items) => {
    let depBooks = [];
    let depElectrics = [];

    //separar por department
    items.forEach((item, i) => {
      if (item.department == 'books') depBooks.push(item);
      if (item.department == 'electronics') depElectrics.push(item);
    });

    //BOOKS DEPARTMENT
    //unificar por taggs
    let bookTaggs = [];
    depBooks.map((item) => {
      //empujamos el atributo taggs dentro de otro array para poder manipular con "for"
      bookTaggs.push(item.taggs);
    });
    //unificar todos los tas de books en un aray ordenado
    let bookTaggsMerged = bookTaggs.flat().sort();
    function count() {
      let current = null;
      var cnt = 0;
      for (var i = 0; i < bookTaggsMerged.length; i++) {
        if (bookTaggsMerged[i] != current) {
          if (cnt > 0) {
            console.log(current + ' comes --> ' + cnt + ' times');
          }
          current = bookTaggsMerged[i];
          cnt = 1;
        } else {
          cnt++;
        }
      }
      if (cnt > 0) {
        console.log(current + ' comes --> ' + cnt + ' times');
      }
    }

    count();
  };

  return user ? (
    <>
      {items ? <p>{TurnIntoOpts(items)}</p> : <p>no hay items</p>}
      <div style={{ padding: '1rem 3rem' }}>
        <Title level={1}>Items</Title>
        <div>
          <p>From here you can all the items for you to buy</p>
          <SearchBar />
          <Divider />
        </div>
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
                  <Card
                    title={item.title}
                    // extra={<Link to={`/item/${item._id}`}>Edit</Link>}
                  >
                    <p>
                      <b>Description:</b> {item.description}
                    </p>
                    <p>
                      <b>department:</b> {item.department}
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
                      // iterar entre las categorias del product, mostrarlas como tagas azules
                      //esta description no es el atributoo de un objeto, pertenece al componente Card de antD
                      description={item.taggs.map((i) => (
                        <Tag color="magenta">{i}</Tag>
                      ))}
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
  ) : (
    // <Redirect to="/" />
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
