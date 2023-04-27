const express = require("express");
const router = express.Router();
const connect = require("../DB/connect2db");

//delete exam
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    connect.query("delete from  exam where ?", { id: id }, (err, result) => {
        if (err) {
            res.statusCode = 500
           
        }
        res.json({ "message": "deleted sucssesfuly" })
    })

})
module.exports = router;