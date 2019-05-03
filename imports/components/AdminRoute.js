import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect} from 'react-router-dom';

export default class AdminRoute extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const isAuthenticated = !!Meteor.userId();
		const isAdmin = true;
		if(isAuthenticated && isAdmin){
			return <Route exact={this.props.exact} path={this.props.path} component={this.props.component}/> 
		}
		return (
			<Redirect to={this.props.redirect} />
		);
	}
};

AdminRoute.defaultProps = {
	redirect: '/'
};

AdminRoute.propTypes = {
	redirect: PropTypes.string,
  	path: PropTypes.string.isRequired,
  	component: PropTypes.func.isRequired
}