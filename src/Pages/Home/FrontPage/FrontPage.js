import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Services from '../Services/Services';

const FrontPage = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <ContactUs></ContactUs>
    </div>
  );
};

export default FrontPage;