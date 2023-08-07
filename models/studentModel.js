const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String },
  fatherName: { type: String },
  studentClass: { type: String },
  address: { type: String },
  attendanceStatus: {
    type: String,
    enum: ["present", "absent"],
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
