import React, { useState } from 'react';
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Typography,
  Divider,
  Alert,
  Select,
  message,
  notification,
} from 'antd';

import { createWishFn } from '../services/auth';
import { useContextInfo } from '../hooks/context';
import { AddImage } from './AddImage.js';

const { Title } = Typography;

const CreateWish = ({ history }) => {
  const [imgUrl, setImgUrl] = useState([]);
  const [form] = Form.useForm();
  const { setUserUpdtade } = useContextInfo();
  const [error, setError] = useState(null);
  //es importa recordar que user el JSON de la respuesta del back end, no necesariamente un usuario
  const { user } = useContextInfo();
  //esto para la imagen

  const openNotification = (placement, coincidencias) => {
    notification.info({
      message: `Coincidences found ${coincidencias}`,
      description: `We have found ${coincidencias} products that may be coincidences of your wish`,
      placement,
    });
  };
  async function handleCreateWish(userInput) {
    try {
      //para ingresar la imagen  a la userInput
      userInput.image = imgUrl;

      const { data } = await createWishFn(userInput);
      //señalar que user ha sido actualizado
      setUserUpdtade(true);
      if (data.productCoincidences.length > 0) {
        openNotification('bottomRight', data.productCoincidences.length);
      } //mensajes de coincidencias
      history.push('/MyWishes');
      message.success(`${data.name} created`);
    } catch (e) {
      setError(e.response.data.message);
    }
  }

  return user ? (
    <Row>
      <Col span={24}>
        <Title level={1}>Create Wish</Title>

        <p>Fill the form to create a wish you desire</p>
        {error && <Alert message={error} type="error" />}
      </Col>
      <Divider />
      <Col span={24}>
        <Form layout="vertical" form={form} onFinish={handleCreateWish}>
          <Form.Item name="name" label="Name:">
            <Input placeholder={'add a name to you Wish'} />
          </Form.Item>
          <Form.Item name="description" label="Description:">
            <Input placeholder={'Add description'} />
          </Form.Item>
          {/* <Form.Item name="taggs" label="taggs tags:">
            <Select mode="tags" style={{ width: '100%' }} />
          </Form.Item> */}
          <Form.Item name="image" label="Image:">
            <AddImage setImgUrl={(imgUrl) => setImgUrl(imgUrl)} />
          </Form.Item>
          <Form.Item name="category" label="category:">
            <Select initialvalue="" style={{ width: '20%' }}>
              <Select.Option value="books">Books</Select.Option>
              <Select.Option value="electronics">Electronics</Select.Option>
              <Select.Option value="clothes">Clothes</Select.Option>
              <Select.Option value="other">Other</Select.Option>
            </Select>
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Create Wish
          </Button>
        </Form>
      </Col>
    </Row>
  ) : (
    <p>cargando...</p>
  );
};

export default CreateWish;
