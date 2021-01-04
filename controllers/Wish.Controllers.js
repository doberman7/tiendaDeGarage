const Wish = require('../models/Wish.Model');
const User = require('../models/User.Model');
const Product = require('../models/Product.Model');
const log = require('chalk-animation');

exports.createProcessWish = async (req, res) => {
  try {
    const { image, name, description, category } = req.body;
    const userId = req.session.passport.user;
    if (!image || !name || !description || !category) {
      return res.status(400).json({
        message: 'Provide image, name, description, category',
      });
    }

    let newWish = await Wish.create({
      idUser: userId,
      name: name,
      picture: image,
      description: description,
      category,
    });
    //acctualizar el usuario q ha creado el wish para señalar que ha creado el wish
    await User.findByIdAndUpdate(
      userId,
      { $push: { wishes: newWish } },
      { new: true }
    );
    //revisar si el wish existe entre los products
    const productCoincidence = await Product.find({
      title: newWish.name,
    });
    // console.log(newWish.id);
    //si hay coincidencias, ingresar en el nuevo wish
    if (productCoincidence) {
      let coincidencias = await Wish.findByIdAndUpdate(
        newWish.id,
        { $push: { productCoincidences: productCoincidence } },
        { new: true }
      );
      console.log(coincidencias);
    }

    //añadir quién a creado el wish
    await Wish.find({ idUser: userId }).populate('userCreator');

    res.status(201).json({ message: 'Wish created' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  } finally {
    console.log('CONTROLLER CREATE WISH  PROCESS');
  }
};

exports.editWish = async (req, res) => {
  try {
    const { name, image, description } = req.body;
    const userId = req.session.passport.user;
    const user = await User.findById(userId);
    const idWish = req.params.wishId;
    if (!name || !description) {
      console.log("'Add name and description'");
      return res.status(500).json({ message: 'add name and description' });
    }
    if (image) {
      await Wish.findByIdAndUpdate(
        idWish,
        { name: name, picture: image, description: description },
        { new: true }
      );

      res.status(201).json({ message: 'Wish edited' });
    } else {
      await Wish.findByIdAndUpdate(
        idWish,
        { name: name, description: description },
        { new: true }
      );
      res.status(201).json({ message: 'Wish edited' });
    }

    // await Wish.find({ idUser: userId }).populate('userCreator');
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  } finally {
    console.log('CONTROLLER editWish');
  }
};

exports.deleteWish = async (req, res) => {
  const idUser = req.session.passport.user;
  const idWish = req.params.id;

  try {
    const user = await User.findById(idUser);
    await Wish.deleteOne({ _id: idWish });

    userNew = await User.findByIdAndUpdate(
      idUser,
      { $pull: { wishes: idWish } },
      { new: true }
    );

    res.status(200).json({ messaje: 'Wish deleted' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  } finally {
    console.log('CONTROLLER DELETE WISH ');
  }
};

exports.getUserWishes = async (req, res) => {
  try {
    const idUser = req.session.passport.user;
    const { wishes } = await User.findById(idUser).populate('wishes');
    // console.log(wishes);
    res.status(200).json(wishes);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  } finally {
    console.log('CONTROLLER getUserWishes');
  }
};

exports.getWishDetails = async (req, res) => {
  try {
    const idUser = req.session.passport.user;
    const { wishId } = req.params;
    const wish = await Wish.findById(wishId);
    res.status(200).json(wish);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  } finally {
    console.log('CONTROLLER getWishDetails');
  }
};

exports.deleteWish = async (req, res) => {
  try {
    const { wishId } = req.params;
    await Wish.findByIdAndDelete(wishId);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.message });
  } finally {
    console.log('CONTROLLER deleteWish');
  }
  res.status(200).json({ message: 'Wish deleted' });
};
