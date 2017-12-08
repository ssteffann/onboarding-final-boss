import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';

class Login extends React.Component {
    constructor() {
        super();
    }

    onSubmit = (data) => {
        const {email, password} = data;

        Meteor.loginWithPassword(email, password, (err) => {
            if (!err) {
                FlowRouter.go('donuts');
            } else {
                alert(err.reason);
            }
        });
    };

    render() {
        return (
            <main className="cc-main">
                <AutoForm schema={LoginSchema} onSubmit={this.onSubmit}>
                    <AutoField name="email"/>
                    <ErrorField name="email"/>

                    <AutoField name="password" type="password"/>
                    <ErrorField name="password"/>

                    <button type="submit">
                        Login
                    </button>
                </AutoForm>
            </main>
        )
    }
}

const LoginSchema = new SimpleSchema({
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    password: {type: String}
});

export default Login;