const axios = require("axios");

const uri = "http://localhost:4000/passager";
const getPassager = axios
  .get(uri)
  .then((response) => response.data)
  .catch((error) => {
    if (error.response && error.response.status === 404) {
      return `\u2014`;
    }
  });

function addPassager(passager) {
  const response = axios
    .post(`${uri}/add`, passager)
    .then((res) => {
      if (res) {
        return true;
      } else return false;
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        return `\u2014`;
      }
    });
  return response;
}

const deletePassager = (id) => axios.delete(`${uri}/${id}`);

const updatePassager = (id, newTodo) => axios.patch(`${uri}/${id}`, newTodo);

module.exports = {
  getPassager,
  addPassager,
  deletePassager,
  updatePassager,
};
