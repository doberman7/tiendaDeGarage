const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      default: 'New User',
    },
    email: {
      type: String,
      unique: true,
      required: true,
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

    wishes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Wish',
      },
    ],
    googleId: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model('User', userSchema);
