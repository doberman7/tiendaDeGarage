import React, { useState } from 'react';

import {
  Form,
  Button,
  Input,
  Select,
  Upload,
  message,
  Alert,
  notification,
} from 'antd';
import axios from 'axios';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const cloudinaryAPI =
  'https://api.cloudinary.com/v1_1/lab-file-upload2/image/upload';

const AddImages = () => {
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
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
    </>
  );
};

export default AddImages;
