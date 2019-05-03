import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect} from 'react-router-dom';

export default class PublicRoute extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const isAuthenticated = !!Meteor.userId();
		if(isAuthenticated){
			return <Redirect to={this.props.redirect} />;
		}
		return (
			<Route exact={this.props.exact} path={this.props.path} component={this.props.component}/>
		);
	}
};

PublicRoute.defaultProps = {
	redirect: '/machineform'
};

PublicRoute.propTypes = {
	redirect: PropTypes.string,
  	path: PropTypes.string.isRequired,
  	component: PropTypes.func.isRequired
}