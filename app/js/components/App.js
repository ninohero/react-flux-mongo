var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Header = require('./Header.js');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
