const Product = require('../models/Product.Model');
const User = require('../models/User.Model');

exports.createProcessProduct = async (req, res) => {
  try {
    const { picture, name } = req.body;
    const userId = req.session.passport.user;

    if (!picture || !name) {
      return res.status(403).json({ message: 'Provide picture and name' });
    }

    const product = await Product.findOne({
      name,
    });

    if (product) {
      return res.status(401).json({ message: 'product already created' });
    }

    let newProduct = await Product.create({
      idUser: userId,
      name,
      picture,
    });

    await User.findByIdAndUpdate(
      userId,
      { $push: { products: newProduct } },
      { new: true }
    );

    await Product.find({ idUser: userId }).populate('userCreator');

    res.status(201).json({ message: 'Product created' });
  } catch (e) {
  } finally {
    console.log('CONTROLLER CREATE PRODUCT PROCESS');
  }
};

exports.editProduct = async (req, res) => {
  try {
    const { name, picture } = req.body;

    const userId = req.session.passport.user;
    const user = await User.findById(userId);
    const idProduct = req.params.id;
    console.log(req.params);

    if (!name || !picture) {
      return res.status(500).json({ message: 'write name and picture' });
    }

    let newProduct = await Product.findByIdAndUpdate(
      idProduct,
      { name: name, picture: picture },
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
    console.log('CONTROLLER EDIT PRODUCT');
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const idUser = req.session.passport.user;
    const idProduct = req.params.id;
    const user = await User.findById(idUser);
    await Product.deleteOne({ idProduct });
    await Product.find({ idProduct: user }).populate('userCreator');

    res.status(200).json({ messaje: 'Profile deleted' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  } finally {
    console.log('CONTROLLER DELETE PRODUCT');
  }
};
