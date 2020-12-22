const Product = require('../models/Product.Model');
const User = require('../models/User.Model');
const log = require('chalk-animation');

exports.createProcessProduct = async (req, res) => {
  try {
    const { image, name, description, categorys } = req.body;
    const userId = req.session.passport.user;
    if (!image || !name || !description || !categorys) {
      return res.status(400).json({
        message: 'Provide image, name, description, categorys and image',
      });
    }

    const product = await Product.findOne({
      name,
    });

    // if (product) {
    //   console.log('product already created');
    //   return res.status(400).json({
    //     message: 'product with that name already exists, give it a new name',
    //   });
    // }

    let newProduct = await Product.create({
      idUser: userId,
      name: name,
      picture: image,
      description: description,
      categorys,
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
    const { name, image, description } = req.body;
    const userId = req.session.passport.user;
    const user = await User.findById(userId);
    const idProduct = req.params.productId;
    if (!name || !description) {
      console.log("'Add name and description'");
      return res.status(500).json({ message: 'add name and description' });
    }
    if (image) {
      await Product.findByIdAndUpdate(
        idProduct,
        { name: name, picture: image, description: description },
        { new: true }
      );

      res.status(201).json({ message: 'Product edited' });
    } else {
      await Product.findByIdAndUpdate(
        idProduct,
        { name: name, description: description },
        { new: true }
      );
      res.status(201).json({ message: 'Product edited' });
    }

    // await Product.find({ idUser: userId }).populate('userCreator');
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  } finally {
    console.log('CONTROLLER editProduct');
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
    console.log('CONTROLLER getProductDetails');
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    await Product.findByIdAndDelete(productId);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.message });
  } finally {
    console.log('CONTROLLER deleteProduct');
  }
  res.status(200).json({ message: 'Product deleted' });
};
