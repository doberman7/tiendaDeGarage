const Item = require('../models/Item.Model');
const User = require('../models/User.Model');

exports.getUserItems = async (req, res) => {
  const {
    user: { id },
  } = req;
  const items = await User.findById(id).populate('items');
  console.log(id);
  res.status(200).json(items);
};

exports.getItemDetails = async (req, res) => {
  const { itemId } = req.params;
  const item = await Item.findById(itemId);

  res.status(200).json(item);
};

exports.createItem = async (req, res) => {
  const { title, description, image, price, taggs, department } = req.body;
  const {
    user: { id },
  } = req;

  const newItem = await Item.create({
    title,
    description,
    image,
    price,
    taggs,
    department,
  });

  await User.findByIdAndUpdate(id, { $push: { items: newItem._id } });

  res.status(201).json(newItem);
};

exports.editItem = async (req, res) => {
  const { itemId } = req.params;
  const { title, description, image, price, taggs, department } = req.body;

  const updatedItem = await Item.findByIdAndUpdate(
    itemId,
    {
      title,
      description,
      image,
      price,
      taggs,
      department,
    },
    { new: true }
  );
  res.status(200).json(updatedItem);
};

exports.deleteItem = async (req, res) => {
  const { itemId } = req.params;
  await Item.findByIdAndDelete(itemId);
  res.status(200).json({ message: 'item deleted' });
};

exports.allitems = async (req, res) => {
  //read all items
  const itemsAll = await Item.find();
  res.status(200).json(itemsAll);
};
