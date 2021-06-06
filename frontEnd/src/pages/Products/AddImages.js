import React, { useState } from 'react';

import { Alert, Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
const cloudinaryAPI =
  'https://api.cloudinary.com/v1_1/lab-file-upload2/image/upload';

export const AddImages = ({ setImgUrl }) => {
  const [img, setImg] = useState(null);
  // const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  async function handleUploadFile(file) {
    try {
      // setLoading(true);

      const data = new FormData();
      //esto sube a el archivo a cloudinary
      data.append('file', file);
      data.append('upload_preset', 'uploadfilestiendaDeGarage');
      //esto manda al backend? me manda CORS
      const {
        data: { secure_url },
      } = await axios.post(cloudinaryAPI, data);
      setImgUrl(secure_url);
      setImg(secure_url);
      console.log(data);
      // setLoading(false);
    } catch (e) {
      console.dir(e.response.data.message);
      setError(e.response.data.message);
    }
  }

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  class PicturesWall extends React.Component {
    state = {
      previewVisible: false,
      previewImage: '',
      previewTitle: '',
      fileList: [],
    };

    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async (file) => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }

      this.setState({
        previewImage: file.url || file.preview,
        previewVisible: true,
        previewTitle:
          file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
      });
    };

    handleChange = ({ fileList }) => this.setState({ fileList });

    render() {
      const { previewVisible, previewImage, fileList, previewTitle } =
        this.state;
      const uploadButton = (
        <div>
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      );
      return (
        <>
          <Upload
            // action={() => console.log('ACTION', this.state)}
            // beforeUpload={() => console.log('BEFORE', this.state)}
            beforeUpload={handleUploadFile}
            listType="picture-card"
            fileList={fileList}
            onPreview={this.handlePreview}
            // onChange={this.handleChange}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
          {error && <Alert message={error} type="error" />}

          <Modal
            visible={previewVisible}
            title={previewTitle}
            footer={null}
            onCancel={this.handleCancel}
          >
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        </>
      );
    }
  }

  return (
    <>
      <PicturesWall />
    </>
  );
};
