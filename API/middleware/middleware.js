
 


  const jwt = require('jsonwebtoken');

const authMiddleware= (req, res, next) => {
  const authHeader = req.get('Authorization');
  //console.log("Auth",authHeader);
  if (!authHeader) {
   req.isAuth = false;
   return res.status(401).send('access rejected..no authheader.');
  }
  
  const token = authHeader.split(' ')[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, 'secret');
  } catch (err) {
    req.isAuth = false;
    return res.status(401).send('access rejected.. error in verify token..');
  }
  const config=req.app.get('config');
  req.userId = decodedToken.userId;
  req.isAuth = true;
  console.log('isAuth');
  next();
};



  // admin middleware
  const adminMiddleware = (req, res, next) => {
    if (req.user.type !== "admin") {
      res.send("Forbidden");
      return;
    }
    next();
  };

 
module.exports=adminMiddleware;
module.exports = authMiddleware;