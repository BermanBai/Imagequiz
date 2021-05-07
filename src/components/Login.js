import React from "react";
import "./Login.css";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, Button } from "react-bootstrap";

function Login() {
    return (
        <Container className="Signin-container">
		
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
						
                            <Form.Label>Email address</Form.Label>
							
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                            />
                            <Form.Text className="text-muted">
                                Your email address will be kept confidential.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
						
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
								
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
						
                            <Form.Check type="checkbox" label="Check out" />
							
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;