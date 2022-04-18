import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
  return (
    <div className='blog-section my-5'>
      <div className="blog-container">
        <h1 className='text-center mb-5'>Frequently Asked Question</h1>
        <Container>
          <Row>
            <Col className='mb-5'>
              <h3>Difference between authorization and authentication?</h3>
              <p>Authorization means giving permission. Such as an admin permission, moderator permission, etc.  </p>
              <p>Authentication means determinig something whether the act is true of flase. If email or password is ok then he/she can einter their social account. The process can be called authentication.  </p>
            </Col>
          </Row>
          <Row>
            <Col className='mb-5'>
              <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
              <p>I am using firebase on my project to allow user login/ signup through google, fb, github, etc. </p>
              <p>Firebase auternative authentication: Auth0, Passport, Okta, JSON Web Token, Amazon cognito, etc. </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>What other services does firebase provide other than authentication?
              </h3>
              <p>There are many services which Firebase provides, Such as:</p>
              <ul>
                <li>Authentication</li>
                <li>Hosting</li>
                <li>Google Analytics</li>
                <li>Cloud Storage</li>
                <li>Cloud Messaging</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Blog;