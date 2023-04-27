const express = require("express");
const router = express.Router();
const connect = require("../DB/connect2db");
const bcrypt=require('bcrypt')

router.post("/", async(req, res) => {
  
    const name = req.body.name;
    const salt =await bcrypt .genSalt(10);
    const password =await bcrypt.hash(req.body.password,salt);
    const email = req.body.email;
    const phone = req.body.phone;
  
 
    
    if (name && password && email && phone) {
      registerIfallowable(name,password,email,phone,res);
    } else {
      res.send("Please complete your info!");

    }
  });

module.exports = router;
function insertUser(name,password,email,phone,res){
 
 connect.query(
    "insert into user set?",
    { name: name, password:password,email:email,phone:phone},
    (err, result, fields) => {
      if (err) {
       res.send(err)
       
      } else {
       
        res.send("signing up completed");
        
      }
      res.end();
    }
  );}

function registerIfallowable(name,password,email,phone,res){
  connect.query(
    "SELECT * FROM user WHERE email = ?  ",
    [email],
    function (error, results, fields) {
      if (error) {
        res.send("error in search about email");
        
      }
      if (results.length > 0) { res.send("this account is aleready exist"); }
      else {
        insertUser(name,password,email,phone,res);
      }
    }
  );
}


module.exports = router;