import axios from "axios";
const assert = require("assert");

// login test
const SERVER_API_URL = "http://localhost:8000/api";
describe("login", function () {
  it("should return a token", async () => {
    const res = await axios.post(`${SERVER_API_URL}/user/login`, {
      email: "pratikpujari1000@gmail.com",
      password: "Pratik@123",
    });
    assert.equal(res.status, 200);
    assert.equal(res.data.token, "string");
    assert.equal(res.data.user, "object");
  });
});

// signup test
describe("signup", function () {
  it("should return a token", async () => {
    const res = await axios.post(`${SERVER_API_URL}/user/signup`, {
      firstName: "Pratik",
      lastName: "Pujari",
      email: "pratikpujari1000@gmail.com",
      password: "Pratik@123",
    });
    assert.equal(res.status, 200);
  });
});
