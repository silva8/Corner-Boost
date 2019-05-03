import React from 'react';

import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';

import { Collapse, Card, Button, ListGroup, Container, Col, Row } from 'react-bootstrap';

export default class AdminMenu extends React.Component {
	constructor(props, context) {
    super(props, context);

    this.state = {
      open: [false, false]
    };
  }

  render() {
    const { open }  = this.state;
    return (
    	<Container>
    		<Row>
	    		<Col md={{span: 6, offset: 3}}>
			    	<Card className="mt-5">
				      	<Card.Header onClick={() => this.setState({ open: [!open[0], false] })}>
					    	<Card.Text>Machines</Card.Text>
				        </Card.Header>
				        <Collapse in={this.state.open[0]}>
				          <Card.Body>
				          	<ListGroup variant="flush">
								<Link to="#"><ListGroup.Item>Add new machine</ListGroup.Item></Link>
							    <Link to="#"><ListGroup.Item>Edit machine data</ListGroup.Item></Link>
							    <Link to="#"><ListGroup.Item>Add stock</ListGroup.Item></Link>
							</ListGroup>
				          </Card.Body>
				        </Collapse>
			      	</Card>
				</Col>
		   	</Row>
		   	<Row>
	    		<Col md={{span: 6, offset: 3}}>
				   	<Card>
				    	<Card.Header onClick={() => this.setState({ open: [false, !open[1]] })}>
					    	<Card.Text>Products</Card.Text>
				        </Card.Header>
				        <Collapse in={this.state.open[1]}>
				          <Card.Body>
				          	<ListGroup variant="flush">
								<Link to="#"><ListGroup.Item>Add new product</ListGroup.Item></Link>
							    <Link to="#"><ListGroup.Item>Edit product data</ListGroup.Item></Link>
							</ListGroup>
				          </Card.Body>
				        </Collapse>
			    	</Card>
		    	</Col>
		   	</Row>
    	</Container>
    );
  }
};