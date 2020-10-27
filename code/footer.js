import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const footerStyles = {
  padding: '10px',
  borderTop: '2px solid #88B04B'
};

const copyrightStyle = {
  color: '#AAAAAA',
  padding: '10px 0px'
}

const footerLinkStyles = {
  textDecoration: 'none',
  paddingRight: '10px',
  color: '#88B04B'
}

const FooterLink = ({ href, children }) => {
  return <a style={footerLinkStyles} href={`${href}/index.html`}>{children}</a>
}

const Footer = ({ id, relativeURL }) => {
  const currentYear = new Date().getFullYear()

  return (
  <footer style={footerStyles}>
  <div>
    <FooterLink href={relativeURL('/', id)}>Home</FooterLink>
    <FooterLink href={relativeURL('/about', id)}>About</FooterLink>
  </div>
  <div style={copyrightStyle}>Copyright (c) Whitman Schorn {currentYear}, made in NYC.</div>

  </footer>
);
}

export default Footer;