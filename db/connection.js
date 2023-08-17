const mongoose = require("mongoose");

uri =
  "mongodb+srv://mehadmushtaq:scwGyOftRuve8fRK@optima.zheepqt.mongodb.net/Optima?retryWrites=true&w=majority";

const connectDB = () => {
  console.log("entered in db");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
