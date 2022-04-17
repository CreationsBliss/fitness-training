import React, { useRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {

  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  if(user){
    navigate(from, { replace: true });
  }

  const handleSubmit = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  }

  const navigateRegister = event =>{
    navigate('/register');
  }

  return (
    <div>
      <Container>
        <h1 className='text-center my-5'>Login to Your Account </h1>
        <Row>
          <Col>
            <div className="form-container w-50 mx-auto">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
              <p className='register-link my-3'>New user to FITNESS TRAINING?  <Link to="/register" className='text-danger' onClick={navigateRegister}>Register Now</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default Login;
