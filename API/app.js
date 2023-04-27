//const session=require("express-session");
//var MySQLStore = require('express-mysql-session')(session);
//const db=require('./DB/connect2db');
const express= require('express');
const app=express();
const port=1000;
const cors = require('cors');//allow http req for local hoct
const helmet = require("helmet");//ptotect headers
var bodyParser = require('body-parser')

//create session
app.use(helmet());


app.use(express.static('upload'))
app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}))//access url from 


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  

/*
var options = {
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'my_db',
};
var sessionStore = new MySQLStore(options);
app.use(session({
	key: 'session_cookie_name',
	secret: 'session_cookie_secret',
	store: sessionStore,
	resave: false,
	saveUninitialized: false,
	cookie:{maxAge:1000*60*60*24}
	
}));
*/


app.use(express.json())//middleware
app.use(cors());
require('./routes')(app)
app.listen(port,()=>{console.log(`${port} connected`);});








