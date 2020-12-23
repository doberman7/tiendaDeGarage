const { Schema, model } = require('mongoose');

const ItemSchema = new Schema(
  {
    title: String,
    description: String,
    image: String,
    price: Number,
    taggs: [String],
    department: {
      type: String,
      enum: ['electronics', 'books'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Item', ItemSchema);
