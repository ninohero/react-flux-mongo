var React = require('react');
var Navigation = require('./Navigation');

var Header = React.createComponent({
  render: function(){
    return (
      <header id="header">
        <Navigation />
      </header>
    );
  }
});

module.exports = Header;
