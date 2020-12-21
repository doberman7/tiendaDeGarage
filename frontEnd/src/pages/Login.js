import React, { useState } from 'react';

import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Typography,
  Divider,
  message,
  Space,
  Alert,
} from 'antd';
import { loginFn } from '../services/auth';
import { useContextInfo } from '../hooks/context';
import { GoogleOutlined } from '@ant-design/icons';

const { Title } = Typography;
const googleUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/google'
    : '/google';

const Login = ({ history }) => {
  const [form] = Form.useForm();
  const { login } = useContextInfo();
  const [error, setError] = useState(null);

  async function handleSubmit(userInput) {
    try {
      // ESTE ES EL export const loginFn = (userInfo) => authService.post('/login', userInfo); authService USA AXIOS

      const { data } = await loginFn(userInput);
      // console.log('DATA:', data);
      login(data);
      history.push('/profile');
      message.success('Welcome');
    } catch (e) {
      //cacha message de back
      console.dir(e.response.data.message);
      setError(e.response.data.message);
    }
  }

  return (
    <Row>
      <Col span={24}>
        <Title level={1}>Login</Title>
        {error && <Alert message={error} type="error" showIcon />}
      </Col>
      <Divider />
      <Col span={24}>
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Form.Item name="email" label="Email:">
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password:">
            <Input.Password />
          </Form.Item>
          <Button type="primary" block htmlType="submit">
            Login
          </Button>
          <Divider />
          <div
            style={{
              'text-align': 'center',
            }}
          >
            or
            <Divider />
            <a href={googleUrl}>
              <GoogleOutlined />
              oogle
            </a>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
