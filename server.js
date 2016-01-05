var express = require('express');
var api = require('./src/api');


var DEFAULT_PORT = 8080;
var app = express();

app.use(expres.static('public'));

app.get('/', function(req, res) {
  res.type('text/plain'); // set content-type
  res.send('Hello express.js!'); // send text response
});

app.use('/api', api);

app.listen(process.env.PORT || DEFAULT_PORT);
