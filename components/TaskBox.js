var React = require('react');
var Promise = require('promise');
var _ = require('lodash');


// TODO proper model
var data = [
  {"order": 1, "name": "Lorem ipsum", "description": "dolor sit amet"},
  {"order": 2, "name": "consectetur adipiscing", "description": "elit sed do"},
  {"order": 3, "name": "incididunt ut labore", "description": "et dolore magna aliqua"},
]

var Task = React.createClass({
  render: function () {
    return (
      <div className="task">
        <h2 className="taskName">
          { this.props.name }
        </h2>
        { this.props.description }
      </div>
    )
  },
});

var TaskList = React.createClass({
  render: function() {
    return (
      <div className="taskList">
        { this.props.data.map(function(task) {
          return (
            <Task name={ task.name } description={ task.description } key={ task.order } />
          );
        }) }
      </div>
    );
  },
});

var TaskBox = React.createClass({
  // react api
  getInitialState: function() {
   return({
     data: [],
     filterTerm: "",
   });
  },
  componentDidMount: function() {
    this._fetch_data();
  },
  render: function() {
    return (
      <div className="taskBox">
        <h1>Tasks</h1>
        <input type="text" placeholder="Filter" onChange={ this.handleFilterTermChange} />
        <TaskList data={ this.state.data } />
      </div>
    );
  },

  // event handlers
  handleFilterTermChange: function (e) {
    // TODO look more into this - cascading state change
    this.setState({filterTerm: e.target.value});
    this._fetch_data();
  },

  // helpers
  _fetch_data: function () {
    // mock up async call
    var COMPUTATION_TIME = 2000;
    var _this = this;  // I don't even know if this is necessary, got burned too many times
    var p = new Promise(function (resolve, reject) {
      // simulate delay
      // setTimeout(function(){
      //   resolve(data);
      // }, COMPUTATION_TIME);

      // actually block the thread
      for(var i = 0; i < 1000; i++){
        var b = i * 0.1 + 0.2;
        console.log(b);
      }
      resolve(data);
    }).then(
      function (result) {
        _this.setState({data: _this._filter_data(result, _this.state.filterTerm)});
      }, function (error) {
        console.log(error);
      }
    );
  },

  _filter_data: function(data, filterTerm) {
    console.log('filtering using ' + filterTerm);
    return(_.filter(data, function (e) {
      return(filterTerm == "" || e.name.indexOf(filterTerm) > -1 || e.description.indexOf(filterTerm) > - 1);
    }));
  },
});

module.exports = TaskBox
