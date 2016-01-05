var express = require('express');
var api = require('./src/api');


var DEFAULT_PORT = 8080;
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.use('/api', api);

app.listen(process.env.PORT || DEFAULT_PORT);
