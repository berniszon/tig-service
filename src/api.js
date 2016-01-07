var express = require('express');
var exec = require('child-process-promise').exec;
var router = express.Router();
var urljoin = require('url-join');

REMOTE = '/Users/grzegorz/Projects/Tig/remotes'

// middleware that is specific to this router example
// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now());
//   next();
// });

router.get('/', function(req, res) {
  res.send('api');
});

router.get('/:team/:project/tasks', function(req, res) {
  var remote_path = urljoin(REMOTE, req.params.team, req.params.project + '.git');

  exec("cd " + remote_path + " && tig tasks --json").then(function(result) {
      console.log('done');
      console.log(result.stdout);
      console.log(result.stderr);
      res.send(result.stdout);
  }).fail(function(err) {
    console.log(err);
    // TODO this should be a 500 error
    res.send([]);
  });;
});

module.exports = router;
