const axios = require("axios");

const uri = "http://localhost:4000/user";

function register(user) {
  const response = axios
    .post(`${uri}/register`, user)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.debug(error);
    });
  return response;
}

const login = (user) => {
  const response = axios
    .post(`${uri}/login`, user)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", response.data.user.email);
      return response;
    })
    .catch((error) => {
      console.debug(error);
    });
  return response;
};

module.exports = {
  login,
  register,
};
