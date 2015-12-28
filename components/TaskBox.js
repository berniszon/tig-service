var React = require('react');

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
  }
});

var TaskBox = React.createClass({
  render: function() {
    var taskList = this.props.data.map(function(task) {
      return (
        <Task name={ task.name } description={ task.description } key={ task.order } />
      );
    });
    return (
      <div className="taskBox">
        <h1>Tasks</h1>
        <div className="taskList">
          { taskList }
        </div>
      </div>
    );
  }
});

module.exports = TaskBox
