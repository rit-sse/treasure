/** @jsx React.DOM */
//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
require("react-tap-event-plugin")();

var React = window.React = require('react'),
    {AppCanvas, AppBar, LeftNav, RaisedButton, Paper} = require('material-ui'),
    mountNode = document.getElementById("app");

var Greenback = React.createClass({
  getInitialState: function() {
    return {};
  },
  _onMenuIconButtonTouchTap: function(e) {
    this.refs.nav.toggle();
  },
  render: function() {
    var styles = {margin: '5px'};
    return (
      <AppCanvas predefinedLayout={1}>

        <AppBar
          className='mui-dark-theme'
          onMenuIconButtonTouchTap={this._onMenuIconButtonTouchTap}
          title='greenback'
          zDepth={0}>
        </AppBar>

        <LeftNav ref='nav' docked={false} menuItems={['Stuff']} />

        <div className='mui-app-content-canvas'>
          <RaisedButton label="Test" primary={true} style={styles} />
        </div>

        <div className='footer full-width-section mui-dark-theme'>
          <p>
            &copy; Society of Software Engineers 2015
          </p>
        </div>

      </AppCanvas>
    );
  }
});


React.render(<Greenback />, mountNode);

module.exports = app;
