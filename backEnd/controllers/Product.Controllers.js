const Product = require('../models/Product.Model');
const User = require('../models/User.Model');
const Wish = require('../models/Wish.Model');

exports.getUserProducts = async (req, res) => {
  const {
    user: { id },
  } = req;
  const products = await User.findById(id).populate('products');
  console.log(id);
  res.status(200).json(products);
};

exports.getProductDetails = async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findById(productId);

  res.status(200).json(product);
};

exports.createProduct = async (req, res) => {
  const { title, description, image, price, category } = req.body;
  const {
    user: { id },
  } = req;

  const newProduct = await Product.create({
    title: title.toLowerCase(),
    description,
    image,
    price,
    category,
  });

  await User.findByIdAndUpdate(id, { $push: { products: newProduct._id } });

  //revisar si el product existe entre los wish
  const wishCoincidence = await Wish.find({
    name: newProduct.title,
  });
  //si hay coincidencias, ingresarlas en el nuevo product
  if (wishCoincidence) {
    await Product.findByIdAndUpdate(
      newProduct.id,
      { $push: { wishCoincidences: wishCoincidence } },
      { new: true }
    );
  }

  res.status(201).json(newProduct);
};

exports.editProduct = async (req, res) => {
  const { productId } = req.params;
  const { title, description, image, price, category } = req.body;

  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    {
      title,
      description,
      image,
      price,

      category,
    },
    { new: true }
  );
  res.status(200).json(updatedProduct);
};

exports.deleteProduct = async (req, res) => {
  const { productId } = req.params;
  await Product.findByIdAndDelete(productId);
  res.status(200).json({ message: 'product deleted' });
};

exports.allproducts = async (req, res) => {
  //read all products
  const productsAll = await Product.find();
  res.status(200).json(productsAll);
};
