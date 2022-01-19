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


//create database and tables

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE IF NOT EXISTS books", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
    con.query("CREATE TABLE IF NOT EXISTS books.book_summary (bookId int not null auto_increment primary key, title VARCHAR(100), description VARCHAR(10000), image varchar(100))", function (err, result) {
        if (err) throw err;
        console.log("Table book_summary created");
      });
    con.query("CREATE TABLE IF NOT EXISTS books.users (userId int not null auto_increment primary key, fname VARCHAR(100), lname VARCHAR(100), email VARCHAR(100), password varchar(100))", function (err, result) {
      if (err) throw err;
      console.log("Table users created");
    });
    con.query("CREATE TABLE IF NOT EXISTS books.saved_books(userId int not null, bookId int not null)", function(err, result){
      if(err) throw err;
      console.log("saved_books table created");
    })
  });

//getBooks
app.get('/getBooks', function(req,res){
  con.query("SELECT * FROM books.book_summary", function(err, result){
    if (err){
      console.log(err);
    }else{
      console.log(result);
      res.send(result);
    }
  })
})


//register
app.post('/register', function(req,res){
  var fname = req.body.fname;
  var lname = req.body.lname;
  var email = req.body.email;
  var pass = req.body.pass;

  con.query("INSERT INTO books.users (fname, lname, email, password) values (?,?,?,?)",[fname,lname,email,pass], function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log("added user");
      res.send("user added1");
    }
  })
})

//login
app.post('/login', function(req,res){
  var email = req.body.email;
  var pass = req.body.pass;

  con.query("(SELECT userId FROM books.users WHERE email=? AND password=?)",[email,pass], function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send(result);
      console.log(result);
    }
  })
})
  
//get book details
app.get('/books/:id', function(req,res){
  var id = req.params.id;
  
  con.query("SELECT * FROM books.book_summary WHERE bookId=?", [id] ,function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  })
})


//add books
app.post('/add', function(req,res){
  var title = req.body.title;
  var description = req.body.description;
  var image = req.body.image;

  con.query("INSERT INTO books.book_summary (title, description, image) VALUES (?,?,?)", [title, description, image] , function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  })
})

//save book
app.post('/saveBook', function(req,res){

  var userid = req.body.userId;
  var bookid = req.body.bookId;

  con.query("INSERT INTO books.saved_books (userId, bookId) VALUES (?,?)", [userid, bookid], function(err, result){
    if(err){
      console.log(err);
    }else{
      console.log("book saved");
      res.send(result);
    }
  })

})

//send saved books
app.get('/getSavedBooks/:id', function(req,res){
  var userid = req.params.id;

  con.query("SELECT book_summary.bookid, book_summary.title FROM book_summary INNER JOIN saved_books ON book_summary.bookId=saved_books.bookId WHERE userId=?",[userid], function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log(result);
      res.send(result)
    }
  })
})

app.listen(3500, () =>{
    console.log("Book summary server running");
})