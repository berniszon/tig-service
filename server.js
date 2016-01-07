var express = require('express');
var api = require('./src/api');


var DEFAULT_PORT = 8080;
var app = express();

app.use(express.static('public'));

app.use('/api', api);
app.get('*', function(req, res) {
  var path = __dirname + '/public/index.html';
  console.log(path);
  res.sendFile(path);
});



app.listen(process.env.PORT || DEFAULT_PORT);
