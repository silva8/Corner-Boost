import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Accounts } from 'meteor/accounts-base';
import { Link } from 'react-router-dom'

export default class SignUp extends React.Component {
	constructor(props){
		super(props);
		this.state = { errors: [] };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();

		let name = e.target.name.value;
		let username = e.target.username.value;
		let email = e.target.email.value;
		let password = e.target.password.value;

		Accounts.createUser({username, email, password}, (err) => {
			console.log("Callback:", err);
		});
	}

	render() {
		return (
			<div>
				<Form onSubmit={this.handleSubmit}>
					<Form.Group controlId="formBasicName">
				    	<Form.Label>Name</Form.Label>
				    	<Form.Control type="text" name="name" placeholder="example@mail.com" />
					</Form.Group>
					<Form.Group controlId="formBasicUsername">
				    	<Form.Label>Username</Form.Label>
				    	<Form.Control type="text" name="username" placeholder="example@mail.com" />
					</Form.Group>
					<Form.Group controlId="formBasicEmail">
				    	<Form.Label>Email</Form.Label>
				    	<Form.Control type="email" name="email" placeholder="example@mail.com" />
				    	<Form.Text className="text-muted">
				     		We'll never share your email with anyone else.
				    	</Form.Text>
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
				    	<Form.Label>Password</Form.Label>
				    	<Form.Control type="password" name="password" placeholder="12345678" />
					</Form.Group>
				  	<Button variant="primary" type="submit">
				    	Sign Up
				  	</Button>
				</Form>
				<Link to="/login" >Already have an account?</Link>
			</div>
		);
	}
};