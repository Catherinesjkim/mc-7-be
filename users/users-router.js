const express = require("express")
const Users = require("./users-model")
const restrict = require("../auth/authenticate-middleware")

const router = express.Router()

// This endpoint is only available to logged-in admin users due to the `restrict` middleware
// GET request - 200 OK on Insomnia
// /api/users
router.get("/", (req, res) => {
  Users.getAll()
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get users" })
    })
})

// Worked on Insomnia
router.get("/:id", (req, res) => {
  const { id } = req.params;

  Users.findById(id)
    .then(admin => {
      if (admin) {
        res.json(admin);
      } else {
        res.status(404).json({ message: "Could not find user with given id." })
      }
    })
})

// PUT - update - worked on Insomnia
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Users.findById(id)
    .then(user => {
      if (user) {
        Users.update(changes, id).then(updatedUser => {
          res.status(200).json({ "updated user ": updatedUser });
        });
      } else {
        res.status(400).json({ message: "Could not find user with given id" })
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to update user" })
    })
})

// Worked on Insomnia
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Users.remove(id)
    .then(deleted => {
      if(deleted) {
        res.status(200).json({ removed: deleted })
      } else {
          res.status(400).json({ message: "Could not find user with given id" })
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: "Filed to delete user" })
    })
})

module.exports = router