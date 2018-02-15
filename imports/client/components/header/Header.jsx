import React from 'react';
import './style/header.css';

const Header = ({ isLoggedIn }) => {
  return (<div className='flex-container header-container'>
    <div className='header-wrapper'>
      <div className='flex-container justify-space-between'>
        <div className='logo'>donut <span className='trademark'>TM</span></div>
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
};

export default Header;
