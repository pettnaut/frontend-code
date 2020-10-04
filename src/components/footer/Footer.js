import React from 'react';
import './footer.css'

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">    
            <div className="col-12 align-self-center">
                    <div className="text-center footer-btn">
                        <a className="btn btn-social-icon" href="http://instagram.com/"><i className="fa fa-instagram"></i></a>
                        {"   "}
                        <a className="btn btn-social-icon" href="http://github.com/"><i className="fa fa-github"></i></a>
                    </div>
                </div>         
                <div className="col-4 ">
                    <div className="footer-links">
                        <a href="/inicia"> Inicia </a>
                        <a href="/acerca"> Acerca de</a>
                        <a href="/colaborar"> Colaborar </a>
                        <a href="/contact"> Sponsors </a>
                    </div>
                </div>

              
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>Pettnout © 2020</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;