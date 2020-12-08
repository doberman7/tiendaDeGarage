import React from 'react';
import { useContextInfo } from '../hooks/context';
import { Redirect } from 'react-router-dom';
import { Carousel } from 'antd';
function onChange(a, b, c) {
  console.log(a, b, c);
}
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Profile = ({ history }) => {
  const { user } = useContextInfo();

  return user ? (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  ) : (
    <Redirect to="/" />
  );
};

export default Profile;
