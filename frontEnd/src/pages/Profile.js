import React from 'react';
import { Typography, Row, Col, Image, Button, Divider } from 'antd';
import { useContextInfo } from '../hooks/context';
import { Link, Redirect } from 'react-router-dom';

const Profile = ({ history }) => {
  const { user } = useContextInfo();

  return user ? (
    <Row>
      <Col xs={24} sm={24} md={12}>
        <Typography.Title level={3}>
          <Image width={100} src={user.picture} />
          <br></br>
          Name: {user.name}
          <br></br>
          Email: {user.email}
          <br></br>
          {/* ID: {user._id}
          <br></br> */}
        </Typography.Title>
      </Col>
      <Divider />

      <Link to="/editUser">
        <Button type="dashed" block>
          Edit User
        </Button>
      </Link>
      <Divider />
      <Link to="/createProduct">
        <Button type="dashed" block>
          Create a wish
        </Button>
      </Link>
      <Divider />
      <Button type="dashed">
        <Link to="/itemForm">Create an Item</Link>
      </Button>
    </Row>
  ) : (
    <Redirect to="/" />
  );
};

export default Profile;
