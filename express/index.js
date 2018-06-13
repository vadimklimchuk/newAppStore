const express = require("express");
const path = require('path');
const jwt = require('jsonwebtoken');
const foo = require('./file.json');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config')
const app = express();

const port = process.env.PORT || '5000';

app.set('port', port);
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(__dirname + '/dist'));
app.get('/data', (request, response) => {
    response.set('Content-type', 'application/json;charset=utf-8')
        .sendFile(__dirname + '/file.json');
});
app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to the api'
    })
})


const user = {
  name: 'vadim',
  password: '1234',
  id: '1'
};

app.post('/api/login', (req, res) => {
  if (req.body) {
    if (user && user.password === req.body.password) {
      const token = jwt.sign(user, config.secret, {
        algorithm: 'HS256',
        expiresIn: 10
      }); 

      const response = {
        token: token
      }
      res.status(200).json(response);
    } else {
      res.status(403).send({
        errorMessage: 'Permission denied!'
      });
    }
  } else {
    res.status(403).send({
      errorMessage: 'Please provide name and password'
    });
  }  
});

app.get('/api/check', verifyToken, function (req, res) {
  
  jwt.verify(req.token, config.secret, (err, decoded) => {
    if(decoded) {
      res.send(true);
    } else {
      console.log(err)
      res.send(false);
    } 
  });
});

function verifyToken(req, res, next) {
  const bearerHeader = req.get('authorization');

  if(typeof bearerHeader !== 'undefined') {

    const bearer = bearerHeader.replace(/^Bearer\s/, '');

    req.token = bearer;

    next();
  } else {
    res.sendStatus(403);
  }

}

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(app.get('port'), function () {
    console.log("Node app running is localhost:" + app.get('port'));
});