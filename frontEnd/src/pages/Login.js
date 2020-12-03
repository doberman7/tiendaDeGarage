import React from 'react';
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
} from 'antd';
import { loginFn } from '../services/auth';
import { useContextInfo } from '../hooks/context';

const { Title } = Typography;

const Login = ({ history }) => {
  const [form] = Form.useForm();
  const { login } = useContextInfo();

  async function handleSubmit(userInput) {
    try {
      // ESTE ES EL export const loginFn = (userInfo) => authService.post('/login', userInfo); authService USA AXIOS

      const { data } = await loginFn(userInput);
      // console.log('DATA:', data);
      login(data);
      history.push('/profile');
    } catch (e) {
      //cacha message de back
      console.dir(e.response.data.message);
    }
  }

  const mensaje = () => {
    //condicion
  };

  const success = () => {
    message.success('This is a success message');
  };

  const error = () => {
    message.error('This is an error message');
  };

  return (
    <Row>
      <Col span={24}>
        <Title level={1}>Login</Title>
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
          <Button type="primary" block htmlType="submit" onClick={mensaje}>
            Login
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
