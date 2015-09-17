var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var App = require('./js/components/App');
var Home = require('./js/components/Home');

module.exports = (
  <Route handler={App}>
    <Route path="/" handler={Home} />
  </Route>
)
