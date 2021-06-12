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
      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', 'uploadfilestiendaDeGarage');
      const {
        data: { secure_url },
      } = await axios.post(cloudinaryAPI, data);
      console.log(data);

      // setImgUrl(secure_url);
      // setImg(secure_url);
    } catch (e) {
      console.dir(e.response.data.message);
      setError(e.response.data.message);
    }
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
            action={handleUploadFile} // HERE
            // beforeUpload={handleUploadFile}
            listType="picture-card"
            fileList={fileList}
            onPreview={this.handlePreview}
            onChange={this.handleChange} //
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
