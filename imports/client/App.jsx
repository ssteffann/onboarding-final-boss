import React from 'react';
import Header from './components/header/Header.jsx';
import './style/default-style/default-style.css';

export default class App extends React.Component {
    constructor () {
        super();
    }

    checkRoute(routeProps) {
      if (routeProps.secured && !Meteor.userId()) {
        return FlowRouter.go('login');
      }
    }

    componentDidMount() {
      this.checkRoute(this.props.routeProps);
    }

    componentWillReceiveProps(props) {
      this.checkRoute(props.routeProps);
    }

    render() {
        const {main, routeProps} = this.props;
        const mainProps = {
          routeProps: routeProps,
          key: 'main'
        };

        return [
            React.createElement(Header, { key: 'header' }),
            React.createElement(main, mainProps)
        ]
    }
}
