
const express = require("express");
const router = express.Router();
const connect = require("../DB/connect2db");
const authMiddleware = require('../middleware/middleware');

//get all users
router.get("/", (req, res) => {
    connect.query("SELECT * from user", (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        }
        else {
            console.log(err);
        }
    })
})
module.exports = router;