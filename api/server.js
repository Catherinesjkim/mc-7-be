const express = require("express");
const apiRouter = require("./api-router");
const cors = require("cors");
const helmet = require("helmet");

const authenticate = require("../auth/authenticate-middleware");
const authRouter = require("../auth/auth-router");
const usersRouter = require("../users/users-router")
const strainsRouter = require("../strains/strains-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json()); // body parser used to do express' job
server.use('/api', apiRouter);

server.use("/api/auth", authRouter);
server.use("/api/users", authenticate, usersRouter);
server.use("/api/strains", authenticate, strainsRouter); // add authenticate after testing DS API endpoint with key value pair

// Worked on Insomnia
server.get("/", (req, res) => {
  res.json({ message: "Server is UP!" });
});

module.exports = server;
