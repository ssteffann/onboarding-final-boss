import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Notifications from '../notifications/Notifications.jsx';
import {Donuts} from '/imports/db';

import './style/header.css';

import { withTracker } from 'meteor/react-meteor-data';

const messages = [
  {
    type: 'error',
    message: 'Donut was deleted with success!',
  },
  {
    type: 'success',
    message: 'Donut was added with success!',
  },
];

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
      init: true,
    }
  }

  componentWillReceiveProps(props) {
    const { isLoading, donuts } = props;
    if (isLoading || this.state.init) {
      this.setState({ init: false });
      return;
    }

    // check old count with new count
    const notifications = this.props.donuts.length > donuts.length
      ? [messages[0]]
      : [messages[1]];

    this.setState({ notifications });
  }

  render() {
    const { isLoggedIn, logout } = this.props;

    return  (<div className='flex-container header-container'>
      <div className='header-wrapper'>
        <div className='flex-container justify-space-between'>
          <div className='logo'><a href='/'>donut <span className='trademark'>TM</span></a></div>

          {isLoggedIn
            ? <div onClick={logout}>
              <Notifications notifications={this.state.notifications} />
              <a className='register' href='' onClick={logout} title={'Logout'}>
                <FontAwesomeIcon icon={'sign-out-alt'} />
              </a>
            </div>
            : <div>
              <a className='login' href={FlowRouter.url('login')} title={'Login'}>
                <FontAwesomeIcon icon={'sign-in-alt'} />
              </a>
              <a className='register' href={FlowRouter.url('register')} title={'Register'}>
                <FontAwesomeIcon icon={'user-plus'} />
              </a>
            </div>
          }
        </div>
      </div>
    </div>);
  }
}

Header.displayName = 'Header';
Header.propsTypes = {
  isLoggedIn: PropTypes.bool,
  isLoading: PropTypes.bool,
  logout: PropTypes.func,
  donuts: PropTypes.object,
};

export default withTracker((props) => {
  const handle = Meteor.subscribe('donuts');

  return {
    ...props,
    donuts: Donuts.find().fetch(),
    isLoading: !handle.ready(),
    isLoggedIn: !!Meteor.userId(),
    logout() {
      Meteor.logout((err) => {
        if (!err) {
          FlowRouter.go('login');
        }
      })
    },
  }

})(Header);
