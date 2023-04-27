


const express = require("express");
const router = express.Router();
const connect = require("../DB/connect2db");
const multer = require('multer');
const upload = multer();

// add new exam
router.post('/', (req, res) => {
  const name = req.body.name;
  const audiofile = req.body.audiofile;
  if (name && audiofile) {
   
    connect.query('INSERT INTO exam (name, audiofile) VALUES (?, ?)', [name, audiofile], (err, result) => {
      if (err) {
        console.error(err);
        res.send('Error inserting data into database');
      } else {
        res.send(result);
      }
    });
  } else {
    res.send('Missing required fields');
  }
});

module.exports = router;
