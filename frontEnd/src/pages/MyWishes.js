import React, { useEffect, useState } from 'react';
import { useContextInfo } from '../hooks/context';
import { Link } from 'react-router-dom';
import {
  Card,
  Row,
  Divider,
  Col,
  Button,
  Image,
  Typography,
  Spin,
  Tag,
  Alert,
} from 'antd';
import { getUserWishesFn } from '../services/auth';
import { EditOutlined } from '@ant-design/icons';

const style = { background: '#8742AF', padding: '1px' };
const { Meta } = Card;
const { Title } = Typography;

const MyWishes = ({ history }) => {
  //es importa recordar que user el JSON de la respuesta del back end, no necesariamente un usuario
  const { user } = useContextInfo();

  const [userWishes, setWishes] = useState(null);

  async function getWishes() {
    const wishes = await getUserWishesFn();
    setWishes(wishes);
  }

  useEffect(() => {
    getWishes();
  }, []);

  // console.log(user);
  return user ? (
    <>
      <div style={{ padding: '1rem 3rem' }}>
        <Title level={1}>Wishes</Title>
        <div>
          <p>You can create a wish you wish to buy</p>
          {/* <br /> */}
          <Link to="/createWish">
            <Button type="primary" ghost>
              Create Wish
            </Button>
          </Link>
          <Divider />
        </div>

        <Row gutter={[16, 24]}>
          {userWishes ? (
            userWishes.map((wish) => (
              <Col
                className="gutter-row"
                span={6}
                xs={24}
                sm={24}
                md={8}
                key={wish._id}
              >
                <div style={style}>
                  <Card
                    title={wish.name}
                    actions={[
                      <Link to={`/wish/${wish._id}`}>
                        <EditOutlined key={'edit'} />
                      </Link>,
                    ]}
                    key={wish.id}
                  >
                    <p>
                      <b>Description:</b> {wish.description}
                    </p>
                    <Image src={wish.picture} />
                    {/* este div es para que JSC reconosca el espacio */}
                    <div>
                      <br />
                    </div>
                    <Meta
                      // iterar entre las categorias del wish, mostrarlas como tagas azules
                      //esta description no es el atributoo de un objeto, pertenece al componente Card de antD
                      description=<Tag color="geekblue">{wish.category}</Tag>
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
};

export default MyWishes;
