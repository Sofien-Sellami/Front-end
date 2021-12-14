require("dotenv").config();
require("dotenv").config();
const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect("mongodb+srv://wael:0000@cluster0.k3wgl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", connectionParams);
    console.log("Connected to DataBase");
  } catch (error) {
    console.log("Could not connect to DataBase. ", error);
  }
};
