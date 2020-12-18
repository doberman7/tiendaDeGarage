const bcrypt = require('bcrypt'),
  User = require('../models/User.Model'),
  passport = require('../config/passport');

exports.signupProcessUser = async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password) {
    return res.status(403).json({ message: 'Provide email and password' });
  }
  const user = await User.findOne({
    email,
  });
  if (user) {
    // return res.send('user/signup', {message: 'user already exists' });
    return res.status(401).json({ message: 'user already exists' });
  }
  const salt = bcrypt.genSaltSync(12);
  const hashPass = bcrypt.hashSync(password, salt);
  await User.create({
    email,
    password: hashPass,
    name,
  })
    .then(() => {
      // res.send('user/login', {message: 'Welcome, please login', });
      res.status(201).json({ message: 'Welcome, please login' });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.loginProcess = async (req, res, next) => {
  passport.authenticate('local', (err, user, failureDetails) => {
    if (err) {
      return res.status(500).json({ message: err });
    }
    if (!user) {
      return res.status(401).json({ message: 'no user with that credentials' });
    }

    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({ message: err });
      }
      user.password = null;
      res.status(200).json(user);
    });
  })(req, res, next);
};

exports.logout = (req, res) => {
  req.session.destroy();
  req.logout();
  // res.redirect('/');

  res.status(200).json({ message: 'logged out' });
};

exports.profileView = async (req, res) => {
  try {
    const id = req.session.passport.user;
    const user = await User.findById(id);
    res.send('profile', user);
  } catch (e) {
    console.error(e);
    // res.send('index', {      message: 'Please fill email and password ',    });
    res.status(401).json({ message: e });
  }
};

exports.profilePicture = (req, res) => {
  const id = req.session.passport.user;
  const picture = req.file.path;
  User.findByIdAndUpdate(
    id,
    {
      picture,
    },
    {
      new: true,
    }
  )
    .then(() => {
      // res.send('profile', { message: 'cool new image' });
      res.status(202).json({ message: 'cool new image' });
    })
    .catch((e) => {
      console.log(e);
      // res.send('profile', { message: e });
      res.status(401).json({ message: e.message });
    });
};

exports.editProfile = async (req, res) => {
  try {
    //obtener info del form
    const { email, password, image, name } = req.body;
    //obtener user ID
    const userId = req.session.passport.user;
    //update email
    if (email) {
      const user = await User.findByIdAndUpdate(
        userId,
        {
          email,
        },
        {
          new: true,
        }
      );
      res.status(202).json(user);
    }
    //update image
    if (image) {
      const user = await User.findByIdAndUpdate(
        userId,
        {
          picture: image,
        },
        {
          new: true,
        }
      );
      res.status(202).json(user);
    }
    //update name
    if (name) {
      const user = await User.findByIdAndUpdate(
        userId,
        {
          name: name,
        },
        {
          new: true,
        }
      );
      res.status(202).json(user);
    }
    //update password
    if (password) {
      const salt = bcrypt.genSaltSync(12);
      const hashPass = bcrypt.hashSync(password, salt);
      const user = await User.findByIdAndUpdate(
        userId,
        {
          password: hashPass,
        },
        {
          new: true,
        }
      );
      res.status(202).json(user);
    }
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  } finally {
    console.log('CONTROLLER Route editProfile');
  }
};

exports.deleteProfile = async (req, res) => {
  const userId = req.session.passport.user;
  const user = await User.findById(userId);
  let userDeleted = await User.deleteOne({
    _id: userId,
  });
  // res.redirect('/');
  res.status(200).json({ messaje: 'Profile deleted' });
};

exports.currentUser = (req, res) => {
  // console.log('currentUser', req.user);
  res.json(req.user || null);
};

exports.googleProcess = passport.authenticate('google', {
  scope: [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email',
  ],
});

exports.googleCallback = (req, res, next) => {
  passport.authenticate('google', (err, user, errDetails) => {
    //si hay error regresa un 500 con errores

    if (err) res.status(500).json({ err, errDetails });
    //si no usuario, regresa un 401 y errores

    if (!user) res.status(401).json({ err, errDetails });
    console.log(user);
    //usar login de passport
    req.login(user, (err) => {
      //si hay error devolver 500
      if (err) {
        console.log('ERROR:', err);
        res.status(500).json({ err }).json({ message: err.message });
      }
      //todo salio bien? redirigir a al profile
      return res.redirect(
        process.env.ENV === 'development'
          ? 'http://localhost:3001/profile'
          : '/profile'
      );
    });
  })(req, res, next);
};
