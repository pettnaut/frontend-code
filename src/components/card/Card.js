import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import './card.css';

const Card = ({ imgURL, name, description }) => (
  <div className="card">
    <img className="card-img-top" src={imgURL} alt={name} />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{description}</p>
    </div>
  </div>
);

Card.propTypes = {
  imgURL: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
