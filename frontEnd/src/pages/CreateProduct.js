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
} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import { createProductFn } from '../services/auth';
import { useContextInfo } from '../hooks/context';

const cloudinaryAPI =
  'https://api.cloudinary.com/v1_1/lab-file-upload2/image/upload';

const { Title } = Typography;

const CreateProduct = ({ history }) => {
  const [form] = Form.useForm();
  const { setUserUpdtade } = useContextInfo();
  const [error, setError] = useState(null);
  const { user } = useContextInfo();
  //esto para la imagen
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(null);

  async function handleCreateProduct(userInput) {
    try {
      //cómo ingresar la imagen la userInput, algo como, picture: image
      userInput.image = img;
      const { data } = await createProductFn(userInput);

      //señalar que user ha sido actualizado
      setUserUpdtade(true);

      //esto redirigira a products created page
      // history.push('/profile');
      history.push('/viewProducts');
    } catch (e) {
      console.log(e);
      setError(e.response.data.message);
    } finally {
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
        <Title level={1}>Create Product</Title>
        {error && <p>{error}</p>}
        <p>Hi {user.email} fill the form to create a product you desire</p>
      </Col>
      <Divider />
      <Col span={24}>
        <Form layout="vertical" form={form} onFinish={handleCreateProduct}>
          <Form.Item name="name" label="Name:">
            <Input placeholder={'add a name to you Product'} />
          </Form.Item>
          <Form.Item name="description" label="Description:">
            <Input placeholder={'Add description'} />
          </Form.Item>
          <Form.Item name="image" label="Image:">
            <Upload
              name="image"
              showUploadList={false}
              beforeUpload={handleUploadFile}
            >
              {img ? <img src={img} style={{ width: '100%' }} /> : uploadButton}
            </Upload>
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Create Product
          </Button>
        </Form>
      </Col>
    </Row>
  ) : (
    <p>cargando...</p>
  );
};

export default CreateProduct;
