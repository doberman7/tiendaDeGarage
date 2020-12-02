import React from 'react'
import { Typography, Row, Col,Popconfirm, message } from 'antd'
import { useContextInfo } from '../hooks/context'
import { Redirect } from 'react-router-dom'
import { deleteFn, logoutFn, currentUserFn} from "../services/auth"


const Profile= ({history}) =>{

const { logout } = useContextInfo();

async function DeleteUser(){
  await deleteFn()
}

async function LogoutUser(){
  await logoutFn()
  logout();
}

//DELETE CONFIRMATION POP UP MESSAGES
function confirm(e) {
  console.log(e);
message.success("Account deleted, Sad ,please comeback soon!");
  DeleteUser();//CALLING DELETE FUNCTION AND LOGOUT
  LogoutUser()//DESLOGEAMOS AL USER DESDE
history.push("/")//HACEMOS LOGOUT
}

function cancel(e) {
console.log(e);
message.error('Click on No');
}

//
const { user } = useContextInfo()
return user ? (
<Row>
  <Col xs={24} sm={24} md={12}>
    <Typography.Title level={3}>
      Profile: {user.email}
      <br></br>
      <Popconfirm
            title="Are you sure to delete your account?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <a href="#">Delete</a>
</Popconfirm>
    </Typography.Title>
  </Col>
</Row>) :
<Redirect to='/' />
}

export default Profile
