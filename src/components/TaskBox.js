var React = require('react');
var Promise = require('promise');
var _ = require('lodash');
var axios = require('axios');
var urljoin = require('url-join');


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
    var _this = this; // I don't even know if this is necessary, got burned too many times
    axios.get(urljoin('/api', this.props.params.team, this.props.params.project, 'tasks')).then(
      function(result) {
        _this.setState({
          data: _this._filter_data(result.data, _this.state.filterTerm)
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
