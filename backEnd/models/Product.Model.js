const { Schema, model } = require('mongoose');

const productSchema = new Schema(
  {
    idUser: Schema.Types.ObjectId,
    userCreator: { type: Schema.Types.ObjectId, ref: 'User' },
    name: {
      type: String,
      trim: true,
    },
    picture: {
      type: String,
      default:
        'https://image.shutterstock.com/image-vector/user-avatar-icon-sign-profile-260nw-1145752283.jpg',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Product', productSchema);
