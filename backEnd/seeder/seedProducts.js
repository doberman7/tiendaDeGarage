const Product = require('../models/Product.Model');
const User = require('../models/User.Model');
const mongoose = require('mongoose');
const path = require('path');

//create your array. i inserted only 1 object here
async function seed() {
  try {
    //a random number no biger that 30 to add to names, mail and iterator
    let n = Math.floor(Math.random() * (30 - 1) + 1);
    //create user
    const user = await User.create({
      email: 'seed' + n + '@mail.com',
      password: 'seed',
      name: 'seed' + n,
      picture:
        'https://lh3.googleusercontent.com/proxy/dmHyFpMzk8e5gcIAIPR1Yk7Tobz1fBSlkL49CVcd9oWbd6p7k9AtzHtQ9U1FJNyx-8iyiWpSiy7ZPSRI3KL_dC5o3hh9mG28wxyPJXQbq6bq836IIt11h8zfzDWJPOEZ5KF8',
    });

    do {
      const p = await Product.create({
        idUser: user.id,
        name: 'producto' + n,
        description: './package.jsondescription del producto 1',
        image:
          'https://www.pepsico.cl/images/librariesprovider40/default-album/vb3_montaje-productos-pepsico2e33c3aeef576d378be6ff5000e253d8.jpg?sfvrsn=1',
        price: n,
        category: 'other',
      });

      await User.findByIdAndUpdate(user.id, { $push: { products: p._id } });
      await Product.find({ idUser: user.id }).populate('userCreator');
      n--;
    } while (n > 0);

    await mongoose.disconnect();
    console.log('done');
  } catch (error) {
    console.log(error);
    console.log(
      'if MongoError: E11000 duplicate key error collection: mail, runs the seed again'
    );
  }
}

mongoose
  .set('useCreateIndex', true)
  .connect(process.env.DB || 'mongodb://localhost/tiendaDeGarage', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err);
  });
///Users/ivanrubio/Documents/GitHub/tiendaDeGarage/backEnd/package.json
const app_name = require('../package.json').name;
const { log } = require('console');
const debug = require('debug')(
  `${app_name}:${path.basename(__filename).split('.')[0]}`
);
seed();
