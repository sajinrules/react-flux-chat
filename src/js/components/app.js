var React = require('react');
const RaisedButton = require('material-ui/lib/raised-button');
const AppBar = require('material-ui/lib/app-bar');
const IconButton = require('material-ui/lib/icon-button');
//const IconMenu = require('material-ui/lib/icon-menu');
//const NavigationClose = require('material-ui/lib/navigation-close');
var App = React.createClass({
	render : function(){
		return(
			<AppBar
				title="Title"
				iconClassNameRight="muidocs-icon-navigation-expand-more" />
		)
	}
});

module.exports= App