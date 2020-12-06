import React from 'react';
import { Typography, Row, Col, Avatar, Image, Button } from 'antd';
import { useContextInfo } from '../hooks/context';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import UploadProfilePic from '../components/UploadProfPic';

const Profile = ({ history }) => {
  const { user } = useContextInfo();
  // console.log('el USER:', user);

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

      <Link to="/EditUser">
        <Button type="dashed" block>
          Edit user{' '}
        </Button>
      </Link>
    </Row>
  ) : (
    <Redirect to="/" />
  );
};

export default Profile;
