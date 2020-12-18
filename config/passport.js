const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User.Model');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      const user = await User.findOne({ email });
      if (!user) {
        return done(null, false, { errorMessage: 'Incorrect Email' });
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return done(null, false, { errorMessage: 'Incorrect Password' });
      }
      done(null, user);
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    async (_, __, profile, done) => {
      const user = await User.findOne({ googleId: profile.id });
      //determiinar si la cuenta tiene image
      let pic = profile.photos[0].value;
      //si no hay usuario pero el user de google tiene image
      if (!user && pic) {
        const user = await User.create({
          username: profile.displayName,
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id,
          picture: pic,
          confirmed: true,
        });

        console.log('USER', user);
        done(null, user);
      }

      //si solo no hay usario
      if (!user) {
        const user = await User.create({
          username: profile.displayName,
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id,
          //picture: profile.photos[0].value,
          confirmed: true,
        });

        console.log('USER', user);
        done(null, user);
      }
      done(null, user);
    }
  )
);

passport.serializeUser((user, callBack) => {
  callBack(null, user._id);
});

passport.deserializeUser(async (id, callBack) => {
  const user = await User.findById(id);
  user.password = null;
  callBack(null, user);
});

module.exports = passport;
