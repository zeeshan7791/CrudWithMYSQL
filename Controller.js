const db = require("./config/config");

const getStudents = (req, res) => {
  console.log("hello");

  try {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, data) => {
      if (err) return res.json("ERROR");
      return res.json(data);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const addStudents = (req, res) => {
  console.log("hello");
  const { id, name, email, address } = req.body;
  console.log(req.body);
  try {
    const addData = `INSERT INTO student (id, name, email, address) VALUES ('${parseInt(
      id
    )}', '${name}', '${email}', '${address}')`;
    db.query(addData, (err, data) => {
      if (err) {
        console.error(err);
        return res.json("ERROR");
      }

      const newData = res.json(data);
      console.log(newData.name, "newData---");
      return newData.name;
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getStudents,
  addStudents,
};
