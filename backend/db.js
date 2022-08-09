const mongoose = require("mongoose");

const connectToMongo = () => {
  mongoose.connect("mongodb://localhost:27017/robolution"),
    //   mongoose.connect('mongodb+srv://RobolutionClub:roBoLution%4022@cluster1.oew0vbw.mongodb.net/?retryWrites=true&w=majority'),
    () => {
      console.log("connectio with db sucessful");
    };
};

module.exports = connectToMongo;
