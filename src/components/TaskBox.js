var React = require('react');
var Promise = require('promise');
var _ = require('lodash');


// TODO proper model
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

var Task = React.createClass({
  render: function() {
    return (
      <div className="task">
        <div>
          <b className="taskName">{ this.props.name }</b> <i>by { this.props.author } on { this.props.date }</i>
        </div>
        { this.props.description }
        <hr />
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
              <Task name = { task.name }
                    description = { task.description }
                    key = { task.order }
                    author = { task.author }
                    date= { task.date } />
            );
          }) }

        </div>
    );
  },
});

var TaskBox = React.createClass({
  // react api
  getInitialState: function() {
    return ({
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
        <input type="text" placeholder = "Filter" onChange={ this.handleFilterTermChange } />
        <TaskList data = { this.state.data } />
      </div>
    );
  },

  // event handlers
  handleFilterTermChange: function(e) {
    // TODO look more into this - cascading state change
    this.setState({
      filterTerm: e.target.value
    });
    this._fetch_data();
  },

  // helpers
  _fetch_data: function() {
    // mock up async call
    var COMPUTATION_TIME = 1000;
    var _this = this; // I don't even know if this is necessary, got burned too many times
    var p = new Promise(function(resolve, reject) {
      // simulate delay
      setTimeout(function(){
        resolve(data);
      }, COMPUTATION_TIME);
    }).then(
      function(result) {
        _this.setState({
          data: _this._filter_data(result, _this.state.filterTerm)
        });
      },
      function(error) {
        console.log(error);
      }
    );
  },
  _filter_data: function(data, filterTerm) {
    console.log('filtering using ' + filterTerm);
    return (_.filter(data, function(e) {
      return (filterTerm == "" || e.name.indexOf(filterTerm) > -1 || e.description.indexOf(filterTerm) > -1);
    }));
  },
});

module.exports = TaskBox
