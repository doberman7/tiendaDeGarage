const { Schema, model } = require('mongoose');

const ProductSchema = new Schema(
  {
    name: String,
    description: String,
    image: Array,
    price: Number,
    idUser: Schema.Types.ObjectId,
    userCreator: { type: Schema.Types.ObjectId, ref: 'User' },
    category: {
      type: String,
      enum: ['electronics', 'books', 'clothes', 'other'],
    },
    quantity: { type: Number, default: 1 },
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
