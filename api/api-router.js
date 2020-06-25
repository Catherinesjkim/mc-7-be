const express = require("express");

const jwt = require("jsonwebtoken");
const secrets = require("../auth/config/secrets");
const axios = require("axios");

const usersRouter = require("../users/users-router");
const strainsRouter = require("../strains/strains-router");

const router = express.Router();

router.use("/users", usersRouter);
router.use("/strains", strainsRouter);


module.exports = router;
