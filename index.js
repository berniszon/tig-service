var React = require('react');
var ReactDOM = require('react-dom');

var TaskBox = require('./components/TaskBox');

// TODO proper model
var data = [
  {"order": 1, "name": "Lorem ipsum", "description": "dolor sit amet"},
  {"order": 2, "name": "consectetur adipiscing", "description": "elit sed do"},
  {"order": 3, "name": "incididunt ut labore", "description": "et dolore magna aliqua"},
]

ReactDOM.render(
  <div>
    <h1>Hello world!</h1>
    <TaskBox data={ data } />
  </div>,
  document.getElementById('content')

);
