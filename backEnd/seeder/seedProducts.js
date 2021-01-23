const Product = require('../models/Product.Model');
const User = require('../models/User.Model');
const mongoose = require('mongoose');
const path = require('path');

// const dev = require("../config/dev"); //get your mongoose string

//create your array. i inserted only 1 object here
async () => {
  //create user
  const user = await User.create({
    email: 'seed@mail.com',
    password: 'seed',
    name: 'seed',
    picture:
      'https://lh3.googleusercontent.com/proxy/dmHyFpMzk8e5gcIAIPR1Yk7Tobz1fBSlkL49CVcd9oWbd6p7k9AtzHtQ9U1FJNyx-8iyiWpSiy7ZPSRI3KL_dC5o3hh9mG28wxyPJXQbq6bq836IIt11h8zfzDWJPOEZ5KF8',
  });
  await Product.create({
    idUser: user.id,
    name: 'producto1',
    description: './package.jsondescription del producto 1',
    image:
      'https://www.pepsico.cl/images/librariesprovider40/default-album/vb3_montaje-productos-pepsico2e33c3aeef576d378be6ff5000e253d8.jpg?sfvrsn=1',
    price: '900',
    category: 'other',
  });
};

//connect mongoose
mongoose
  .connect(process.env.DB || 'mongodb://localhost/tiendaDeGarage', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((x) => {
    log.rainbow(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err);
  });
///Users/ivanrubio/Documents/GitHub/tiendaDeGarage/backEnd/package.json
const app_name = require('../package.json').name;
const debug = require('debug')(
  `${app_name}:${path.basename(__filename).split('.')[0]}`
);
//save your data. this is an async operation
//after you make sure you seeded all the products, disconnect automatically
products.map(async (p, index) => {
  try {
    console.log(user);
    await p.save((err, result) => console.log('PRODUCTS', p));
    await User.findByIdAndUpdate(user.id, { $push: { products: p._id } });
  } catch (error) {
    console.log(error);
  }
});

mongoose.disconnect();
