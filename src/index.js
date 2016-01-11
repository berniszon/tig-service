var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = require('./history');

var App = require('./components/App');
var Team = require('./components/Team');
var Project = require('./components/Project');
var TaskBox = require('./components/TaskBox');


// ReactDOM.render(
//   <Router history={browserHistory}>
//     <Route path='/' component={App}>
//       <Route path=':team/:project/tasks' component={TaskBox}>

//       </Route>
//     </Route>
//   </Router>,
//   document.getElementById('app')
// );

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
    </Route>
    <Route path='/:team/:project/tasks' component={TaskBox}>
      </Route>
  </Router>,
  document.getElementById('app')
);
