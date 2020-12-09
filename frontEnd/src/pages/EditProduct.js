import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useContextInfo } from '../hooks/context';
import { editProductFn } from '../services/auth';
import { getProductDetailsFn } from '../services/auth';
import { Form, Button, Input, InputNumber, Select, Upload } from 'antd';

function EditProduct({
  match: {
    params: { productId },
  },
}) {
  const [form] = Form.useForm();
  const history = useHistory();
  const [error, setError] = useState(null);
  const [product, setItem] = useState(null);

  useEffect(() => {
    async function getDetails() {
      const { data } = await getProductDetailsFn(productId);
      console.log(data);
      setItem();
    }
    getDetails();
  }, []);

  async function handleEditProduct(values) {
    try {
      await editProductFn(product._id, values);
      history.push('/viewProducts');
    } catch (e) {
      console.log(e);
      setError(e.response.data.message);
    }
  }

  return (
    <>
      <h1>Update Product</h1>
      <Form form={form} layout="vertical" onFinish={handleEditProduct}>
        <Form.Item name="name" label="Name:">
          <Input placeholder={product} />
        </Form.Item>

        <Form.Item name="description" label="Description:">
          <Input placeholder={product} />
        </Form.Item>

        <Button type="primary" block size="middle" htmlType="submit">
          Update
        </Button>
      </Form>
    </>
  );
}

export default EditProduct;
