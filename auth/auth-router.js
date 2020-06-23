const router = require("express").Router();
const Users = require("../users/users-model");
const bcryptjs = require("bcryptjs");
const generateToken = require("./generateToken");
const jwt = require("jsonwebtoken");

router.post("/register", (req, res) => {
  const { email, password, username, role } = req.body;
  const rounds = process.env.BCRYPT_ROUNDS || 8;
  const hash = bcryptjs.hashSync(password, rounds);
  const userObject = {
    email: email,
    password: hash,
    username: username,
    role: role
  };
  const token = generateToken(userObject);
  if (userObject) {
    Users
      .add(userObject)
      .then((user) => {
        res
          .status(201)
          .json({ newUser: userObject, user_id: user.id, token: token });
      })
      .catch((error) => {
        res
          .status(500)
          .json({ error: "You were unable to get info from the database!" });
      });
  } else {
    res.status(400).json({
      message: "please provide all required information",
    });
  }
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (req.body) {
    Users
      .findBy({ email: email })
      .then(([user]) => {
        // compare the password the hash stored in the database
        if (user && bcryptjs.compareSync(password, user.password)) {
          const token = generateToken(user);
          res
            .status(200)
            .json({
              message: "Welcome to our API",
              user_id: user.id,
              token: token,
            });
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      })
      .catch((error) => {
        res
          .status(500)
          .json({ error: "You were unable to get info from the database!" });
      });
  } else {
    res.status(400).json({
      message: "please provide email and password",
    });
  }
});

module.exports = router;
