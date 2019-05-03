import React from 'react';
import { Redirect } from 'react-router';
import { Form, Button, Row, Col } from 'react-bootstrap';

export default class MachineForm extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {submitted: false, code: null};
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

	handleSubmit(e) {
		let machineCode = e.target.machineCode.value;
		e.preventDefault();
		this.setState({ 
			submitted: true, 
			code: machineCode 
		});
		console.log(this.state);
	}

	render () {
		if(this.state.submitted) {
			let url = "/machine/" + this.state.code;
			return <Redirect to={url} />
		}
		
		return (
			<Form onSubmit={this.handleSubmit} className="mt-4">
				<Form.Group controlId="formMachineCode">
					<Row>
						<Col className="text-center h5">
			    			<Form.Label>Machine Code</Form.Label>
			    		</Col>
			    	</Row>
			    	<Row>
						<Col md={{span:6, offset: 3}} xs={{span:4, offset: 4}}>
					    	<Form.Control type="text" name="machineCode" placeholder="AB001" className="mt-2"/>
					    	<Form.Text className="text-muted">
					     		Insert the machine code here.
					    	</Form.Text>
				    	</Col>
			    	</Row>
				</Form.Group>
				<Row>
					<Col md={{span:2, offset: 5}} xs={{span:4, offset: 4}}>
					  	<Button variant="primary" type="submit" className="btn-block">
					    	Submit
					  	</Button>
			  		</Col>
			    </Row>
			</Form>
		);
	}
};