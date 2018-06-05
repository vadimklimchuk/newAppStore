const express = require("express");
const path = require('path');
const jwt = require('jsonwebtoken');
const foo = require('./file.json');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config')
const tokenList = {};
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
});

app.get("*", (req, res, next) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});

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
        const userWithoutPassword = {...user};
        delete userWithoutPassword.pw;
        const token = jwt.sign(userWithoutPassword, config.secret, { expiresIn: config.tokenLife});
        const refreshToken = jwt.sign(userWithoutPassword, config.refreshTokenSecret, { expiresIn: config.refreshTokenLife});

        const response = {
          user: userWithoutPassword,
          token: token,
          refreshToken: refreshToken
        };
        tokenList[refreshToken] = response;
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

app.listen(app.get('port'), function () {
    console.log("Node app running is localhost:" + app.get('port'));
});
