import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import DonutsSchema from '/imports/db/donuts/schema';

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
            <main>
                <AutoForm schema={DonutsSchema} onSubmit={this.onSubmit}>
                    <AutoField name="name"/>
                    <ErrorField name="name"/>

                    <AutoField name="price"/>
                    <ErrorField name="price"/>

                    <AutoField name="isComestible"/>
                    <ErrorField name="isComestible"/>

                    <button type="submit">
                        Create donut
                    </button>
                </AutoForm>
            </main>
        )
    }
}