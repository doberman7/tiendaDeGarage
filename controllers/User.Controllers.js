const bcrypt = require('bcrypt'),
  User = require('../models/User.Model'),
  passport = require('../config/passport');

// exports.indexView = (req, res) => res.send('index');
//
// //parece esta ya no se usará
// exports.signupView = (req, res) => {
//   res.send('user/signup');
// };

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
      // res.send('user/login', {infoFlash: 'Welcome, please login', });
      res.status(201).json({ infoFlash: 'Welcome, please login' });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.loginProcess = async (req, res, next) => {
  passport.authenticate('local', (err, user, failureDetails) => {
    if (err) {
      return res
        .status(500)
        .json({ message: 'Something went wrong authenticating user' });
    }
    if (!user) {
      return res
        .status(401)
        .json({ message: 'Something went wrong authenticating user' });
    }

    req.login(user, (err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: 'Something went wrong authenticating user' });
      }
      user.password = null;
      res.status(200).json(user);
    });
  })(req, res, next);
};

exports.logout = (req, res) => {
  // req.logout(); IS working now
  req.logout();
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
    res.status(401).json({ message: 'Please fill email and password ' });
  } finally {
    console.log('End ProfileView BackEndMethod');
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
      // res.send('profile', { infoFlash: 'cool new image' });
      res.status(202).json({ infoFlash: 'cool new image' });
    })
    .catch((e) => {
      console.log(e);
      // res.send('profile', { message: e });
      res.status(401).json({ message: e });
    });
};

exports.editProfile = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    //obtener userId
    const userId = req.session.passport.user;
    if (!email || !password) {
      return res.send('profile', {
        message: 'Please fill email and password ',
      });
    }
    const salt = bcrypt.genSaltSync(12);
    const hashPass = bcrypt.hashSync(password, salt);
    const user = await User.findByIdAndUpdate(
      userId,
      {
        email,
        password: hashPass,
        name,
      },
      {
        new: true,
      }
    );
    res.status(202).json(user);
    // res.send('profile', user);
  } catch (e) {
    res
      .status(500)
      .json({ message: 'Something went wrong authenticating user' });
  } finally {
    console.log('Route editProfile');
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
  console.log('currentUser', req.session.passport.user);
  res.json(req.session.passport.user || null);
};
