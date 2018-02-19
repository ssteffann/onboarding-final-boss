import React from 'react';
import DonutForm from '../../components/donut-form/DonutForm.jsx';

import './style/donut-action.css';

export default class DonutsEdit extends React.Component {
    constructor() {
        super();
        this.donutId = FlowRouter.current().params._id;
        this.state = {
            donut: null,
            loading: true
        }
    }

    componentDidMount() {
        Meteor.call('donut.find', this.donutId, (err, donut) => {
            this.setState({
                donut,
                loading: false
            })
        })
    }

    onSubmit = (data) => {
        Meteor.call('donut.edit', this.donutId, data, (err) => {
            if (!err) {
                FlowRouter.go('donuts.list');
            }
        });
    };

    render() {
        const {loading, donut} = this.state;

        if (loading) {
            return <div className='donut-action-wrapper'>Loading...</div>;
        }

        return (
            <main className='donut-action-container flex-container align-center'>
              <div className='donut-action-wrapper'>
                <DonutForm
                  title={'Edit a donut'}
                  subtitle={'doesn\'t take to long'}
                  onSubmit={this.onSubmit}
                  model={donut}
                  submitLabel={'Save donut'}
                />
              </div>
            </main>
        )
    }
}
