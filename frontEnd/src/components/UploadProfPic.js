import React, { useState } from 'react'
import axios from "axios";
import { useUserCtx } from '../hooks/context'

function UploadProfilePic() {
  const [image, setImage] = useState(null)
  const [status, setStatus] = useState('Select a file')
  const { addProfilePic } = useUserCtx()

  const handleSubmit = e => {
   e.preventDefault()
   addProfilePic(image)
 }

 const handleUploadPhoto = async ({ target: { files } }) => {
    console.log(files[0]);
    setStatus('Loading...')
    //
    const cloudinaryAPI = 'https://api.cloudinary.com/v1_1/lab-file-upload2/image/upload'

    const data = new FormData()
    data.append("file", files[0])
    data.append("upload_preset","uploadfilesdemo")

    const {data: { secure_url}} = await axios.post(cloudinaryAPI, data)
    console.log(secure_url)
    setImage(secure_url)
    setStatus("Add picture")
}

return(
  <div>
    <form onSubmit={handleSubmit}>
      <input type="file" name= "profile-pic" id="profile-pic" onChange={handleUploadPhoto} />
        <button type= "submit" disable={!image}>{status}</button>
    </form>
  </div>
  )
}

//export default UploadProfPic
