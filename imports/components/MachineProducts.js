import React from 'react';

import { Meteor } from 'meteor/meteor';

import ProductsGrid from './ProductsGrid';
import Loading from './Loading';

import {Products} from './../api/products';
import {Machines} from './../api/machines';
import { Cart } from './../api/cart';

export default class MachineProducts extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {products: [], loading: true};
  	}

  	componentDidMount() {
  		this.dataTracker = Tracker.autorun(() => {
  			//Url paramteres
  			const params = this.props.match.params;
  			const code = params.code;
  			//Subscriptions
			const handles = [
				Meteor.subscribe('machines'),
				Meteor.subscribe('products'),
				Meteor.subscribe('cart')
			];
			//Loading Data
			const loading = handles.some(handle => !handle.ready());
			this.setState({ loading });
			//Fetch data
			if(!this.state.loading){
	  			let machine = Machines.findOne({ code });
	  			let productIds = machine.items.map((item)=>{
	  					return item.productId;
	  				});
	  			let products = Products.find({_id: {$in: productIds}}, {fields: {nutritionFacts: 0}}).fetch();
	  			let cart = Cart.findOne({userId: Meteor.userId()});

				products = products.map((product) => {
						let item = cart.items.find((item) => {
								return item.productId === product._id;
							}, product);
						if(item !== undefined)
							return {...product, quantity: item.quantity};
						else
							return {...product, quantity: 0};
					});
		  		this.setState({ products, loading: false });
  			}
  		});
  	}

  	componentWillUnmount() {
  		this.dataTracker.stop();
  	}

	render () {
		if(!this.state.loading) {
			return (
				<div>
	  				<ProductsGrid products={this.state.products}/>
	  			</div>
			);
		}
		else {
			return <Loading />
		}
	}
}