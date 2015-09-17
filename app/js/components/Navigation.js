var React = require("react");

var Navigation = React.createComponent({
  render: function() {
    return (
      <nav className="header_nav">
        <ul className="nav_container">
          <li><a href="#blah">Link one</a></li>
          <li><a href="#two">Link 2</a></li>
          <li><a href="#three">Link 3</a></li>
          <li><a href="#four">Link 4</a></li>
        </ul>
      </nav>
    );
  }
});

module.exports = Navigation;
