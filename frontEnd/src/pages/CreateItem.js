import React, { useState, useEffect } from 'react';
import {
  Form,
  Button,
  Input,
  InputNumber,
  Select,
  Upload,
  message,
  Alert,
} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { createItem } from '../services/Items';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const cloudinaryAPI =
  'https://api.cloudinary.com/v1_1/lab-file-upload2/image/upload';
const { Option } = Select;

function CreateItemForm({ history }) {
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  async function handleFormSubmit(values) {
    let send = true;
    //mensajes de campos vacios en form
    Object.entries(values).map((val) => {
      if (val[1] === undefined) {
        message.error(`Add ${val[0].toUpperCase()} field is empty`);
        send = false;
      }
      if (val[0] == 'price') {
        setError(
          'All the fields must be filled and the price must have numbers,not letters!'
        );
        let valor = Number(val[1]);
        if (typeof valor !== 'number') {
          send = false;
        }
      }
    });
    if (send) {
      values.image = img;
      await createItem(values);
      history.push('/MyItems');
    }
  }

  //subir imagenes
  async function handleUploadFile(file) {
    try {
      setLoading(true);
      const data = new FormData();
      //esto sube a el archivo a cloudinary
      data.append('file', file);
      data.append('upload_preset', 'uploadfilestiendaDeGarage');
      //esto manda al backend? me manda CORS
      const {
        data: { secure_url },
      } = await axios.post(cloudinaryAPI, data);

      setImg(secure_url);
      setLoading(false);
    } catch (e) {
      console.dir(e.response.data.message);
      setError(e.response.data.message);
    }
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <Form layout="vertical" onFinish={handleFormSubmit}>
        <h1>Create your item!</h1>
        {error && <Alert message={error} type="error" />}
        <Form.Item name="title" label="Title:">
          <Input />
        </Form.Item>

        <Form.Item name="description" label="Description:">
          <Input />
        </Form.Item>

        <Form.Item name="price" label="Price:">
          <Input />
        </Form.Item>

        <Form.Item name="category" label="Category tags:">
          <Select mode="tags" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item name="image" label="Image:">
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={handleUploadFile}
          >
            {img ? <img src={img} style={{ width: '50%' }} /> : uploadButton}
          </Upload>
        </Form.Item>

        <Form.Item name="status" label="Status:">
          <Select initialvalue="available" style={{ width: '20%' }}>
            <Select.Option value="available">Available</Select.Option>
            <Select.Option value="sold">Sold</Select.Option>
          </Select>
        </Form.Item>

        <Button type="primary" block size="middle" htmlType="submit">
          Create
        </Button>
      </Form>
    </>
  );
}

export default CreateItemForm;
