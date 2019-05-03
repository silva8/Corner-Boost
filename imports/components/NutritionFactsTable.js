import React from 'react';

import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Card, Row, Col } from 'react-bootstrap';
import Loading from './Loading';

export default class NutritionFactsTable extends React.Component {
	constructor(props) {
	    super(props);
  	}

  	componentDidMount() {

  	}

  	nutritionFacts() {
	  		const nutritionFacts = this.props.nutritionFacts;
	  		const nutriFacts = Object.keys(nutritionFacts);
	  		let count = 0;
	  		const table = nutriFacts.map((nutriFact, i)=>{
	  			if(nutriFact !== "servingSize"){
		  			let bgColor = "bg-light";
		  			if(count % 2 === 0)
		  				bgColor = "bg-white";
		  			if(typeof nutritionFacts[nutriFact] !== 'object'){
						count+=1;
		  				return (
				  			<Row className={bgColor} key={nutriFact}>
				  				<Col className="text-capitalize">{nutriFact.split(/(?=[A-Z])/).join(" ")}</Col>
				  				<Col>{nutritionFacts[nutriFact]}</Col>
				  			</Row>
			  			);
		  			}
		  			else{
		  				const subFacts = Object.keys(nutritionFacts[nutriFact]);
		  				count+=1;
		  				const total = (
			  				<Row className={bgColor} key={nutriFact}>
				  				<Col className="text-capitalize">{nutriFact.split(/(?=[A-Z])/).join(" ")}</Col>
				  				<Col>{nutritionFacts[nutriFact]["total"]}</Col>
					  		</Row>);
		  				const subTable = subFacts.map((subFact, i)=>{
		  					bgColor = "bg-light";
		  					if(count % 2 === 0)
		  						bgColor = "bg-white";
		  					if(subFact !== "total"){
		  						count+=1;
			  					return (
			  						<Row className={bgColor} key={subFact}>
				  						<Col className="font-weight-light text-capitalize">{subFact.split(/(?=[A-Z])/).join(" ")}</Col>
						  				<Col className="font-weight-light">{nutritionFacts[nutriFact][subFact]}</Col>
			  						</Row>
			  					);
		  					}
		  				});
		  				return (<div>{total}{subTable}</div>);
		  			}
		  		}
		  		else{
		  			return (
				  			<Row className="bg-dark text-white" key={nutriFact}>
				  				<Col className="text-capitalize">{nutriFact.split(/(?=[A-Z])/).join(" ")}</Col>
				  				<Col>{nutritionFacts[nutriFact]}</Col>
				  			</Row>
				  			);
		  		}
	  		});
	  		return table;
  	}	

	render () {
		let nutritionFacts = this.nutritionFacts();
		return (
			<div>
				{nutritionFacts}
			</div>
		);
	}
};