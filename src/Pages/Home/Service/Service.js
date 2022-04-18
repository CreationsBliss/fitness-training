import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'
// import { Col } from 'react-bootstrap';


const Service = ({ service }) => {
  const { id, picture, price, title, description } = service;
  const navigate = useNavigate();
  const navigateToCheckoutPage = (id) =>{
    navigate(`/checkout/${id}`)
  }
  return (
    <Col lg={4}>
      <div className='service-box'>
        <img src={picture} className="w-100" alt="service pic" />
        <div className='service-detail'>
          <h5>{title}</h5>
          <p className='lead'>{price}</p>
          <p>{description}</p>
          <button className='btn btn-primary' onClick={ () => navigateToCheckoutPage(id)}>Reserve Now</button>
        </div>
      </div>
    </Col>
  );
};

export default Service;