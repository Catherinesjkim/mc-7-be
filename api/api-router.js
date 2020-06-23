const express = require("express");

const jwt = require("jsonwebtoken");
const secrets = require("../auth/config/secrets");
const axios = require("axios");

const usersRouter = require("../users/users-router");
// const strainsRouter = require("../strains/strains-router");

const router = express.Router();

router.use("/users", usersRouter);
// router.use("/strains", restricted, strainsRouter);

function restricted(req, res, next) {
  const token = req.headers.token;
  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (!err) {
        req.decodedJwt = decodedToken;
        next();
      } else {
        res.status(500).json({ message: "invalid token" });
      }
    });
  } else {
    res.status(400).json({ message: "Bad request" });
  }
}

module.exports = router;
