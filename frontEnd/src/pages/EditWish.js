import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import { useContextInfo } from '../hooks/context';
import { editWishFn } from '../services/auth';
import { getWishDetailsFn, deleteWishFn } from '../services/auth';
import { Form, Button, Input, Alert, Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
const cloudinaryAPI =
  'https://api.cloudinary.com/v1_1/lab-file-upload2/image/upload';

function EditWish({
  match: {
    params: { wishId },
  },
}) {
  const [form] = Form.useForm();
  let history = useHistory();
  const [error, setError] = useState(null);
  const [wish, setWish] = useState(null);
  //esto para la imagen
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    async function getDetails() {
      const data = await getWishDetailsFn(wishId);

      setWish(data);
    }
    getDetails();
  }, []);

  async function handleEditWish(values) {
    try {
      values.image = img;

      await editWishFn(wish._id, values);
      history.push('/MyWishes');
      message.success('Wish edited');
    } catch (e) {
      console.log(e.response.data.message);
      setError(e.response.data.message);
    }
  }
  async function handleUploadFile(file) {
    setLoading(true);
    const data = new FormData();

    data.append('file', file);
    data.append('upload_preset', 'uploadfilestiendaDeGarage');

    const {
      data: { secure_url },
    } = await axios.post(cloudinaryAPI, data);

    setImg(secure_url);
    setLoading(false);
  }
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  async function handleDelete() {
    console.log(wishId);
    await deleteWishFn(wishId);
    history.push('/MyWishes');
    message.success('Wish deleted');
  }
  return (
    <>
      <h1>Update Wish</h1>
      {error && <Alert message={error} type="error" />}
      <Form form={form} layout="vertical" onFinish={handleEditWish}>
        <Form.Item name="name" label="Name:">
          <Input placeholder={wish ? wish.name : 'cargando'} />
        </Form.Item>

        <Form.Item name="description" label="Description:">
          <Input placeholder={wish ? wish.description : 'cargando'} />
        </Form.Item>

        <Form.Item name="image" label="Image:">
          <Upload
            name="avatar"
            listType="picture-card"
            showUploadList={false}
            beforeUpload={handleUploadFile}
            className="avatar-uploader"
          >
            {img ? (
              <img src={img} style={{ width: '100%' }} alt="no pic" />
            ) : (
              uploadButton
            )}
          </Upload>
        </Form.Item>

        <Button type="primary" block size="middle" htmlType="submit">
          Update
        </Button>
      </Form>
      <br />
      <Button
        type="ghost"
        size="small"
        htmlType="submit"
        onClick={handleDelete}
        danger
        block
      >
        Delete
      </Button>
    </>
  );
}

export default EditWish;
