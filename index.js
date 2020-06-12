var express = require('express');
var mysql = require('mysql');
var app = express();
var path = require("path");
// const multer = require('multer');
// const mkdirp = require('mkdirp');
var cors = require("cors");
app.use(cors());
const PORT = 3000;

var fs = require('fs')
const nodemailer = require('nodemailer');
const readXlsxFile = require('read-excel-file/node');
const URL = `http://localhost:${PORT}/`;


// **************************************EMAIL*****************************************************



// ********************************************************************************************
// app.set('view engine','ejs');
app.use(express.static(__dirname +'/public'));
pool = mysql.createPool({
  "connectionLimit": 10,
  "host": "localhost",
  "user": "root",
  "password": "",
  "database": "se",
  "timezone": 'utc',

  queryFormat: function(query, values) {
    if (!values) return query;
    return query.replace(/\:(\w+)/g, function(txt, key) {
      if (values.hasOwnProperty(key)) {
        return this.escape(values[key]);
      }
      return txt;
    }.bind(this));
  }
});

const inputfile = "myfig.png";
const outputfile = "./src/app/performance/output1.png";

// Read buffer of an image file:
const data = readImageFile(inputfile); // `data`'s type is Buffer

pool.query("INSERT INTO `user`(data) VALUES(BINARY(:data))", { data }, function(err, res) {
  if (err) throw err;
  console.log("BLOB data inserted!");
  // Check to read it from DB:
  pool.query("select * from `user`", function(err, res) {
    if (err) throw err;
    const row = res[0];
    // Got BLOB data:
    const data = row.data;
    console.log("BLOB data read!");
    // Converted to Buffer:
    const buf = new Buffer(data, "binary");
    // Write new file out:
    fs.writeFileSync(outputfile, buf);
    console.log("New file output:", outputfile);
  });
});

function readImageFile(file) {
  // read binary data from a file:
  const bitmap = fs.readFileSync(file);
  const buf = new Buffer(bitmap);
  return buf;
}

// ****************************************************************************

app.get('/performance', (req, res) => {

  const { spawn } = require('child_process');
  spawn('python', ['test.py']);

  // pyProg.stdout.on('data', function(data) {


  //     // res.write(data)
  //     res.end('File Saved')
  // });

})
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'minor'
});
var id = 1;
// ****************************Excel to Database********************************************
readXlsxFile('abc.xlsx').then((rows) => {
  console.log(rows);
  rows.shift();


  connection.connect((error) => {
    if (error) {
      console.error(error);
    } else {
      var sqls ="TRUNCATE TABLE student";
      connection.query(sqls,function(err,data)
      {

      })

      let query = 'INSERT INTO student (name,email,phone,password,age,std,school,p_phone,attendance,attendance1,test1,test2,test3,test1_se,test2_se,test3_se) VALUES ?';
      connection.query(query, [rows], (error, response) => {
        console.log(error || response);
      });
      // *********************************************
      var sql1 ="SELECT * FROM student";



      // sdf
      var sql ="SELECT * FROM student WHERE attendance < 75";
      connection.query(sql1,function(err,data)
      {
        app.get('/user', function (req, res) {
          res.send(data);
      });
      });
      var names = new Array();
      var cnt = 0;
      connection.query(sql,function(err,data)
      {
      var len = data.length
      var dat = new Array();

      for(i=0;i<len;i++){
        dat[i]=data[i]['email']
        names[i]=data[i]['name']
        cnt = cnt +1;
      }
      for(i=0;i<len;i++){
        console.log(dat[i])
        console.log(names[i])
      }


        const transport = {
          service: "Gmail",
          auth: {
            user: "",
            pass: ""
          }
        }

        const smtpTransport = nodemailer.createTransport(transport)

        const options = {
          from: "JAWWAD Ismail <>",
          to: dat,
          subject: "Attendance",
          html: "<h1>You have less than 75% attendance in Software Engineering</h1>"
        };

        smtpTransport.sendMail(options,(err,info) =>{
          err ? console.log(err) :console.log(info)
        })


      });
      // sfd
      // sfd
      var sql ="SELECT * FROM student WHERE attendance1 < 75";

      connection.query(sql,function(err,data)
      {
      var len = data.length
      var dat = new Array();
      for(i=0;i<len;i++){
        dat[i]=data[i]['email']
        names[cnt]    =data[i]['name']
        cnt =cnt +1
      }
      for(i=0;i<len;i++){
        console.log(dat[i])

      }
      app.get('/login', function (req, res) {
        res.send(names);
    });

        const transport = {
          service: "Gmail",
          auth: {
            user: "",
            pass: ""
          }
        }

        const smtpTransport = nodemailer.createTransport(transport)

        const options = {
          from: "JAWWAD Ismail <>",
          to: dat,
          subject: "Attendance",
          html: "<h1>You have less than 75% attendance in TCS</h1>"
        };

        smtpTransport.sendMail(options,(err,info) =>{
          err ? console.log(err) :console.log(info)
        })


      });
      // sfd
    }
  });
})












// var sql = "INSERT INTO CheckTable (name, email, phone, address) VALUES ('Ibrahim', 'ibra@123', '123456789', 'Allahabad')";
// connection.query(sql, function (err, result) {
// if (err) throw err;
// console.log("1 record inserted");
// });


app.get('/',function(req,res)
{
  res.sendFile(path.join(__dirname,'public/index.html'));
});


app.listen(3000,function() {});
console.log(`Listening to port 3000`)


