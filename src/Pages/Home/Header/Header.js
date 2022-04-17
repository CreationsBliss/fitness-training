import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/fitness-training-logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {

  const [user] = useAuthState(auth);

  const handleSignOut = () =>{
    signOut(auth);
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              height="55"
              className="d-inline-block align-top"
              alt="Fitness Training logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            </Nav>
            <Nav>
              {
                user ? <Button  variant="link" style={{color: "rgba(255,255,255,.55)"}} className='text-decoration-none ' onClick={handleSignOut} > Sign Out </Button> : <Nav.Link as={Link} to='/login'>Login</Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;