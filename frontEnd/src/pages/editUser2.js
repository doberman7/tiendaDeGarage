import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, Typography, Divider } from 'antd';
import { editProfileFn } from '../services/auth';
import { useContextInfo } from '../hooks/context';
// import UploadProfilePic from '../components/UploadProfPic';
import axios from 'axios';

const { Title } = Typography;

const EditUser = ({ history }) => {
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState('Edit user');
  const { addProfilePic } = useContextInfo();
  const [form] = Form.useForm();
  const { setUserUpdtade } = useContextInfo();
  const [error, setError] = useState(null);
  const { user } = useContextInfo();

  const handleUploadPhoto = async ({ target: { files } }) => {
    // console.log(files[0]);
    setStatus('Loading...');
    //                              CloudName de Cloudinary 👇   👇 Tipo de recurso (si es imagen usan images si es audio o video usan video)
    const cloudinaryAPI =
      'https://api.cloudinary.com/v1_1/lab-file-upload2/image/upload';

    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'uploadfilestiendaDeGarage');

    const {
      data: { secure_url },
    } = await axios.post(cloudinaryAPI, data);
    console.log(secure_url);
    setImage(secure_url);
    setStatus('Add picture');
  };

  async function handleEditUser(userInput) {
    try {
      const { data } = await editProfileFn(userInput);

      setUserUpdtade(true);
      addProfilePic(image);
      //esto redirige a login
      history.push('/profile');
    } catch (e) {
      console.log(e);
      setError(e.response.data.message);
    } finally {
    }
  }
  // console.log(user);
  return user ? (
    <Row>
      <Col span={24}>
        <Title level={1}>Edit User2</Title>
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
          <Form.Item name="picture" label="Picture:">
            <input
              type="file"
              name="picture"
              id="picture"
              onChange={handleUploadPhoto}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            {status}
          </Button>
          <hr />
        </Form>
      </Col>
    </Row>
  ) : (
    <p>cargando...</p>
  );
};

export default EditUser;
