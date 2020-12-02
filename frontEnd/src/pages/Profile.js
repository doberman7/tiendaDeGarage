import React, { useState } from 'react';
import { Typography, Row, Col, Popconfirm, message, Button, Modal } from 'antd';
import { useContextInfo } from '../hooks/context';
import { Redirect } from 'react-router-dom';

function confirm(e) {
  console.log(e);
  message.success('Click on Yes');
}

function cancel(e) {
  console.log(e);
  message.error('Click on No');
}

const Profile = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const { user } = useContextInfo();
  return user ? (
    <Row>
      <Col xs={24} sm={24} md={12}>
        <Typography.Title level={3}>
          Profile: {user.email}
          <br></br>
          ID: {user}
          <br></br>
          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <a href="#">Delete</a>
          </Popconfirm>
        </Typography.Title>

        <Button type="primary" onClick={showModal}>
          Edit User
        </Button>
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Button type="dashed">Edit user</Button>
          <p>Aquii el formulario</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </Col>
    </Row>
  ) : (
    <Redirect to="/" />
  );
};

export default Profile;
