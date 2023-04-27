const express = require("express");
const router = express.Router();
const connect = require("../DB/connect2db");
const bcrypt=require('bcrypt')


//edit account
router.put('/',async (req, res) => {
  
  const data = req.body;
  const salt =await bcrypt .genSalt(10);
  const password =await bcrypt.hash(req.body.password,salt);
  connect.query(

    "update user SET ? where  ? ",
    [{ name: data.name, password:password,  phone: data.phone }, { id: data.id}]
    , (err, result) => {
      if (err) {
        res.statusCode = 500;
        res.send( "faild to updated")
      }

      res.send( "updated done" )
    });

});
module.exports = router;