const assert = require("assert");
// signup test
const SERVER_API_URL = "http://localhost:8000/api";

// test("signup", async () => {
//   const res = await fetch(`${SERVER_API_URL}/user/signup`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       firstName: "Pratik",
//       lastName: "Pujari",
//       email: "pratikpujari1000@gmail.com",
//       password: "Pratik@123",
//     }),
//   });
//   assert.equal(res.status, 201);
// });

// login test
test("login", async () => {
  const res = await fetch(`${SERVER_API_URL}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "pratikpujari1000@gmail.com",
      password: "Pratik@123",
    }),
  });
  assert.equal(res.status, 200);
});
