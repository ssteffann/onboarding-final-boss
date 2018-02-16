import React from 'react';
import PropTypes from 'prop-types';
import './style/banner.css';

const Banner = ({ imgUrl, alt, title, text, clickAction }) => {
  const bgStyle = {
    background: `url(${imgUrl}) no-repeat center center`,
    backgroundSize: 'cover',
  };

  return (<div className='banner-container' style={bgStyle}>
      <div className='banner-info'>
        <div>
          <h1 className='title'>{title}</h1>
          <p>{text}</p>
        </div>
        <button onClick={clickAction}>Arrow</button>
      </div>
  </div>);
};


Banner.propTypes = {
  imgUrl: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  clickAction: PropTypes.func,
};

export default Banner;
