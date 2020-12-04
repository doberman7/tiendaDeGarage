import React from 'react';
import { Typography, Row, Col, Avatar, Image } from 'antd';
import { useContextInfo } from '../hooks/context';
import { Redirect } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

const Profile = ({ history }) => {
  const { user } = useContextInfo();
  console.log('el USER:', user);
  //
  return user ? (
    <Row>
      <Col xs={24} sm={24} md={12}>
        <Typography.Title level={3}>
          <Avatar src={user.picture} />
          <br></br>
          Profile: {user.email}
          <br></br>
          ID: {user._id}
          <br></br>
        </Typography.Title>
      </Col>
    </Row>
  ) : (
    <Redirect to="/" />
  );
};

export default Profile;
//Upload profile pic: <UploadProfPic />
