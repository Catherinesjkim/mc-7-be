const request = require("supertest");
const strainsRouter = require("./strains-router");
const db = require("../database/dbConfig");

describe("strainsRouter", function () {
  describe("environment", function () {
    it("should set environment to testing", function () {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });

  describe("GET /", function () {
    it("should return a 200 OK", function () {
      request(strainsRouter)
        .get("/")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });
    it("should return a JSON", function () {
      request(strainsRouter)
        .get("/")
        .then((res) => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });

  describe("POST /", function () {
    it("should return a 201 CREATED", function () {
      request(strainsRouter)
        .post("/")
        .then((res) => {
          expect(res.status).toBe(201);
        });
    });
    it("should return a JSON", function () {
      request(strainsRouter)
        .post("/")
        .then((res) => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });
});

describe("PUT /:id", function () {
  const description = "test123";
  const effect = "this is a test";
  const flavor = "yummy test";
  const id = "test id";
  const rating = "4.6";
  const type = "type of strain"

  it("should edit a strain", function () {
    request(strainsRouter)
      .post("/login")
      .send({ email: "test123", password: "test" })
      .then((res) => {
        const token = res.body.token;

        request(strainsRouter)
          .put({ description, effect, flavor, id, rating, type })
          .set("Authorization", token)
          .then((res) => {
            expect(res.status).toBe(200);
            expect(Array.isArray(res.body)).toBe(true);
          });
      });
  });
});

describe("DELETE /:id", function () {
  const description = "test123";
  const effect = "this is a test";
  const flavor = "yummy test";
  const id = "test id";
  const rating = "4.6";
  const type = "type of strain";

  it("should delete a strain", function () {
    request(strainsRouter)
      .post("/login")
      .send({ email: "test123", password: "test" })
      .then((res) => {
        const token = res.body.token;

        request(strainsRouter)
          .delete("/api/strains/1")
          .set("Authorization", token)
          .then((res) => {
            expect(res.body.removed).toBe("deleted");
          });
      });
  });
});
