import React, { useState } from 'react';
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Typography,
  Divider,
  Upload,
  Alert,
  Select,
  message,
  notification,
} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import { createWishFn } from '../services/auth';
import { useContextInfo } from '../hooks/context';

const cloudinaryAPI =
  'https://api.cloudinary.com/v1_1/lab-file-upload2/image/upload';

const { Title } = Typography;

const CreateWish = ({ history }) => {
  const [form] = Form.useForm();
  const { setUserUpdtade } = useContextInfo();
  const [error, setError] = useState(null);
  //es importa recordar que user el JSON de la respuesta del back end, no necesariamente un usuario
  const { user } = useContextInfo();
  //esto para la imagen
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(null);

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
      userInput.image = img;
      const { data } = await createWishFn(userInput);
      //señalar que user ha sido actualizado
      setUserUpdtade(true);
      if (data.productCoincidences.length > 0) {
        openNotification('bottomRight', data.productCoincidences.length);
      } //mensajes de coincidencias
      history.push('/MyWishes');
      message.success(`${data.name} created`);
    } catch (e) {
      console.log(e);
      setError(e.response.data.message);
    }
  }
  async function handleUploadFile(file) {
    setLoading(true);
    const data = new FormData();

    data.append('file', file);
    data.append('upload_preset', 'uploadfilestiendaDeGarage');

    const {
      data: { secure_url },
    } = await axios.post(cloudinaryAPI, data);

    setImg(secure_url);
    setLoading(false);
  }
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  // console.log(user);
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
            <Upload
              name="avatar"
              listType="picture-card"
              showUploadList={false}
              beforeUpload={handleUploadFile}
            >
              {img ? <img src={img} style={{ width: '100%' }} /> : uploadButton}
            </Upload>
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
