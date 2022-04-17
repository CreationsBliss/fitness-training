import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate('/login');
  }

  if(user){
    navigate('/home');
  }

  const handleRegister = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(name, email, password);

    createUserWithEmailAndPassword(email, password);


  }

  return (
    <div>
      <Container>
        <h1 className='text-center my-5'>Register to Your Account</h1>
        <Row>
          <Col>
            <div className="form-container w-50 mx-auto">
              <Form onSubmit={handleRegister} className="register-form">
                <div>
                  <input type="text" name="name" id="name" placeholder='Your Name' required />
                </div>

                <div>
                  <input type="email" name="email" id="email" placeholder='Your Email' required />
                </div>

                <div>
                  <input type="password" name="password" id="password" placeholder='Your Password' required />
                </div>
                <input type="submit" value="Register" />
              </Form>
              <p className='login-link my-3'>Already user to FITNESS TRAINING?  <Link to="/login" className='text-danger' onClick={navigateLogin} >Login Now</Link>
              </p>
            </div>
            <div className='mt-5 w-100 text-center'>
              <SocialLogin></SocialLogin>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;