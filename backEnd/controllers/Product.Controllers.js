const Product = require('../models/Product.Model');
const User = require('../models/User.Model');
const Wish = require('../models/Wish.Model');

exports.getUserProducts = async (req, res) => {
  const {
    user: { id },
  } = req;
  const products = await User.findById(id).populate('products');
  res.status(200).json(products);
};

exports.getProductDetails = async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findById(productId);
  res.status(200).json(product);
};

exports.createProduct = async (req, res) => {
  const { name, description, image, price, category, quantity } = req.body;
  console.log('CREATRE PRODUCT');
  if (!name || !description || !image || !price || !category || !quantity) {
    return res.status(403).json({ message: 'Llena los espacios vacios ' });
  }
  const {
    user: { id },
  } = req;

  const newProduct = await Product.create({
    idUser: id,
    name: name.toLowerCase(),
    description,
    image,
    price,
    category,
    quantity,
  });

  await User.findByIdAndUpdate(id, { $push: { products: newProduct._id } });
  await Product.find({ idUser: id }).populate('userCreator');
  //revisar si el product existe entre los wish
  const wishCoincidence = await Wish.find({
    name: newProduct.name,
  });
  //si hay coincidencias, ingresarlas en el nuevo product
  if (wishCoincidence) {
    await Product.findByIdAndUpdate(
      newProduct.id,
      { $push: { wishCoincidences: wishCoincidence } },
      { new: true }
    );
  }
  //get updated product
  let newProductUpdated = await Product.findById(newProduct.id);
  console.log('NEW product' + newProductUpdated);
  res.status(201).json(newProductUpdated);
};

exports.editProduct = async (req, res) => {
  const { productId } = req.params;
  const { name, description, image, price, category, quantity } = req.body;
  if (!name || !description || !image || !price || !category || !quantity) {
    return res.status(403).json({ message: 'Add missing info' });
  }
  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    { name, description, image, price, category, quantity },
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
