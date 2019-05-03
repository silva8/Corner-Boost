import React from 'react';

import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import CartFooter from './CartFooter';
import Loading from './Loading';

import { Cart } from './../api/cart';
import { Products } from './../api/products';

export default class ShoppingCart extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {cartId: null, products: [], loading: true, subtotals: [], total: 0};
  	}

	componentDidMount() {
		this.dataTracker = Tracker.autorun(() => {
			//Subscription
			const handles = [Meteor.subscribe('products'), Meteor.subscribe('cart')];
			//Loading Data
			const loading = handles.some(handle => !handle.ready());
			//Fetch data
			if(!loading){
				let cart = Cart.findOne({userId: Meteor.userId()});
				let productIds = cart.items.map((item)=>{
	  				return item.productId;
	  				});
	  			let quantitys = cart.items.map((item)=>{
	  				return item.quantity;
	  				});
				let products = Products.find({_id: {$in: productIds }}, {fields: {nutritionFacts: 0}}).fetch().map((product, i) => {
					product.quantity = quantitys[i];
					return product;
					});
	    		let total = products.map((product) => {
								return product.quantity*product.price;
							}).reduce((x,y) => { return x+y; });
	    		this.setState({
					cartId: cart._id,
	      			products,
	      			loading: false,
	      			total
	    		});
    		}
		});
  	}

  	componentWillUnmount() {
  		this.dataTracker.stop();
  	}

  	renderProducts() {
		return this.state.products.map((product) => {
				return <CartItem key={product._id} product={product} />;
			});
	}

	render() {
		if(!this.state.loading) {
			return (
				<Container>
					{this.renderProducts()}
					<CartFooter total={this.state.total} />
				</Container>
			);
		}
		else {
			return <Loading />;
		}
	}
};