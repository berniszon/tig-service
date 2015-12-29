var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var TaskBox = require('./components/TaskBox');


ReactDOM.render(
  <div>
    <h1>Hello world!</h1>
    <TaskBox />
  </div>,
  document.getElementById('content')

);
