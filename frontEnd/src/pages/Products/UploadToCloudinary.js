// 1. Import classes
// ==================

import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/base';

// Import any actions required for transformations.
import { fill } from '@cloudinary/base/actions/resize';

export const UploadToCloudinary = ({ image }) => {
  // 2. Set your cloud name
  //========================

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'uploadfilestiendaDeGarage',
    },
  });

  // 3. Get your image
  console.log(image);
  //===================

  // Instantiate a CloudinaryImage object for the image with the public ID, 'sample'.
  const myImage = cld.image('sample');

  // 4. Transform your image
  //=========================

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  myImage.resize(fill().width(250).height(250));

  // 5. Deliver your image
  // =========================

  // Render the image in a React component.
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  );
};
