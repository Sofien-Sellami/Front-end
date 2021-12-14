const request = require('supertest');
const user = require("../routes/user");

describe("POST /user", () => {
  describe("given an email and password", () => {
    test("should response with a 200 status code", async () => {
      const response = await request(user)
        .post("/login",{ email: "mehdihrairi6@gmail.com", password: "06061997mh" })
        expect(response.statusCode).toBe(200);
    });
  });
  describe("when email and password are missing", () => {});
});
