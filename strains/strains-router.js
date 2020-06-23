const axios = require("axios");
const express = require("express");
const router = require("express").Router();
const Strains = require("./strains-model");
const jwt = require("jsonwebtoken");
const secrets = require("../auth/config/secrets");

router.get("/", (req, res) => {
  const requestOptions = {
    headers: { accept: "application/json" },
  };

  axios
    .get("https://www.cannabisreports.com/api/", requestOptions)
    .then((response) => {
      res.status(200).json(response.data.results);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error Fetching Strains", error: err });
    });
});

module.exports = router;
