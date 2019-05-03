import React from 'react';

import { Meteor } from 'meteor/meteor';

import { Row, Col, Form, Card, Button } from 'react-bootstrap';
import MaterialIcon, {colorPalette} from 'material-icons-react';

export default class CartItem extends React.Component {
	constructor(props){
		super(props);
	}

	render () {
		const image = "/images/products/"+this.props.product.url;
		const subtotal = this.props.product.price*this.props.product.quantity;
		return (
			<Card className="mt-1">
			  	<Card.Body>
			  		<Row>
			  			<Col md={2} xs={2}>
				  			<Card.Img src={image}/>
				  		</Col>
				  		<Col md={3} xs={3} >
					    	<Card.Title>{this.props.product.name}</Card.Title>
					    	<Card.Text>${this.props.product.price}</Card.Text>
				    	</Col>
				    	<Col md={{span: 2, offset: 1}} xs={{span: 2, offset: 1}} className="text-center">
				    		<Card.Text className="text-muted">Quantity</Card.Text>
					    	<Card.Text>{this.props.product.quantity}</Card.Text>
				    	</Col>
				    	<Col md={2} xs={2} className="text-center">
					    	<Card.Text className="text-muted">Subtotal</Card.Text>
					    	<Card.Text>${subtotal}</Card.Text>
				    	</Col>
				    	<Col md={2} xs={2} className="align-self-center">
					    	<Button variant="link"><MaterialIcon icon="add" size={20} color='#388E3C'/></Button>
					    	<Button variant="link"><MaterialIcon icon="remove" size={20} color='#d32f2f'/></Button>
				    	</Col>
			    	</Row>
			  	</Card.Body>
			</Card>
		);
	}
};