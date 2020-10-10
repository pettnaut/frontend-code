import React from 'react';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import './layout.css'

/**
 * Layout component to add the header and the footer into all pages
 * @param {*} props
 */
function Layout(props) {

  return (
    <div className='layout'>
      <Header />
      <main className="main-content">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
