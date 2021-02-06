require('dotenv').config();

const bcrypt = require('bcrypt'),
  Product = require('../models/Product.Model'),
  User = require('../models/User.Model'),
  mongoose = require('mongoose'),
  path = require('path'),
  axios = require('axios');

//create your array. i inserted only 1 object here
async function seed() {
  let times = 19;
  try {
    const salt = bcrypt.genSaltSync(12);
    const hashPass = bcrypt.hashSync('test', salt);
    //create user
    const user = await User.create({
      email: 'test@mail.com',
      password: hashPass,
      name: 'test',
    });
    //este data es un ary
    const { data } = await axios.get(`https://fakestoreapi.com/products/`);

    do {
      // data.data.map((product) => console.log(product));

      const p = await Product.create({
        idUser: user.id,
        name: data[times].title,
        description: data[times].description,
        image: data[times].image,
        price: data[times].price,
        category: 'other',
      });
      // .then(console.log(data));

      await User.findByIdAndUpdate(user.id, { $push: { products: p._id } });
      await Product.find({ idUser: user.id }).populate('userCreator');
      times--;
    } while (times > 0);
    await mongoose.disconnect();
    console.log('done');
  } catch (error) {
    console.log(error);
    // console.log(
    //   'if MongoError: E11000 duplicate key error collection: mail, runs the seed again'
    // );
  }
}

mongoose
  .set('useCreateIndex', true)
  // .connect(process.env.DB || 'mongodb://localhost/tiendaDeGarage', {
  .connect(process.env.DB , {
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
