import React from 'react';
import Header from './components/header/Header.jsx';

export default class App extends React.Component {
    constructor () {
        super();
    }

    render() {
        const {main, routeProps} = this.props;

        return [
            React.createElement(Header, {routeProps: routeProps, key: 'header'}),
            React.createElement(main, {routeProps: routeProps, key: 'main'})
        ]
    }
}
