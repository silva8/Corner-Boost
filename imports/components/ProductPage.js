import React from 'react';

import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Card, Row, Col } from 'react-bootstrap';
import Loading from './Loading';
import NutritionFactsTable from './NutritionFactsTable';

import {Products} from './../api/products';

export default class ProductPage extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {product: [], loading: true, nutritionFacts: []};
  	}

  	componentDidMount() {
  		this.dataTracker = Tracker.autorun(() => {
  			//Url paramteres
	      	const { params } = this.props.match;
	      	//Subscription
			const handles = [Meteor.subscribe('products')];
			//Loading Data
			const loading = handles.some(handle => !handle.ready());
			//Fetch data
			if(!loading){
				let product = Products.findOne({ _id: params.id });
				let nutritionFacts = product.nutritionFacts;
				this.setState({
	      			product,
	      			loading: false,
	      			nutritionFacts
	    		});
			}
    	});
  	}

  	componentWillUnmount() {
  		this.dataTracker.stop();
  	}

	render () {
        if(!this.state.loading) {
			const image = "/images/products/"+this.state.product.url;
			const product = this.state.product;
			const nutritionFacts = this.state.nutritionFacts;
			return (
				<Card>
					<Row noGutters={true}>
						<Col md={4} xs={6} className="mt-2">
							<Card.Img src={image} />
						</Col>
						<Col md={{span: 4, offset: 1}} xs={{span: 4, offset: 1}}>
							<Card.Body>
								<Card.Title className="mt-3 mb-0">{product.name}</Card.Title>
								<small className="text-muted">{product.size}</small>
								<Card.Text className="mt-3">${product.price}</Card.Text>
							</Card.Body>
						</Col>
					</Row>
					<Card.Footer>
						<NutritionFactsTable nutritionFacts={nutritionFacts}/>
					</Card.Footer>
				</Card>
			);
		}
		else {
			return <Loading />
		}
	}
};