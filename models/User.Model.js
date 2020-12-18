const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    googleId: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: String,
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Item',
      },
    ],
    name: {
      type: String,
      trim: true,
      default: 'New User',
    },
    picture: {
      type: String,
      default:
        'https://image.shutterstock.com/image-vector/user-avatar-icon-sign-profile-260nw-1145752283.jpg',
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model('User', userSchema);
