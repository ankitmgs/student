// db.js
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Rehnuma11:1212@cluster0.mkx69tw.mongodb.net/Student_Attendence?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
