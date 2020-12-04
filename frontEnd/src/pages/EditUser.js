import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, Typography, Divider } from 'antd';
import { editProfileFn } from '../services/auth';
import { useContextInfo } from '../hooks/context';

const { Title } = Typography;

const EditUser = ({ history }) => {
  const [form] = Form.useForm();
  const { edituser } = useContextInfo();
  const [error, setError] = useState(null);
  const { user } = useContextInfo();

  async function handleEditUser(userInput) {
    try {
      const { data } = await editProfileFn(userInput);

      edituser(data);
      //esto redirige a login
      history.push('/login');
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
          <Button type="primary" htmlType="submit">
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
