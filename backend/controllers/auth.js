const User = require("../models/user");

exports.signup = (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(
      res.json({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        id: user._id,
      })
    )
    .catch((err) => {
      res.status(400).send({
        err: "Not able to save the user",
      });
    });
};

exports.signout = (req, res) => {
  res.json({
    message: "Hello TARUN",
  });
};
