import React from 'react';

import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Cart } from './../api/cart';

import { Card, Col, Row, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MaterialIcon, {colorPalette} from 'material-icons-react';

export default class ProductCard extends React.Component {
	constructor(props){
		super(props);
		this.addItem = this.addItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
	}

	removeItem(){
		let cart = Meteor.call('removeOneFromCart', "yMEaNx8EpaWASTB7P",this.props.product._id, (error, result) =>{
			console.log(result);
		});
		alert('item removed');
	}

	addItem(){
		let cart = Meteor.call('addOneToCart', "yMEaNx8EpaWASTB7P",this.props.product._id, (error, result) =>{
			console.log(result);
		});
		alert('item added');
	}

	componentDidMount(){
		this.dataTracker = Tracker.autorun(() => {
			//Subscription
			const handles = [Meteor.subscribe('cart')];
			//Loading Data
			const loading = handles.some(handle => !handle.ready());
			//Fetch data
			if(!loading){}
		});
	}

	render () {
		const image = "/images/products/"+this.props.product.url;
		const link = "/product/"+this.props.product._id;
		return (
			<Card className="h-100">
				<Link to={link}><Card.Img variant="top" src={image} /></Link>
				<Card.Body>
					<Card.Title>{this.props.product.name}</Card.Title>
					<Card.Text>
						${this.props.product.price}
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Row>
						<Col md={{span:3, offset: 2}} xs={{span:3, offset: 2}}>
							<Button variant="link" onClick={this.removeItem}><MaterialIcon icon="remove" size={20} color='#d32f2f'/></Button>
						</Col>
						<Col md={2} xs={2}>
							{this.props.product.quantity}
						</Col>
						<Col md={2} xs={2}>
							<Button variant="link" onClick={this.addItem}><MaterialIcon icon="add" size={20} color='#66BB6A'/></Button>
						</Col>
					</Row>
				</Card.Footer>
			</Card>
		);
	}
};