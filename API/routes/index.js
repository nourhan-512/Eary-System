//to active all routes
module.exports = app => {
    //auth
    app.use('/register', require('./Register'));
    app.use('/authlogin',require('./authlogin'));
    
    app.use('/update', require('./updateUserprofile'));
    app.use('/logout',require('./authlogin'));

//post
    app.use('/createpost',require('./create Exam'));
    app.use('/deletepost',require('./delete exam'));
    app.use('/posts', require('./get exams'));
    app.use('/addanswer',require('./add_answers'));
    app.use('/creat',require('./creat_exam'));
//user
    
    app.use('/deleteuser',require('./delete user'));
    app.use('/getusers',require('./get users'));
    app.use('/result',require('./user_result'));
    app.use('/getanswers',require('./add_answers'));
   
  
   //pages
   
  
}