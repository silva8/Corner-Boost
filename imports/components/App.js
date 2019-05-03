import React from 'react';
import ProductsGrid from './ProductsGrid';

import {Products} from './../api/products';

export default class App extends React.Component {
	render () {
		let products = Products.find().fetch();
		return (
			<div>
  				<ProductsGrid products={products}/>
  			</div>
		);
	}
};