import React from 'react';
import DonutForm from '../../components/donut-form/DonutForm.jsx';

import './style/donut-action.css';

export default class DonutsCreate extends React.Component {
    constructor() {
        super();
    }

    onSubmit = (data) => {
        Meteor.call('donut.create', data, (err) => {
            if(!err) {
                FlowRouter.go('donuts.list');
            }
        });
    };

    render() {
        return (
            <main className='donut-action-container flex-container align-center'>
              <div className='donut-action-wrapper'>
                <DonutForm
                  title={'Add a donut'}
                  subtitle={'doesn\'t take to long'}
                  onSubmit={this.onSubmit}
                  submitLabel={'Create donut'}
                />
              </div>
            </main>
        )
    }
}
