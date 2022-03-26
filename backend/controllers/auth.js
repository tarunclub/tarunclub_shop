const User = require("../models/user");

exports.signup = (req, res) => {
  const user = new User(req.body);
  console.log({ user });

  user.save((err, user) => {
    console.log({ err });
    if (err || !user) {
      return res.status(400).json({
        err: "Not able to connect",
      });
    }
    res.json({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      id: user._id,
    });
  });
};

exports.signout = (req, res) => {
  res.json({
    message: "Hello TARUN",
  });
};
