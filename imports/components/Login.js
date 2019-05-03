import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { Redirect} from 'react-router-dom';

export default class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = { errors: [] };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		
		let user = e.target.user.value;
		let password = e.target.password.value;

		Meteor.loginWithPassword(user, password, (err) => {
			console.log("Callback:", err);
		});
	}

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Group controlId="formBasicEmail">
			    	<Form.Label>Email or username</Form.Label>
			    	<Form.Control type="user" name="user" placeholder="example@mail.com" />
			    	<Form.Text className="text-muted">
			     		We'll never share your email with anyone else.
			    	</Form.Text>
				</Form.Group>
				<Form.Group controlId="formBasicPassword">
			    	<Form.Label>Password</Form.Label>
			    	<Form.Control type="password" name="password" placeholder="12345678" />
				</Form.Group>
			  	<Button variant="primary" type="submit">
			    	Login
			  	</Button>
			</Form>
		);
	}
};