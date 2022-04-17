import React from 'react';
import './Footer.css'

const Footer = () => {

  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className='footer-section mt-5'>
      <p>Copyright &copy; {year} | All Rights Reserved.</p>
    </div>
  );
};

export default Footer;