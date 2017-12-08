import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import DonutsSchema from '/imports/db/donuts/schema';

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
            return <div>Loading...</div>
        }
        return (
            <main>
                <AutoForm schema={DonutsSchema} onSubmit={this.onSubmit} model={donut}>
                    <AutoField name="name"/>
                    <ErrorField name="name"/>

                    <AutoField name="price"/>
                    <ErrorField name="price"/>

                    <AutoField name="isComestible"/>
                    <ErrorField name="isComestible"/>

                    <button type="submit">
                        Edit donut
                    </button>
                </AutoForm>
            </main>
        )
    }
}