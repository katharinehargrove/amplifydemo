import React from 'react';
import img from './amplifysagemaker.png';
import './App.css';

import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

//import semantic-ui-react for "Container-fluid" -KH
import { Container, Header } from 'semantic-ui-react';

//import bootstrap and components -KH
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

//import amplify -KH
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);



function App() {
  return (
    <div className="App">
 
      <Container fluid id="container">
        <br/>
      <Header as="h1" id="App-header">          
        <br/>
        <h1>
          Amplify to SageMaker Demo
        </h1>
        <br/>
      </Header>
<main>
<img src={img} className="App-logo" alt="logo" />


<Form id="form">
  <h2>Send to SageMaker Endpoint</h2>
  <br/>

  <Form.Group controlId="input1">

    <Form.Control type="text" placeholder="Input 1"/>
  </Form.Group>

  <Form.Group controlId="input2">

    <Form.Control type="text" placeholder="Input 2"/>
  </Form.Group>

  <Form.Group controlId="input3">

    <Form.Control type="text" placeholder="Input 3"/>
  </Form.Group>

  <Form.Group controlId="input4">

    <Form.Control type="text" placeholder="Input 4"/>
  </Form.Group>

  
<input type="submit" value="Submit" />
</Form>
<br/>
</main>
</Container>
<Card.Footer>
  <br/>
      <a
          className="App-link"
          href="https://aws.com"
          target="_blank"
          rel="noopener noreferrer"
        >Build on AWS
        </a>
        <br/>
        <br/>
</Card.Footer>

    </div>//end of app div
  );
}

//export app PLUS add Greeting with Cognito sign-in -KH
export default withAuthenticator(App, {
  includeGreetings: true,
  signUpConfig: {
  hiddenDefaults: ['phone_number']
  }
});

