import React from 'react';
import { useContextInfo } from '../hooks/context';
import { Redirect } from 'react-router-dom';

const Profile = ({ history }) => {
  const { user } = useContextInfo();

  return user ? <p>created products</p> : <Redirect to="/" />;
};

export default Profile;
