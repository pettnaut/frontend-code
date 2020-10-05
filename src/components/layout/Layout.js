import React from 'react';
import Header from '../header/Header'
import Footer from '../footer/Footer'

/**
 * Layout component to add the header and the footer into all pages
 * @param {*} props 
 */
function Layout(props) {
  
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
