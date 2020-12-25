import { srvAllItems } from '../services/Items';

import { useContextInfo } from '../hooks/context';

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
const { Title } = Typography;
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

  //funciones para la barra de búsqueda
  function getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
  }

  const searchResult = (query) => {
    //separar por categorias
    let electronics = [];
    let books = [];
    let clothes = [];
    let other = [];
    items.map((itm) => {
      switch (itm.category) {
        case 'electronics':
          electronics.push(itm);
          break;
        case 'books':
          books.push(itm);
          break;
        case 'clothes':
          clothes.push(itm);
          break;
        default:
          other.push(itm);
      }
    });
    // let categories = [electronics, books, clothes, other];

    let categories = [
      { electronics: electronics },
      { books: books },
      { clothes: clothes },
      { other: other },
    ];
    let result = null;
    let categoria;
    return categories
      .join('.')
      .split('.')
      .map((c, idx) => {
        switch (idx) {
          case 0:
            result = 0;
            electronics.filter((item) => {
              if (item.title === query) {
                result += 1;
              }
            });
            categoria = 'electronics';
            break;
          case 1:
            result = 0;
            books.filter((item) => {
              if (item.title === query) {
                result += 1;
              }
            });
            categoria = 'books';
            break;
          case 2:
            result = 0;
            clothes.filter((item) => {
              if (item.title === query) {
                result += 1;
              }
            });
            categoria = 'clothes';
            break;
          case 3:
            result = 0;
            other.filter((item) => {
              if (item.title === query) {
                result += 1;
              }
            });
            categoria = 'other';
            break;
          default:
        }

        const searchResult = ` ${categoria}`;
        return {
          value: searchResult,
          label: (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>
                Found {query} on
                <a
                  href={`https://s.taobao.com/search?q=${query}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {searchResult}
                </a>
              </span>
              <span>{result} results</span>
            </div>
          ),
        };
      });
  };
  const [options, setOptions] = useState([]);

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value) => {
    console.log('onSelect', value);
  };

  return user ? (
    <>
      <div style={{ padding: '1rem 3rem' }}>
        <Title level={1}>Items</Title>
        <div>
          <p>From here you can all the items for you to buy</p>
          <AutoComplete
            dropdownMatchSelectWidth={252}
            style={{
              width: 300,
            }}
            options={options}
            onSelect={onSelect}
            onSearch={handleSearch}
          >
            <Input.Search size="large" placeholder="input here" enterButton />
          </AutoComplete>

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
                    <Meta
                      // iterar entre las categorias del wish, mostrarlas como tagas azules
                      //esta description no es el atributoo de un objeto, pertenece al componente Card de antD
                      description=<Tag color="cyan">{item.category}</Tag>
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
