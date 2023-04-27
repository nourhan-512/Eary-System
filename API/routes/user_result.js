const express = require("express");
const router = express.Router();
const connect = require("../DB/connect2db");

router.post("/:token/:result/:date", (req, res) => {
 
  connect.query( "INSERT INTO user_exam(user_token,result,date) VALUES( ?, ?,? )",[req.params.token,req.params.result,req.params.date ],(err, rows, fields) => {
      if (!err) {
          res.send("New result added Succesfully")
      }
      else {
          console.log(err);
      }
  })
}) 


router.get("/:token", (req, res) => {
    connect.query("SELECT * from user_exam where user_token=? ", [ req.params.token], (err, rows, fields) => {
      if (rows.length == 0) {
        res.send("no results");
      }
      else {
        res.send(rows);
      }
    })
  })
  

module.exports = router;
