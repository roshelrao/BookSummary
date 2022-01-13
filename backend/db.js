var mysql = require('mysql');
var express = require('express');
const app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE IF NOT EXISTS books", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
    con.query("CREATE TABLE IF NOT EXISTS books.book_summary (title VARCHAR(100), description VARCHAR(255), image varchar(100))", function (err, result) {
        if (err) throw err;
        console.log("Table book_summary created");
      });
  });

app.get('/', function(req,res){
  console.log(req.query);
  res.send("done");
})
  
app.listen(3500, () =>{
    console.log("Book summary server running");
})