const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passagerShema = new Schema({
  nom: { type: String },
  prenom: { type: String },
  email: { type: String },
  nationalite: { type: String},
});

module.exports = mongoose.model("Passager", passagerShema);
