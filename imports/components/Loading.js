import React from 'react';

import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';

import { Spinner, Container, Col, Row } from 'react-bootstrap';

export default class Loading extends React.Component {
	constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
    	<Container>
    		<Row className="mt-5">
	    		<Col md={{span: 2, offset: 5}} xs={{span: 2, offset: 5}}>
			    	<Spinner animation="border" />
				</Col>
		   	</Row>
    	</Container>
    );
  }
};