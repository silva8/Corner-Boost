import React from 'react';
import { Meteor } from 'meteor/meteor';

import { Navbar, Dropdown } from 'react-bootstrap';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { Link } from 'react-router-dom';

export default class Navigationbar extends React.Component {
	constructor(props, context) {
    	super(props, context);
    	this.logout = this.logout.bind(this);
    	this.state = {isAuth: this.props.isAuth, user: []};
  	}

	logout() {
		Meteor.logout();
		this.setState({isAuth: false, user: []});
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({isAuth: this.props.isAuth});
		}, 1000);
  	}

	render () {
		let user = this.state.user;
		return (
			<Navbar sticky="top" bg="light">
				<Navbar.Brand href="/" className="font-weight-bold">Corner Boost</Navbar.Brand>
				{(this.state.isAuth) &&
  				<Navbar.Collapse className="justify-content-end">
	      			<Link to="/shopping-cart"><MaterialIcon icon="shopping_cart" size={20} color='#000000'/></Link>
	      			<Dropdown>
				    	<Dropdown.Toggle variant="link" id="dropdown-toggle">
				    		Logout
				    	</Dropdown.Toggle>
				    	<Dropdown.Menu>
				      		<Dropdown.Item eventKey="1" onClick={this.logout}>Logout</Dropdown.Item>
				    	</Dropdown.Menu>
				  	</Dropdown>
  				</Navbar.Collapse>
  				}
		  	</Navbar>
		);
	}
};