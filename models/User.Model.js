const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: String,
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

module.exports = model('User', userSchema);
