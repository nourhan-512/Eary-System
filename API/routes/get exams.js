const express = require("express");
const router = express.Router();
const connect = require("../DB/connect2db");

//get all posts
router.get("/",(req, res) => {
    connect.query("SELECT * from  exam", (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        }
        else {
            console.log(err);
        }
    })
})

module.exports = router;