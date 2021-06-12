import React, { useState } from 'react';

import { Alert, Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
const cloudinaryAPI =
  'https://api.cloudinary.com/v1_1/lab-file-upload2/image/upload';

export const AddImages = ({ setImgUrl }) => {
  const [error, setError] = useState(null);

  // const [urls, setUrls] = useState([]);
  const urls = [];
  async function handleUploadFile(file) {
    try {
      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', 'uploadfilestiendaDeGarage');
      const {
        data: { secure_url },
      } = await axios.post(cloudinaryAPI, data);

      urls.push(secure_url);
      // setImgUrl(null);
    } catch (e) {
      console.dir(e.response.data.message);
      setError(e.response.data.message);
    }
  }
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setpreviewTitle] = useState('');
  const [fileList, setfileList] = useState([]);

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setpreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
    );
  };

  const handleChange = ({ fileList }) => {
    setfileList(fileList);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <>
      <Upload
        // action={handleAction} // HERE
        beforeUpload={handleUploadFile}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange} //
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      {error && <Alert message={error} type="error" />}

      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
};
