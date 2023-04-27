const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'my_db'
});

connection.connect((err)=> {
    if (err) {
      console.error('error connecting to db: ' + err.stack);
      return;
    }
    console.log('DB connected as id ' + connection.threadId);
  });

  module.exports=connection;