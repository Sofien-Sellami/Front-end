var Passager = require("../models/passager");
const axios = require("axios");
const mongoose = require("mongoose");
const { body, validationResult } = require("express-validator");

const getPassager = async (req, res) => {
 
 
  axios.get('http://localhost:8085/api/candidats',{
    data: {},
  }).then(resp => {
    res.status(200).json(resp.data)
  
})
.catch(function (error) {
  console.log(error);
})


 
};

const createPassager = async (req, res) => {
  var newPassager = new Passager();
  newPassager.nom = req.body.nom;
  newPassager.prenom = req.body.prenom;
  newPassager.email = req.body.email;


  axios.post('http://localhost:8085/api/candidats', newPassager)
  .then(response =>  res.status(200).json(newPassager))
  .catch(error => {
      console.error('There was an error!', error);
  });
};


const updatePassager = async (req, res) => {
  const { id } = req.params;
  axios.put(`http://localhost:8085/api/candidats/${id}`, {
     nom: req.body.nom,
     prenom: req.body.prenom,
     email: req.body.email
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
};

const deletePassager = async (req, res) => {
  const { id } = req.params;

  axios.delete(`http://localhost:8085/api/candidats/${id}`)
  res.json({ message: "Passager deleted successfully." });
};

module.exports = { getPassager, createPassager, updatePassager, deletePassager };
