import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
  return (
    <div className='about-me-container'>
      <Container>
        <h1 className='text-center my-5'>About Me</h1>
        <Row>
          <Col>
          <h6>Name: Mushfiqur Rahman</h6>
          <p>My goal is to become a Web developer. To achieve this goal I admitted into this course. I am a job holder. It is very tough to manage 8-10 hours every day. But untill now I have been managed the time because one dream is in front of me. And this is to become a Web developer. </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;