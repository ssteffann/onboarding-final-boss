import React from 'react';
import Header from './components/header/Header.jsx';
import './style/default-style/default-style.css';

export default class App extends React.Component {
    constructor () {
        super();
    }

    render() {
        const {main, routeProps} = this.props;
        const headerProps = {
          isLoggedIn: !!Meteor.userId(),
          key: 'header'
        };

        return [
            React.createElement(Header, headerProps),
            React.createElement(main, {routeProps: routeProps, key: 'main'})
        ]
    }
}
