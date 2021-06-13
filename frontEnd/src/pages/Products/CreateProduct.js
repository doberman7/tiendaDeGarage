import React, { useState } from 'react';
import {
  Form,
  Button,
  Input,
  Select,
  message,
  Alert,
  notification,
} from 'antd';
import { AddImages } from './AddImages.js';
import { createProduct } from '../../services/Products';

function CreateProductForm({ history }) {
  const [imgUrl, setImgUrl] = useState(null);

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

    //stablish the image Url from <AddImages>,  need to update img to ut in the values and send it to the Db
    values.image = imgUrl;

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
      let { data } = await createProduct(values);
      if (data.wishCoincidences.length > 0) {
        openNotification('bottomRight', data.wishCoincidences.length);
      } //mensajes de coincidencias
      history.push('/MyProducts');
      message.success(`${data.name} created`);
    }
  }

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

        <Form.Item name="image" label="Image:">
          <AddImages setImgUrl={(imgUrl) => setImgUrl(imgUrl)} />
          {/* {imgUrl ? imgUrl : 'no'} */}
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
