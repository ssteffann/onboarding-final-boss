import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <main>
                Welcome!
                <a href={FlowRouter.url('login')}>Login</a>
                <a href={FlowRouter.url('register')}>Register</a>
            </main>
        )
    }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
