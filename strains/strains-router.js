const axios = require("axios");
const express = require("express");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const secrets = require("../auth/config/secrets");

// Worked on insomnia
router.get("/:effect/:flavor", (req, res) => {
  const requestOptions = {
    headers: { accept: "application/json" },
  };

  const { effect, flavor } = req.params;

  axios
    .get(
      `https://sheltered-retreat-61575.herokuapp.com/predict?effect=${effect}&flavor=${flavor}`,
      requestOptions,
    )
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error Fetching Strains", error: err });
    });
});

module.exports = router;
