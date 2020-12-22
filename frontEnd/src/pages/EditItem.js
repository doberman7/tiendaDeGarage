import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useContextInfo } from '../hooks/context';
import { editItem, getItemDetails, deleteItem } from '../services/Items';

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
import { Link } from 'react-router-dom';
import axios from 'axios';

const cloudinaryAPI =
  'https://api.cloudinary.com/v1_1/lab-file-upload2/image/upload';

function EditItem({
  match: {
    params: { itemId },
  },
}) {
  const [form] = Form.useForm();
  const history = useHistory();
  const [error, setError] = useState(null);
  const [item, setItem] = useState(null);
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    async function getDetails() {
      console.log(item);
      const { data } = await getItemDetails(itemId);
      setItem(data);
    }
    getDetails();
  }, []);

  async function handleEditItem(values) {
    let send = true;
    //esto es usado para el los mensajes de error dde la forma
    Object.entries(values).map((val) => {
      if (val[1] === undefined) {
        message.error(`add ${val[0].toUpperCase()} field is empty`);
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
      try {
        values.image = img;
        await editItem(itemId, values);

        history.push('/MyItems');
        message.success('Item edited');
      } catch (e) {
        console.log(e);
        setError(e.response.data.message);
      }
    }
  }

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
      console.log(e);
      setError(e.response.data.message);
    }
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  async function handleDelete() {
    await deleteItem(itemId);
    history.push('/MyItems');
    message.success('Item deleted');
  }

  return item ? (
    <>
      <Form form={form} layout="vertical" onFinish={handleEditItem}>
        <h1>Edit your item</h1>
        {error && <Alert message={error} type="error" />}
        <Form.Item name="title" label="Title:">
          <Input placeholder={item.title} />
        </Form.Item>

        <Form.Item name="description" label="Description:">
          <Input placeholder={item.description} />
        </Form.Item>

        <Form.Item name="price" label="Price:">
          <Input placeholder={item.price} />
        </Form.Item>

        <Form.Item name="status" label="Status:">
          <Select initialvalue="available" style={{ width: '20%' }}>
            <Select.Option value="available">available</Select.Option>
            <Select.Option value="sold">Sold</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="categorys" label="categorys tags:">
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

        <Button type="primary" block size="middle" htmlType="submit">
          Update
        </Button>
        <p></p>
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
  ) : (
    <div>
      <p>...Loading</p>
    </div>
    //condicional
  );
}

export default EditItem;
