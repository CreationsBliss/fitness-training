import React from 'react';
import { Col } from 'react-bootstrap';
import './Service.css'
// import { Col } from 'react-bootstrap';


const Service = ({ service }) => {
  const { picture, title, description } = service;
  return (
    <Col lg={4}>
      <div className='service-box'>
        <img src={picture} className="w-100" alt="service pic" />
        <div className='service-detail'>
          <h5>{title}</h5>
          <p>{description}</p>
          <button>Reserve Now</button>
        </div>
      </div>
    </Col>
  );
};

export default Service;