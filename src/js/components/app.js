var React = require('react');
const RaisedButton = require('material-ui/lib/raised-button');

const IconButton = require('material-ui/lib/icon-button');
const Navbar = require('./navbar.js');

//const IconMenu = require('material-ui/lib/icon-menu');
//const NavigationClose = require('material-ui/lib/navigation-close');
var App = React.createClass({
	render : function(){
		return(
			<Navbar/>
		)
	}
});

module.exports= App