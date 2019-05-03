import React from 'react';

import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class ShoppingCart extends React.Component {

	render() {
		return (
			<Card className="mt-3">
			  	<Card.Body className="text-right">
			    	<Card.Title>Total</Card.Title>
			    	<Card.Text>
			      		${this.props.total}
			    	</Card.Text>
			  	</Card.Body>
			  	<Card.Footer className="text-muted text-center">
			  		<Link to="#" className="float-left"><Button variant="outline-warning">Continue Shopping</Button></Link>
			  		<Link to="#" className="float-right"><Button variant="outline-success">Checkout</Button></Link>
			  	</Card.Footer>
			</Card>
		);
	}
};