const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const connect = require("../DB/connect2db");
const router = express.Router();
const authMiddleware = require('../middleware/middleware');

// login endpoint
router.post("/", async (req, res) => {
  const { email, password } = req.body;
  await connect.query(
    "SELECT * FROM user WHERE email = ?",
    [email],
    (err, results) => {
      if (err) {
        res.send("Internal server error");
        return;
      }
      // check if user exists
      if (results.length == 0) {
        res.send("Invalid email or password");
        return;
      }
      const user = results[0];
      // check if password is correct
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          res.send(err);
          return;
        }
        if (!isMatch) {
          res.send("Invalid email or password");
          return;
        }
        // generate JWT token
        const token = jwt.sign(
          { userId: user.id, email: user.email, type: user.type },
          "secret"
        );
        connect.query(
          "UPDATE user SET token = ? WHERE email = ?",
          [token, email],
          (err, rows, fields) => {
            if (!err) {
              res.set("Authorization", `Bearer ${token}`);
              if (user.type === "admin") {
                res.send("1");
              } else {
             //req.session.loggedin = true;
                res.send("0");
              }
            } else {
              console.log(err);
              res.send("Internal server error");
            }
          }
        );
      });
    }
  );
});

// admin page endpoint
router.get("/admin", authMiddleware,(req, res) => {
   console.log("Welcome to admin page");
   res.send('1')
 });
 
 // user page endpoint
 router.get("/Quiz", authMiddleware, (req, res) => {
  console.log("Welcome to quiz page");
   res.send('1')
 });
 

/*/logout
router.get("/logout", function (req, res) {
  req.session.destroy(function () {
    console.log("Session ended");
    res.redirect("/");
  });
});*/

module.exports = router;
