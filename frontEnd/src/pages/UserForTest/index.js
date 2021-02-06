import React, { useState } from 'react';

import { loginFn } from '../../services/auth';
import { useContextInfo } from '../../hooks/context';
import { useHistory } from 'react-router-dom';
import { Button, message } from 'antd';

const UserForTest = () => {
  const { login } = useContextInfo();
  //   const [error, setError] = useState(null);

  async function testUser() {
    try {
      const { data } = await loginFn({
        name: 'test',
        email: 'test@mail.com',
        password: 'test',
      });
      console.log('DATA:', data);
      login(data);
      useHistory.push('/profile');

      message.success('Welcome');
    } catch (e) {
      //   console.dir(e.response.data.message);
      //   setError(e.response.data.message);
    }
  }

  return (
    <>
      {/* {error && <Alert message={error} type="error" showIcon />} */}
      <Button type="primary" ghost onClick={testUser}>
        User for tests
      </Button>
    </>
  );
};

export default UserForTest;
