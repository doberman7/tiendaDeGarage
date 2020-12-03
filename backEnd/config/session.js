const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const passport = require('./passport');
module.exports = (app) => {
  app.use(
    session({
      secret: process.env.SESS_SECRET,
      store: new MongoStore({
        mongooseConnection: mongoose.connection,
      }),
      resave: true,
      saveUninitialized: true,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
};
