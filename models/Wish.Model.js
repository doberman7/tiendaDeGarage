const { Schema, model } = require('mongoose');

const wishSchema = new Schema(
  {
    idUser: Schema.Types.ObjectId,
    // taggs: [String],
    userCreator: { type: Schema.Types.ObjectId, ref: 'User' },
    name: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: 'The Wish i want',
    },
    category: {
      type: String,
      trim: true,
    },
    picture: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model('Wish', wishSchema);
