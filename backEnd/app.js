require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');

const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
// const passport = require('./config/passport');
const log = require('chalk-animation');
const flash = require('connect-flash');
const cors = require('cors');

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
//
const app_name = require('./package.json').name;
const debug = require('debug')(
  `${app_name}:${path.basename(__filename).split('.')[0]}`
);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(flash());
app.use(
  cors({
    origin: [
      'http://localhost:3001',
      'http://localhost:3000',
      'http://localhost:3000/current-user',
      '*',
    ],
    credentials: true,
  })
);
require('./config/session')(app);

const userRoutes = require('./routes/userRoutes');
const wishRoutes = require('./routes/wishRoutes');
const productRoutes = require('./routes/productRoutes');
//usar el buiild
app.use(express.static(path.join(__dirname, 'public/build')));

app.use('/', userRoutes);
app.use('/wish', wishRoutes);
app.use('/product', productRoutes);
//si no haya otras rutas, usa esta
app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/public/build/index.html`);
});

module.exports = app;

// app.listen(process.env.PORT, () => {
//   console.log(`Listening on http://localhost:${process.env.PORT}`);
// });
