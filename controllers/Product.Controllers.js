const Product = require('../models/Product.Model');

exports.createProcessProduct = async (req, res) => {
  const { picture, name } = req.body;
  if (!picture || !name) {
    return res.status(403).json({ message: 'Provide picture and name' });
  }

  const product = await Product.findOne({
    name,
  });

  if (product) {
    return res.status(401).json({ message: 'product already created' });
  }

  await Product.create({
    name,
    picture,
  })
    .then(() => {
      res.status(201).json({ message: 'Product created' });
    })
    .catch((e) => {
      res.status(500).json({ message: e.message });
    });
};

exports.editProduct = async (req, res) => {
  try {
    const { name, picture } = req.body;
    // console.log(req.body);
    //obtener userId
    // const userId = req.session.passport.user;
    if (!name || !picture) {
      return res.status(500).json({ message: 'write name and picture' });
    }

    const product = await Product.findAndModify(
      name,
      {
        name: name,
        picture: picture,
      },
      {
        new: true,
      }
    );
    res.status(202).json(product);
    // res.send('profile', user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  } finally {
    console.log('CONTROLLER EDIT PRODUCT');
  }
};

exports.deleteProduct = async (req, res) => {
  // const userId = req.session.passport.user;
  const { name } = req.body;
  const product = await Product.findAndModify(name);
  let productDeleted = await Product.deleteOne({
    // _id: userId,
    name: name,
  });
  // res.redirect('/');
  res.status(200).json({ messaje: 'Profile deleted' });
};
