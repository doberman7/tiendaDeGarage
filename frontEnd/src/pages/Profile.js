import React from 'react';
import { Typography, Row, Col, Avatar, Button, Divider } from 'antd';
import { useContextInfo } from '../hooks/context';
import { Link, Redirect } from 'react-router-dom';

const Profile = ({ history }) => {
  const { user } = useContextInfo();

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
      <Button type="dashed"><Link to ="/itemForm">createItem</Link></Button>

    </Row>
  ) : (
    <Redirect to="/" />
  );
};

export default Profile;
