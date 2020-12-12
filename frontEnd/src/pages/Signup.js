import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, Typography, Divider } from 'antd';
import { signupFn } from '../services/auth';
import { useContextInfo } from '../hooks/context';

const { Title } = Typography;
const googleUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/google'
    : '/google';

const Signup = ({ history }) => {
  const [form] = Form.useForm();
  const { signup } = useContextInfo();
  const [error, setError] = useState(null);
  async function handleSubmit(userInput) {
    try {
      const { data } = await signupFn(userInput);

      signup(data);
      //esto redirige a login
      history.push('/login');
    } catch (e) {
      console.log(e);
      setError(e.response.data.message);
    } finally {
    }
  }

  return (
    <Row>
      <Col span={24}>
        <Title level={1}>Signup</Title>
        {error && <p>{error}</p>}
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
          <Button type="primary" htmlType="submit">
            Signup
          </Button>
          <Divider />
          <a href={googleUrl}>
            <img
              alt=""
              src="https://www.drupal.org/files/issues/2020-01-26/google_logo.png"
              style={{ width: '20%', height: 'auto' }}
            />
          </a>
        </Form>
      </Col>
    </Row>
  );
};

export default Signup;
