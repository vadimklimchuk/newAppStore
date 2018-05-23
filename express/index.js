var express = require("express");
var path = require('path');
var foo = require('./file.json');
var cors = require('cors');
var app = express();

const port = process.env.PORT || '5000';

app.set('port', port);
app.use(cors());

app.use(express.static(__dirname + '/dist'));
app.get('/data', (request, response) => {
    response.set('Content-type', 'application/json;charset=utf-8')
        .sendFile(__dirname + '/file.json');
});

app.get("*", (req, res, next) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(app.get('port'), function () {
    console.log("Node app running is localhost:" + app.get('port'));
});
