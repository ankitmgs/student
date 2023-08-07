const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fatherName: { type: String, required: true },
  studentClass: { type: String, required: true },
  address: { type: String, required: true },
  attendanceStatus: {
    type: String,
    required: true,
    enum: ["present", "absent"],
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
