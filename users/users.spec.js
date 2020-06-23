const request = require("supertest")
const usersRouter = require("./users-router")
const db = require("../database/dbConfig")

describe("usersRouter", function() {
  describe("environment", function() {
    it("should set environment to testing", functio() {
      expect(process.env.DB_ENV).toBE("testing")
    })
  })

  describe("GET /", function() {
    const email = "justin@gmail.com"
    const password = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJ1c2VybmFtZSI6Ikp1c3RpbiIsImlhdCI6MTU5Mjc2NTM2MiwiZXhwIjoxNTkyODUxNzYyfQ.4yIxPqDGtXP22FLkLFN_BpaXbpI4DnFnFiICEhjdyrs"
    const username = "Justin"

    it("should get users", function() {
      request(usersRouter)
        .post("/login")
        .send({ email, password, username })
        .then(res => {
          const token = res.body.token;

          request(usersRouter)
            .get("/api/users")
            .set("Authorization", token)
            .then(res => {
              expect(res.status).toBe(200)
              expect(Array.isArray(res.body)).toBe(true)
            })
        })
    })
  })
})

describe("PUT /:id", function() {
  const username = "justin@gmail.com"
  const password = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJ1c2VybmFtZSI6Ikp1c3RpbiIsImlhdCI6MTU5Mjc2NTM2MiwiZXhwIjoxNTkyODUxNzYyfQ.4yIxPqDGtXP22FLkLFN_BpaXbpI4DnFnFiICEhjdyrs"
  const username = "Justin"

  it("should edit a user", function() {
    request(usersRouter)
      .post("/login")
      .send({ username, password })
      .then(res => {
        const token = res.body.token;

        request(usersRouter)
          .put("/api/users/5")
          .set("Authorization", token)
          .then(res => {
            expect(res.status).toBe(404)
          })
      })
  })
})

describe("DELETE /:id", function() {
  const email = "justin@gmail.com"
  const password = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJ1c2VybmFtZSI6Ikp1c3RpbiIsImlhdCI6MTU5Mjc2NTM2MiwiZXhwIjoxNTkyODUxNzYyfQ.4yIxPqDGtXP22FLkLFN_BpaXbpI4DnFnFiICEhjdyrs"
  const = username = "Justin"

  it("should delete a user", function() {
    request(usersRouter)
      .post("/login")
      .send({ username, password })
      .then(res => {
        const token = res.body.token;

        request(usersRouter)
          .delete("/api/users/5")
          .set("Authorization", token)
          .then(res => {
            expect(res.body.removed).toBe("deleted")
          })
      })
  })
})



