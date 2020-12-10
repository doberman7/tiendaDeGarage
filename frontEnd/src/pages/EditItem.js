import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useContextInfo } from '../hooks/context';
import {editItem} from "../services/Items"
import {getItemDetails} from "../services/Items"
import {deleteItem} from "../services/Items"
import { Form, Button, Input, InputNumber, Select, Upload,message,Alert } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import axios from 'axios'

const cloudinaryAPI = 'https://api.cloudinary.com/v1_1/lab-file-upload2/image/upload'

function EditItem({match: {params:{itemId}}
}) {

 const [form] = Form.useForm()
 const history = useHistory()
 const [error, setError] = useState(null);
 const [item, setItem] = useState(null);
 const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(null);
useEffect(() => {
  async function getDetails() {
    console.log(item)
    const {data} = await getItemDetails(itemId)
    setItem(data)

  }
  getDetails()
},[])


  async function handleEditItem(values) {
    let send = true
    Object.entries(values).map(val => {
      if (val[1] === undefined){
        message.error(`add ${val[0].toUpperCase()} field is empty`)
          send = false
      }
      console.log(send)
    })
    if(send){
      try {
    values.image = img
    await editItem(itemId,values)

    history.push("/MyItems")
  } catch (e) {
    console.log(e)
    setError(e.response.data.message)
    }
  }
}

async function handleUploadFile(file){
  try {
  setLoading(true);
  const data = new FormData()
  //esto sube a el archivo a cloudinary
  data.append("file",file)
  data.append("upload_preset","uploadfilestiendaDeGarage")
  //esto manda al backend? me manda CORS
const  {data: { secure_url } } = await axios.post(cloudinaryAPI, data);

  setImg(secure_url)
  setLoading(false)
}catch (e){
  console.log(e)
  setError(e.response.data.message)

  }
}

const uploadButton = (
  <div>
    {loading ? <LoadingOutlined /> : <PlusOutlined />}
    <div style={{ marginTop: 8 }}>Upload</div>
  </div>
);


async function handleDelete(){
  await deleteItem(itemId)
  history.push("/MyItems")
}

    return item ?  (
  <>
      <Form form={form} layout="vertical" onFinish={handleEditItem}>

        <Form.Item name="title" label="Title:">
          <Input placeholder={item.title} />
        </Form.Item>

        <Form.Item name="description" label="Description:">
          <Input placeholder={item.description}/>
        </Form.Item>

        <Form.Item name="price" label="Price:">
          <Input placeholder={item.price}/>
        </Form.Item>

        <Form.Item  name="status" label="Status:">
        <Select initialvalue="available"  style= {{width:"20%"}}>
          <Select.Option value ="available">available</Select.Option>
          <Select.Option value ="sold">Sold</Select.Option>
        </Select>
        </Form.Item>

        <Form.Item name="category" label="Category tags:">
          <Select mode="tags" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item name="image" label="Image:">
              <Upload
                name="image"
                showUploadList={false}
                beforeUpload={handleUploadFile}
              >
                {img ? <img src={img} style={{ width: '50%' }} /> : uploadButton}
              </Upload>
            </Form.Item>

        <Button type="primary" block size="middle" htmlType="submit">Update</Button>
        <Link to = "/MyItems">
        <Button type="primary" size="small" htmlType="submit">Back</Button>
        <br />
          <Button
            type="ghost"
            size="small"
             htmlType="submit"
             onClick ={handleDelete}
             danger
             block >Delete</Button>
        </Link>
      </Form>
    </>
):(
  <div>
    <p>...Loading</p>
  </div>
  //condicional
)
  }

export default EditItem