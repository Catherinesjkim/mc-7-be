const request = require("supertest");
const server = require("../api/server");

describe("strains-router", () => {
  describe("GET /", () => {
    test("it returns 401 without token", () => {
      return request(server)
        .get("/api/strains")
        .then((res) => {
          expect(res.status).toBe(401);
        });
    });
    test("it returns JSON", () => {
      return request(server)
        .get("/api/strains")
        .then((res) => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });
});
