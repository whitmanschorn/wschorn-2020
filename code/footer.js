import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const footerStyles = {
  padding: '10px',
  borderTop: '2px solid #f55555'
};

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
  <footer style={footerStyles}>Copyright (c) Whitman Schorn {currentYear}, made in NYC.</footer>
);
}

export default Footer;