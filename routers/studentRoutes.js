const express = require("express");
const router = express.Router();
const Student = require("../models/studentModel");

// API endpoint to add a new student record
router.post("/students", async (req, res) => {

    console.log("dkjbeddek",req.body)
  try {
    const { name, fatherName, studentClass, address, attendanceStatus } = req.body;
    console.log("hfbvusdshifjdsnvn", req.body);

    const student = new Student({
      name,
      fatherName,
      studentClass,
      address,
      attendanceStatus,
    });
    await student.save();
    res.status(201).json({ message: "Student record added successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while adding the student record." });
    console.log(error);
  }
});

// API endpoint to get students by attendance status
router.get("/students/:attendanceStatus", async (req, res) => {
  const attendanceStatus = req.params.attendanceStatus.toLowerCase();
  if (attendanceStatus !== "present" && attendanceStatus !== "absent") {
    return res.status(400).json({
      error: 'Invalid attendance status. It should be "present" or "absent".',
    });
  }

  try {
    const students = await Student.find({ attendanceStatus });
    res.json(students);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching student records." });
  }
});

module.exports = router;
