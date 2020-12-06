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
import { editProfileFn } from '../services/auth';
import { useContextInfo } from '../hooks/context';
import UploadProfilePic from '../components/UploadProfPic';

const cloudinaryAPI =
  'https://api.cloudinary.com/v1_1/lab-file-upload2/image/upload';

const { Title } = Typography;

const EditUser = ({ history }) => {
  const [form] = Form.useForm();
  const { setUserUpdtade } = useContextInfo();
  const [error, setError] = useState(null);
  const { user } = useContextInfo();
  //esto para la imagen
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(null);

  async function handleEditUser(userInput) {
    try {
      //cómo ingresar la imagen la userInput, algo como, picture: image
      const { data } = await editProfileFn(userInput);

      setUserUpdtade(true);
      //esto redirige a login
      history.push('/profile');
    } catch (e) {
      console.log(e);
      setError(e.response.data.message);
    } finally {
    }
  }
  async function handleUploadFile(file) {
    // console.log(info);
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

  console.log(user);
  return user ? (
    <Row>
      <Col span={24}>
        <Title level={1}>Edit User</Title>
        {error && <p>{error}</p>}
      </Col>
      <Divider />
      <Col span={24}>
        <Form layout="vertical" form={form} onFinish={handleEditUser}>
          <Form.Item name="email" label="Email:">
            <Input placeholder={user.email} />
          </Form.Item>
          <Form.Item name="password" label="Password:">
            <Input.Password />
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
            EditUser
          </Button>
        </Form>
      </Col>
    </Row>
  ) : (
    <p>cargando...</p>
  );
};

export default EditUser;
