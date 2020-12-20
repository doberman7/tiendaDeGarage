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
  Modal,
} from 'antd';
import { signupFn, loginFn } from '../services/auth';
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
  //conteo para cerrar el modal
  function countDown() {
    let secondsToGo = 5;
    const modal = Modal.success({
      title: 'W E L C O M E',
      content: `This window will close in  ${secondsToGo}`,
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      modal.update({
        content: `This window will close in ${secondsToGo} .`,
      });
      if (secondsToGo <= 0) {
        modal.destroy();
      }
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      modal.destroy();
    }, secondsToGo * 1000);
  }
  async function handleSubmit(userInput) {
    try {
      //con los servicios hacer signup
      await signupFn(userInput);
      //con los servicios hacer login y la response será data
      const { data } = await loginFn(userInput);
      //usar el signup del context
      signup(data);

      //esto redirige a welcome
      history.push('/welcome');

      countDown();
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
          <Button type="primary" htmlType="submit" block>
            Signup
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
              <img
                alt=""
                src="google_logo.png"
                style={{ width: '20%', height: 'auto' }}
              />
            </a>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default Signup;
