import React from 'react';
import { Typography, Row, Col, Image, Button, Divider } from 'antd';
import { useContextInfo } from '../hooks/context';
import { Link, Redirect } from 'react-router-dom';

const Profile = ({ history }) => {
  //es importa recordar que user el JSON de la respuesta del back end, no necesariamente un usuario
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
        <p>This is your profile, you can do a lot from here</p>
      </Col>
      <Divider />
      <div>
        <p>You can edit your info and add pic to yor profile </p>
        <br />
        <Link to="/editUser">
          <Button type="primary" block>
            Edit User
          </Button>
        </Link>
      </div>
      <Divider />
      <div>
        <p>You can create a product</p>
        <br />
        <Link to="/createProduct">
          <Button type="primary" block>
            Create a wish
          </Button>
        </Link>
      </div>
      <Divider />
      <div>
        <p>You can create an item</p>
        <br />
        <Button type="primary">
          <Link to="/itemForm">Create an Item</Link>
        </Button>
      </div>
    </Row>
  ) : (
    <Redirect to="/" />
  );
};

export default Profile;
