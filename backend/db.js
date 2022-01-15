var mysql = require('mysql');
var express = require('express');
const app = express();

app.use(express.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "books"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE IF NOT EXISTS books", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
    con.query("CREATE TABLE IF NOT EXISTS books.book_summary (bookId int not null auto_increment primary key, title VARCHAR(100), description VARCHAR(255), image varchar(100))", function (err, result) {
        if (err) throw err;
        console.log("Table book_summary created");
      });
    con.query("CREATE TABLE IF NOT EXISTS books.users (userId int not null auto_increment primary key, fname VARCHAR(100), lname VARCHAR(100), email VARCHAR(100), password varchar(100))", function (err, result) {
      if (err) throw err;
      console.log("Table users created");
    });
  });

app.get('/getBooks', function(req,res){
  con.query("SELECT * FROM book_summary", function(err, result){
    if (err){
      console.log(err);
    }else{
      console.log(result);
      res.send(result);
    }
  })
})

app.post('/register', function(req,res){
  var fname = req.body.fname;
  var lname = req.body.lname;
  var email = req.body.email;
  var pass = req.body.pass;

  con.query("INSERT INTO users (fname, lname, email, password) values (?,?,?,?)",[fname,lname,email,pass], function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log("added user");
      res.send("user added1");
    }
  })
})
  
app.listen(3500, () =>{
    console.log("Book summary server running");
})