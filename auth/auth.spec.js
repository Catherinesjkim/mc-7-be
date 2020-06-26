const request = require("supertest");
const auth = require("../api/server");
const db = require("../database/dbConfig");
const User = require("../users/users-model");

beforeEach(async () => {
  await db("users").truncate();
});

// 1st test passed
describe("Add a user", () => {
  describe("register()", () => {
    it("should register a new user", async () => {
      await User.add({ email: "Evelyn", password: "password", "username": "username", "role": "provider" });
      const user = await db("users");
      expect(user).toHaveLength(1);
    });

    // 2nd test passed
    it("should return a user token login()", async () => {
      const res = await request(auth)
        .post("/api/auth/register")
        .send({
          email: "Evelyn",
          password: "password",
          username: "username",
          role: "provider",
        });
      expect(res.body.token).toBeTruthy();
    });
  });
});

describe("Log a user", () => {
  describe("login()", () => {
    it("should login a new user", async () => {
      await User.add({
        email: "Evelyn",
        password: "password",
        username: "username",
        role: "provider",
      });
      const user = await db("users");
      expect(user).toHaveLength(1);
    });

    it("should return a user token login()", async () => {
      const res = await request(auth)
        .post("/api/auth/register")
        .send({ 
          email: "Evelyn", 
          password: "password",
          username: "username",
          role: "provider", 
        });
      expect(res.body.token).toBeTruthy();
    });
  });
});