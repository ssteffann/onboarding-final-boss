import React from 'react';
import PropTypes from 'prop-types';
import './style/header.css';

const Header = ({ isLoggedIn }) =>
  (<div className='flex-container header-container'>
    <div className='header-wrapper'>
      <div className='flex-container justify-space-between'>
        <div className='logo'><a href='/'>donut <span className='trademark'>TM</span></a></div>

        {isLoggedIn
          ? <div>Hello!</div>
          : <div>
            <a href={FlowRouter.url('login')}>Login</a> /
            <a href={FlowRouter.url('register')}>Register</a>
          </div>
        }
      </div>
    </div>
  </div>);

Header.propsTypes = {
  isLoggedIn: PropTypes.bool,
};

export default Header;
