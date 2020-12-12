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
      if (!user) {
        const user = await User.create({
          username: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id,
          image: profile.photos[0].value,
          confirmed: true,
        });
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
