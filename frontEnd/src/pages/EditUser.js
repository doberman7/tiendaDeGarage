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
  message,
} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import { editProfileFn } from '../services/auth';
import { useContextInfo } from '../hooks/context';
//hicimos un 1 er intento creando el comopoonente por aparte
// import UploadProfilePic from '../components/UploadProfPic';

const cloudinaryAPI =
  'https://api.cloudinary.com/v1_1/lab-file-upload2/image/upload';

const { Title } = Typography;

const EditUser = ({ history }) => {
  const [form] = Form.useForm();
  const { setUserUpdtade } = useContextInfo();
  const [error, setError] = useState(null);
  //es importa recordar que user el JSON de la respuesta del back end, no necesariamente un usuario
  const { user } = useContextInfo();
  //esto para la imagen
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(null);

  async function handleEditUser(userInput) {
    try {
      //cómo ingresar la imagen la userInput, algo como, picture: image
      userInput.image = img;
      const { data } = await editProfileFn(userInput);

      //señalar que user ha sido actualizado
      setUserUpdtade(true);

      //esto redirige a login
      history.push('/profile');
      message.success('User edited');
    } catch (e) {
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
        <Title level={1}>Editar mi usuario</Title>
        {error && <Alert message={error} type="error" />}
      </Col>
      <Divider />
      <Col span={24}>
        <Form layout="vertical" form={form} onFinish={handleEditUser}>
          <Form.Item name="email" label="Email:">
            <Input placeholder={user.email} />
          </Form.Item>

          <Form.Item name="name" label="Nombre:">
            <Input placeholder={user.name} />
          </Form.Item>

          {user.name === 'test' ? null : (
            <Form.Item name="password" label="Password:">
              <Input.Password />
            </Form.Item>
          )}

          <Form.Item name="image" label="Image:">
            <Upload
              name="avatar"
              listType="picture-card"
              showUploadList={false}
              beforeUpload={handleUploadFile}
              className="avatar-uploader"
            >
              {img ? (
                <img alt="not found" src={img} style={{ width: '100%' }} />
              ) : (
                uploadButton
              )}
            </Upload>
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Editar
          </Button>
        </Form>
      </Col>
    </Row>
  ) : (
    <p>cargando...</p>
  );
};

export default EditUser;
