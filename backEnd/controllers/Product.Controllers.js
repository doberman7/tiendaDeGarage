const Product = require('../models/Product.Model');
const User = require('../models/User.Model');
const log = require('chalk-animation');

exports.createProcessProduct = async (req, res) => {
  try {
    const { image, name, description } = req.body;
    const userId = req.session.passport.user;
    if (!image || !name) {
      console.log('Provide image and name');
      return res.status(400).json({ message: 'Provide image and name' });
    }

    const product = await Product.findOne({
      name,
    });

    if (product) {
      console.log('product already created');
      return res.status(400).json({
        message: 'product with that name already exists, give it a new name',
      });
    }

    let newProduct = await Product.create({
      idUser: userId,
      name: name,
      picture: image,
      description: description,
    });

    await User.findByIdAndUpdate(
      userId,
      { $push: { products: newProduct } },
      { new: true }
    );

    await Product.find({ idUser: userId }).populate('userCreator');

    res.status(201).json({ message: 'Product created' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  } finally {
    console.log('CONTROLLER CREATE PRODUCT PROCESS');
  }
};

exports.editProduct = async (req, res) => {
  try {
    //si trae params, no body
    const { name, picture, description } = req.body;
    console.log(req.body);
    const userId = req.session.passport.user;
    const user = await User.findById(userId);
    const idProduct = req.params.id;

    if (!name || !description) {
      console.log("'add name and description'");
      return res.status(500).json({ message: 'add name and description' });
    }

    let newProduct = await Product.findByIdAndUpdate(
      idProduct,
      { name: name, picture: picture, description: description },
      { new: true }
    );
    if (!newProduct) {
      return res.status(400).json({ message: 'no product exists' });
    }

    await Product.find({ idUser: userId }).populate('userCreator');
    res.status(201).json({ message: 'Product edited' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  } finally {
    log.neon('CONTROLLER editProduct');
  }
};

exports.deleteProduct = async (req, res) => {
  const idUser = req.session.passport.user;
  const idProduct = req.params.id;

  try {
    const user = await User.findById(idUser);
    await Product.deleteOne({ _id: idProduct });

    userNew = await User.findByIdAndUpdate(
      idUser,
      { $pull: { products: idProduct } },
      { new: true }
    );

    res.status(200).json({ messaje: 'Product deleted' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  } finally {
    console.log('CONTROLLER DELETE PRODUCT');
  }
};

exports.getUserProducts = async (req, res) => {
  try {
    const idUser = req.session.passport.user;
    const { products } = await User.findById(idUser).populate('products');
    res.status(200).json(products);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  } finally {
    console.log('CONTROLLER getUserProducts');
  }
};
exports.getProductDetails = async (req, res) => {
  try {
    const idUser = req.session.passport.user;
    const { productId } = req.params;
    const product = await Product.findById(productId);
    res.status(200).json(product);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  } finally {
    log.neon('CONTROLLER getProductDetails');
  }
};
