const express = require("express");
const router = express.Router();
const connect = require("../DB/connect2db");
const auth=require('./authlogin.js')

//add new exam
router.post("/:id", (req, res) => {

    const {id} = req.params;
    const title = req.body.title;
    const priority = req.body.priority;

    if ( title && priority) {
     
        connect.query("insert into  answer set ?",{q_id :id, title: title ,priority: priority} , (err, rows, fields) => {
            if (!err) {
                res.send("answers Added Succesfully")
            }
            else {
                console.log(err);
            }
        })
    } else {
      res.send("Please complete answer info!");
          }
  });


  //get all ansers of one question


  router.get("/:id", (req, res) => {
    const {id}=req.params;
    connect.query("SELECT * from answer where q_id=? ",[id] ,(err, rows, fields) => {
        if ( rows &&  rows.length == 0) {
            res.send("no answers");
          }
          else {
            res.send(rows);
            }
    })
  })

module.exports = router;






