var express = require('express');
var router = express.Router();

// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now());
//   next();
// });

router.get('/', function(req, res) {
  res.send('api');
});

var data = [
  {
    "order": 1,
    "name": "Lorem ipsum",
    "description": "dolor sit amet",
    "author": "sikor",
    "date": "2015-12-30T00:00:00Z",
  },
  {
    "order": 2,
    "name": "consectetur adipiscing",
    "description": "elit sed do",
    "author": "sikor",
    "date": "2015-12-30T00:00:00Z",
  },
  {
    "order": 3,
    "name": "incididunt ut labore",
    "description": "et dolore magna aliqua",
    "author": "sikor",
    "date": "2015-12-30T00:00:00Z",
  },
]

router.get('/tasks', function(req, res) {
  // res.send(data);
  execute("tig tasks --json", function(data) {
      res.send(data);
  });
});

module.exports = router;
