const express = require("express");

const app = express();
const cors = require("cors");
const studentRoute = require("./Route");
// app.get("/student", (req, res) => {
//   const sql = "SELECT * FROM student";
//   db.query(sql, (err, data) => {
//     if (err) return res.json("ERROR");
//     return res.json(data);
//   });
// });
app.use(express.json());
app.use(cors());
app.use("/api", studentRoute);
app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
