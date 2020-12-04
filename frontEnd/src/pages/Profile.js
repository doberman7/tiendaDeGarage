import React from 'react';
import { Typography, Row, Col } from 'antd';
import { useContextInfo } from '../hooks/context';
import { Redirect } from 'react-router-dom';
//import UploadProfPic from "./UploadProfPic"

const Profile = ({ history }) => {
  const { user } = useContextInfo();

  //
  return user ? (
    <Row>
      <Col xs={24} sm={24} md={12}>
        <Typography.Title level={3}>
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
