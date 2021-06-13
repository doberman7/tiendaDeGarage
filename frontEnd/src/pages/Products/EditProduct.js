import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  editProduct,
  getProductDetails,
  deleteProduct,
} from '../../services/Products';

import { Form, Button, Input, Select, Upload, message, Alert } from 'antd';
import { AddImages } from './AddImages';

function EditProduct({
  match: {
    params: { productId },
  },
}) {
  const [imgUrl, setImgUrl] = useState(3);
  const [form] = Form.useForm();
  const history = useHistory();
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function getDetails() {
      // console.log(product);
      const { data } = await getProductDetails(productId);
      setProduct(data);
    }
    getDetails();
  }, []);

  async function handleEditProduct(values) {
    let send = true;
    console.log(imgUrl);
    values.image = imgUrl;
    //esto es usado para el los mensajes de error dde la forma
    Object.entries(values).map((val) => {
      if (val[1] === undefined) {
        setError('All the fields must be filled');
        message.error(`add ${val[0].toUpperCase()} field is empty`);
        send = false;
      }
      if (val[0] === 'price') {
        // setError('Use only numbers on price');
        message.warning('Price uses only numbers');
        let valor = Number(val[1]);
        if (typeof valor !== 'number') {
          send = false;
        }
      }
    });
    if (send) {
      try {
        await editProduct(productId, values);

        history.push('/MyProducts');
        message.success('Product edited');
      } catch (e) {
        console.log(e);
        setError(e.response.data.message);
      }
    }
  }

  async function handleDelete() {
    await deleteProduct(productId);
    history.push('/MyProducts');
    message.success('Product deleted');
  }

  return product ? (
    <>
      <Form form={form} layout="vertical" onFinish={handleEditProduct}>
        <h1>Edit your product</h1>
        {error && <Alert message={error} type="error" />}
        <Form.Item name="name" label="Title:">
          <Input placeholder={product.name} />
        </Form.Item>

        <Form.Item name="description" label="Description:">
          <Input placeholder={product.description} />
        </Form.Item>

        <Form.Item name="price" label="Price:">
          <Input placeholder={product.price} />
        </Form.Item>

        <Form.Item name="category" label="category:">
          <Select initialvalue="available" style={{ width: '20%' }}>
            <Select.Option value="books">Books</Select.Option>
            <Select.Option value="electronics">Electronics</Select.Option>
            <Select.Option value="clothes">Clothes</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="taggs" label="taggs tags:">
          <Select mode="tags" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item name="image" label="Image:">
          <AddImages setImgUrl={(imgUrl) => setImgUrl(imgUrl)} />
          {imgUrl ? '' : 'loading'}
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

export default EditProduct;
