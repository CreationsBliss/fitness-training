import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Header from '../Header/Header';
import Services from '../Services/Services';

const FrontPage = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <ContactUs></ContactUs>
    </div>
  );
};

export default FrontPage;