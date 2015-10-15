var React = require('react');
/*const mui = require('material-ui');
const Tab               = mui.Tab;
const Tabs              = mui.Tabs;*/
/*const Tabs = require('material-ui/lib/tabs/tabs');
const Tab = require('material-ui/lib/tabs/tab');*/
//const NavigationClose = require('material-ui/lib/navigation-close');
const AppBar = require('material-ui/lib/app-bar');
const IconButton = require('material-ui/lib/icon-button');
const FlatButton = require('material-ui/lib/flat-button');
const NavigationClose = require('material-ui/lib/svg-icons/navigation/close');
const IconMenu = require('material-ui/lib/menus/icon-menu');
//const MoreVertIcon = require('material-ui/lib/svg-icons/navigation/more-vert');
const MoreVertIcon = require('material-ui/lib/svg-icons/navigation/more-vert');
const MenuItem = require('material-ui/lib/menu/menu-item');
var Navbar = React.createClass({
	render : function(){
		return(
			<div>
				<AppBar
					title="Title"
					iconElementLeft={<IconButton><NavigationClose /></IconButton>}
					iconElementRight={
					    <IconMenu iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}>
					      <MenuItem index={1} primaryText="Refresh" />
					      <MenuItem index={2} primaryText="Help" />
					      <MenuItem index={3} primaryText="Sign out" />
					    </IconMenu>
					}/>
			</div>
		)
	}
});

module.exports= Navbar
	