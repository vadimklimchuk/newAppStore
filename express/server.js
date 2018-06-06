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
        message: 'Welcome to the api'
    })
})

const appUsers = {
    'vadim@gmail.com': {
      name: 'Vadim Klimchuk',
      pw: '1234' 
    },
    'akella1997@tut.by': {
      name: 'Artsiom Pas',
      pw: '1234'
    }
  };

  
  app.post('/api/login', (req, res) => {
  
    if (req.body) {
      const user = appUsers[req.body.email];
      if (user && user.pw === req.body.password) {
        // const userWithoutPassword = {...user};
        // delete userWithoutPassword.pw;
        const token = jwt.sign(user, config.secret, {
          algorithm: 'HS256',
          expiresIn: 5
        }); 

        const response = {
          user: user,
          token: token
          // expiresIn: 3
        }
        res.status(200).json(response);
      } else {
        res.status(403).send({
          errorMessage: 'Permission denied!'
        });
      }
    } else {
      res.status(403).send({
        errorMessage: 'Please provide email and password'
      });
    }
  
  });

  app.get('/api/check', (req, res) => {
    let userToken = req.get('authorization');
  
    userToken = userToken;
  
    jwt.verify(userToken, config.secret, (err, decoded) => {
      if (err) {
        console.log(err);
        res.send(false);
      }
      if (decoded) {
        console.log('DECODED!');
        res.send(true);
      }
    });
  
  });

app.listen(config.port, () => console.log('Server started on port 5000'));