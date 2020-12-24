const { Schema, model } = require('mongoose');

const ItemSchema = new Schema(
  {
    title: String,
    description: String,
    image: String,
    price: Number,
    // taggs: [{ type: String, trim: true }],
    category: {
      type: String,
      enum: ['electronics', 'books', 'clothes', 'other'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Item', ItemSchema);
