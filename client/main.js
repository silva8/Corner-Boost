import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import App from './../imports/components/App';
import AdminMenu from './../imports/components/AdminMenu';
import Navigationbar from './../imports/components/Navigationbar';
import ProductPage from './../imports/components/ProductPage';
import MachineForm from './../imports/components/MachineForm';
import MachineProducts from './../imports/components/MachineProducts';
import SignUp from './../imports/components/SignUp';
import Login from './../imports/components/Login';
import NotFound from './../imports/components/NotFound';
import PrivateRoute from './../imports/components/PrivateRoute';
import PublicRoute from './../imports/components/PublicRoute';
import AdminRoute from './../imports/components/AdminRoute';
import ShoppingCart from './../imports/components/ShoppingCart';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


Meteor.startup(function () {
	Tracker.autorun(function() {
		const isAuthenticated = !!Meteor.userId();
		const routing = (
			<Router>
				<Route render={(props) => <Navigationbar {...props} isAuth={isAuthenticated}/>}/>
				<Switch>
					<PublicRoute exact path="/" component={Login} />
					<PublicRoute path="/signup" component={SignUp} />
					<PrivateRoute path="/machineform" component={MachineForm} />
					<PrivateRoute path="/machine/:code" component={MachineProducts} redirect="/" />
					<PrivateRoute path="/product/:id" component={ProductPage} />
					<PrivateRoute path="/shopping-cart" component={ShoppingCart} />
					<AdminRoute path ="/admin-menu" component={AdminMenu} />
					<Route component={NotFound} />
	 			</Switch>
	  		</Router>
	  	);
	  	ReactDOM.render(routing, document.getElementById('root'));
  	});
});

