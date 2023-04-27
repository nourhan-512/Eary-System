const express = require("express");
const router = express.Router();
const connect = require("../DB/connect2db");
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Set up multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = 'uploads/';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });

//add new exam
router.post("/", upload.single('audiofile'), (req, res) => {
    const name = req.body.name;
    const audiofile = req.file;
    
    if (name && audiofile) {
        fs.readFile(audiofile.path, (err, data) => {
            if (err) {
                console.log(err);
                res.send("Error occurred during filepath creation.");
                return;
            }
            connect.query("INSERT INTO exam SET ?", {name: name, audiofile: data}, (err, result) => {
                if (!err) {
                    res.send(result);
                    console.log(result)
                }
                else {
                    console.log(err);
                    res.send("Error occurred during exam creation.");
                }
            });
        });
    } else {
        res.send("Please provide name and audio file!");
    }
});

module.exports = router;
