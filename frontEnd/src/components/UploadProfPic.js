import React, { useState } from 'react';
import axios from 'axios';
import { useContextInfo } from '../hooks/context';

function UploadProfilePic() {
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState('Select a file');
  const { addProfilePic } = useContextInfo();

  const handleSubmit = (e) => {
    e.preventDefault();
    addProfilePic(image);
  };

  const handleUploadPhoto = async ({ target: { files } }) => {
    // console.log(files[0]);
    setStatus('Loading...');
    //                              CloudName de Cloudinary 👇   👇 Tipo de recurso (si es imagen usan images si es audio o video usan video)
    // const cloudinaryAPI = 'https://api.cloudinary.com/v1_1/joss/image/upload';
    const cloudinaryAPI =
      'https://api.cloudinary.com/v1_1/lab-file-upload2/image/upload';
    //DOCS: https://cloudinary.com/documentation/admin_api

    //SECURE?
    // const cloudinaryAPI =' https://812138139599744:79ZooHQrF1QglScVMcFmYviOzn0@api.cloudinary.com/v1_1/lab-file-upload2/resources/image';
    //PRESETS FOLDER:  uploadfilesfolder
    //PRESETA: NAME: uploadfilespresetname
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'uploadfilestiendaDeGarage');

    const {
      data: { secure_url },
    } = await axios.post(cloudinaryAPI, data);
    console.log(secure_url);
    setImage(secure_url);
    setStatus('Add picture');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="profile-pic"
          id="profile-pic"
          onChange={handleUploadPhoto}
        />
        <button type="submit" disabled={!image}>
          {status}
        </button>
      </form>
    </div>
  );
}

export default UploadProfilePic;
