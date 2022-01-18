const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createConnection({
  host: "localhost",
  user: "sqluser",
  password: "password",
  database: "userdata",
  insecureAuth: true,
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM userdetails";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const address = req.body.address;

  const sqlInsert =
    "INSERT INTO userdetails (firstName,lastName, email, mobile, address) VALUES (?, ?, ?, ?, ?);";
  db.query(
    sqlInsert,
    [firstName, lastName, email, mobile, address],
    (err, result) => {
      console.log(result);
    }
  );
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
