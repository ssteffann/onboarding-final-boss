import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './style/notifications.css';

class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    }
  }

  componentWillReceiveProps(props) {
    const { notifications } = props;

    this.setState({ notifications }, () => {
      setTimeout(() => this.setState({ notifications: [] }), 2000);
    });
  }

  render() {
    return (<div className='notifications-container'>
      <a  href='' title={'Notifications'}>
        <FontAwesomeIcon icon={'bell'} />
      </a>

      <div className='notifications-holder'>
        {this.state.notifications.map((notification, index) => {
          return <div key={index} className={notification.type}>{notification.message}</div>
        })}
      </div>
    </div>);
  }
}

Notifications.displayName = 'Notifications';
Notifications.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['error', 'success', 'warning']),
    message: PropTypes.string,
  }))
};

export default Notifications;
