const express = require("express");
const { getStudents, addStudents } = require("./Controller");
const router = express.Router();
router.get("/student", getStudents);
router.post("/addStudent", addStudents);
module.exports = router;
