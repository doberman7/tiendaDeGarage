const { Schema, model } = require('mongoose');

const ProductSchema = new Schema(
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
    wishCoincidences: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Wish',
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model('Product', ProductSchema);
