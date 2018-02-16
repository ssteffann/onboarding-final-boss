import React from 'react';
import PropTypes from 'prop-types';
import './style/info-card.css';

const InfoCard = ({ title, text }) => (<div className='info-card-container flex-item'>
  <h2>{title}</h2>
  <p>{text}</p>
</div>);

InfoCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default InfoCard;
