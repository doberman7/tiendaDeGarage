import React, { useState } from 'react';
import {
  Form,
  Button,
  Input,
  Select,
  // Upload,
  message,
  Alert,
  notification,
} from 'antd';
import { AddImages } from './AddImages.js';
import { AddImage } from './AddImage.js';
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { createProduct } from '../../services/Products';
// import axios from 'axios';

// const cloudinaryAPI =
//   'https://api.cloudinary.com/v1_1/lab-file-upload2/image/upload';

function CreateProductForm({ history }) {
  const [img, setImg] = useState(null);
  // const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const openNotification = (placement, coincidencias) => {
    notification.info({
      message: `Coincidences found ${coincidencias}`,
      description: `We have found ${coincidencias} wishes that may be coincidences of your product`,
      placement,
    });
  };
  async function handleFormSubmit(values) {
    let send = true;
    console.log(img);
    // values.image = img; //here the magic

    //mensajes de campos vacios en form
    Object.entries(values).map((val) => {
      if (val[1] === undefined) {
        message.error(`Add ${val[0].toUpperCase()} field is empty`);
        send = false;
      }
      if (val[0] === 'price') {
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
      console.log(img);
      values.image = img; //here the magic
      let { data } = await createProduct(values);
      if (data.wishCoincidences.length > 0) {
        openNotification('bottomRight', data.wishCoincidences.length);
      } //mensajes de coincidencias
      history.push('/MyProducts');
      message.success(`${data.name} created`);
    }
  }

  //subir imagenes
  // async function handleUploadFile(file) {
  //   try {
  //     setLoading(true);
  //     const data = new FormData();
  //     //esto sube a el archivo a cloudinary
  //     data.append('file', file);
  //     data.append('upload_preset', 'uploadfilestiendaDeGarage');
  //     //esto manda al backend? me manda CORS
  //     const {
  //       data: { secure_url },
  //     } = await axios.post(cloudinaryAPI, data);

  //     setImg(secure_url);
  //     setLoading(false);
  //   } catch (e) {
  //     console.dir(e.response.data.message);
  //     setError(e.response.data.message);
  //   }
  // }

  // const uploadButton = (
  //   <div>
  //     {loading ? <LoadingOutlined /> : <PlusOutlined />}
  //     <div style={{ marginTop: 8 }}>Upload</div>
  //   </div>
  // );

  return (
    <>
      <Form layout="vertical" onFinish={handleFormSubmit}>
        <h1>Create your product!</h1>
        {error && <Alert message={error} type="error" />}
        <Form.Item name="name" label="Title:">
          <Input />
        </Form.Item>

        <Form.Item name="description" label="Description:">
          <Input />
        </Form.Item>

        <Form.Item name="price" label="Price:">
          <Input />
        </Form.Item>

        {/* <Form.Item name="taggs" label="taggs tags:">
          <Select mode="tags" style={{ width: '100%' }} />
        </Form.Item> */}

        {/* <Form.Item name="image" label="Image:">
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={handleUploadFile}
          >
            {img ? (
              <img src={img} alt="pic" style={{ width: '50%' }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </Form.Item> */}

        {/* <Form.Item name="images" label="Images:">
          <AddImages />
        </Form.Item> */}
        <Form.Item name="image" label="Image:">
          <AddImage />
        </Form.Item>

        <Form.Item name="category" label="category:">
          <Select initialvalue="" style={{ width: '20%' }}>
            <Select.Option value="books">Books</Select.Option>
            <Select.Option value="electronics">Electronics</Select.Option>
            <Select.Option value="clothes">Clothes</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>

        <Button type="primary" block size="middle" htmlType="submit">
          Create
        </Button>
      </Form>
    </>
  );
}

export default CreateProductForm;
