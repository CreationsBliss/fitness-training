import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const ContactUs = () => {

  const handleContactForm = (event) =>{
    event.preventDefault();
  }

  return (
    <Container>
      <h1 className='text-center my-5'>Contact</h1>
      <Row>
        <Col>
          <Form onSubmit={handleContactForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                as="textarea"
                placeholder="Message"
                style={{ height: '100px' }}
              />
            </Form.Group>
            <Button variant="primary" type="Send">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;