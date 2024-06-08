const express = require("express");
var app = express();
var cors = require('cors')

app.use(cors())
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
var storydb = require('./storydb.model');
var storydb1 = require('./storydb_register.model');
var storydb2 = require('./favorite.model');
var fs = require('fs');

//connection to mongodb database code 
var db = 'mongodb://127.0.0.1:27017/storydb';
mongoose.connect(db).then(()=>console.log('connected to MongoDB')).catch((err)=>console.log('error'));


app.get('/', function (req, res) {
  res.send('lets start the backend for the (TALE)ER Web Application');
});

var regExptemailCode = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//get all the login information records from the logininfos collection of storydb
app.get('/storydb/loginlist', function (req, res) {
  storydb1.find({})
    .exec(function (err, logininfos) {
      if (err) {
        res.send('error has occured');
        fs.appendFile("./logFile", "\n" + new Date() + " > GET > '/storydb/loginlist' > ERROR > Message: " + err, function (err) { });
      } else {
        res.json(logininfos);
        fs.appendFile("./logFile", "\n" + new Date() + " > GET > '/storydb/loginlist' >  Status : 200 > SUCCESS > Message: Successfully retrieved all the login information records from the logininfos collection of storydb", function (err) { });
      }
    });
});


//get all the story records from the stories collection of storydb
app.get('/storydb/storylist', function (req, res) {
  storydb.find({})
    .exec(function (err, storyinfos) {
      if (err) {
        res.send('error has occured');
        fs.appendFile("./logFile", "\n" + new Date() + " > GET > '/storydb/storylist' > ERROR > Message: " + err, function (err) { });
      } else {
        res.json(storyinfos);
        fs.appendFile("./logFile", "\n" + new Date() + " > GET > '/storydb/storylist' >  Status : 200 > SUCCESS > Message: Successfully retrieved all the stories from the storyinfos collection of storydb", function (err) { });
      }
    });
});


//get all the story records from the favorites collection of storydb
app.get('/storydb/favoritelist', function (req, res) {
  storydb2.find({})
    .exec(function (err, favoriteinfos) {
      if (err) {
        res.send('error has occured');
        fs.appendFile("./logFile", "\n" + new Date() + " > GET > '/storydb/storylist' > ERROR > Message: " + err, function (err) { });
      } else {
        res.json(favoriteinfos);
        fs.appendFile("./logFile", "\n" + new Date() + " > GET > '/storydb/storylist' >  Status : 200 > SUCCESS > Message: Successfully retrieved all the stories from the storyinfos collection of storydb", function (err) { });
      }
    });
});


//get one record based on given emailId from logininfos collection of storydb
app.get('/storydb/loginlist/getByEmailid', function (req, res) {
  const userEmailid = req.query.emailid
  if (!regExptemailCode.test(userEmailid)) {
    fs.appendFile("./logFile", "\n" + new Date() + " > GET > Status : 400 > '/storydb/loginlist/getByEmailid' > ERROR > Message: Invalid email format has been entered", function (err) { });
    return res.status(400).json({ status: 400, error: 'Invalid email format has been entered' })
  }
  else {
    storydb.findOne({
      emailid: req.query.emailid
    })
      .exec(function (err, logininfos) {
        if (err) {
          fs.appendFile("./logFile", "\n" + new Date() + " > GET > '/storydb/loginlist/getByEmailid' > ERROR > Message: " + err, function (err) { });
          res.send('error has occured');
        } else {
          res.json({ status: 200, description: 'Success' })
          fs.appendFile("./logFile", "\n" + new Date() + " > GET > Status : 200 > '/storydb/loginlist/getByEmailid' > SUCCESS > Message: Successfully fetched login information based on given emailId from logininfos collection of storydb", function (err) { });
        }
      });
  }
});


//post login credentials while first time sign-on to logininfos collection of storydb
app.post('/storydb/logininfo/register', function (req, res) {

  const userEmailid = req.body.emailid
  const userPassword = req.body.password

  if (!regExptemailCode.test(userEmailid)) {
    fs.appendFile("./logFile", "\n" + new Date() + " > POST > Status : 400 > 'storydb/logininfo/register' > ERROR > Message: Invalid email format has been entered", function (err) { });
    return res.status(400).json({ status: 400, error: 'Invalid email format has been entered' })
  }
  else {
    storydb1.create(req.body, function (err, logininfos) {
      if (err) {
        fs.appendFile("./logFile", "\n" + new Date() + " > POST > 'storydb/logininfo/register' > ERROR > Message: " + err, function (err) { });
        res.send('error has occured');
      } else {
        res.json({ status: 200, description: 'Success' })
        fs.appendFile("./logFile", "\n" + new Date() + " > POST > Status : 200 > 'storydb/logininfo/register' > SUCCESS > Message: Successfully Added new user login information in the logininfos collection of storydb", function (err) { });
      }
    });
  }
});


//post login credentials while first time sign-on to logininfos collection of storydb
app.post('/storydb/addfavorite', function (req, res) {

    storydb2.create(req.body, function (err, favoriteinfos) {
      if (err) {
        fs.appendFile("./logFile", "\n" + new Date() + " > POST > 'storydb/logininfo/register' > ERROR > Message: " + err, function (err) { });
        res.send('error has occured');
      } else {
        res.json({ status: 200, description: 'Success' })
        fs.appendFile("./logFile", "\n" + new Date() + " > POST > Status : 200 > 'storydb/logininfo/register' > SUCCESS > Message: Successfully Added new user login information in the logininfos collection of storydb", function (err) { });
      }
    });
});

// code to delete story from favorites
app.post('/storydb/deletefav', function (req, res, next) {
  console.log(req.body)
  // const storyid = req.body.storyid
  storydb2.deleteOne(req.body, (err, doc) => {
    if (err) {
      fs.appendFile("./logFile", "\n" + new Date() + " > POST > 'storydb/logininfo/register' > ERROR > Message: " + err, function (err) { });
      res.send('error has occured');
        } else {
          res.json({ status: 200, description: 'Success' })
          fs.appendFile("./logFile", "\n" + new Date() + " > POST > Status : 200 > 'storydb/logininfo/register' > SUCCESS > Message: Successfully Added new user login information in the logininfos collection of storydb", function (err) { });
            }
  })
})


// app.post('/storydb/logininfo/updatefav', function (req, res) {

//   const storyid = req.body.storyid
// const newvalues = {}
//     storydb.updateOne({storyid : storyid}, newvalues, function(err, res) {
//       if (err) {
//         fs.appendFile("./logFile", "\n" + new Date() + " > POST > 'storydb/logininfo/register' > ERROR > Message: " + err, function (err) { });
//         res.send('error has occured');
//       } else {
//         res.json({ status: 200, description: 'Success' })
//         fs.appendFile("./logFile", "\n" + new Date() + " > POST > Status : 200 > 'storydb/logininfo/register' > SUCCESS > Message: Successfully Added new user login information in the logininfos collection of storydb", function (err) { });
//       }
//     });
//   // }
// });


app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vparjunwadkar1995@gmail.com',
      pass: 'owog kkiy rwlc kdrw'
    }
  });

  const mailOptions = {
    from: email,
    to: 'vparjunwadkar1995@gmail.com',
    subject: 'Contact Us Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});


//code to listen on 8080 port
var port = 8080;
app.listen(port, function () {
  console.log("App is running on the Port " + port);
  fs.writeFile("./logFile", new Date() + " > Message: App is running on Port " + port, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("The logFile has got created! You can now open this file anytime and check for the logs...");
    }
  });
});