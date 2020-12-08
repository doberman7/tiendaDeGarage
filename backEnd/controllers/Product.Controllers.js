const Product = require('../models/Product.Model');
const User = require('../models/User.Model');

exports.createProcessProduct = async (req, res) => {
  try {
    const { picture, name } = req.body;
    const userId = req.session.passport.user;
    console.log(req.body);
    if (!picture || !name) {
      return res.status(400).json({ message: 'Provide picture and name' });
    }

    const product = await Product.findOne({
      name,
    });

    if (product) {
      return res.status(400).json({ message: 'product already created' });
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
    console.log(e.message);
    res.status(500).json({ message: e.message });
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
