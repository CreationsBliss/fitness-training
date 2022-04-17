import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
// import CheckOut from '../../CheckOut/CheckOut';
import Service from '../Service/Service';

const Services = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div>
      <Container>
        <h1 className='text-center my-5'>Services</h1>
        <Row>
            {
              services.map(service => <Service key={service.id} service={service}></Service>)
            }
        </Row>
      </Container>
    </div>
  );
};

export default Services;