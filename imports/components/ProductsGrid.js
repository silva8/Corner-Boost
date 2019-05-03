import React from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

export default class ProductsGrid extends React.Component {
	renderProducts() {
		return this.props.products.map((product) => {
			return (
			<Col 
			xs={6} 
			md={4} 
			key={product._id}
			className="mt-3">
				<ProductCard key={product._id} product={product}/>
			</Col>);
		});
	}

	render() {
		return (
			<Row>
			    {this.renderProducts()}
			</Row>
		);
	}
};