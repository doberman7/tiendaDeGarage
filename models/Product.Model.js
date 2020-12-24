const { Schema, model } = require('mongoose');

const productSchema = new Schema(
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
      default: 'The product i want',
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

module.exports = model('Product', productSchema);
