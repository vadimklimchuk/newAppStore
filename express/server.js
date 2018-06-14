const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config')

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the API'
  });
});

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

app.listen(config.port, () => console.log('Server started on port 5000'));
