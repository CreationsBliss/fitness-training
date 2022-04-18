import React, { useRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let errorElement;

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <div>
      <p className='text-danger'>Error: {error.message}</p>
    </div>
  }

  const handleSubmit = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  }

  const navigateRegister = event => {
    navigate('/register');
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast('Sent email');
    }
    else{
      toast("Please enter your email address");
    }
  }

  return (
    <div className='login-section'>
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

                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
              <br />
              {errorElement}
              <p className='register-link my-3'>New user to FITNESS TRAINING?  <Link to="/register" className='text-danger' onClick={navigateRegister}>Register Now</Link>
              </p>
              <p className='register-link my-3'>Forget password? <Button className='resetPasswordBtn text-danger btn btn-link' onClick={resetPassword}>Reset Password</Button>
              </p>
            </div>
            <div className='mt-5 w-100 text-center'>
              <SocialLogin></SocialLogin>
              <ToastContainer />
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default Login;
