import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';
import './style/users.css';

class Login extends React.Component {
    constructor() {
        super();
    }

    onSubmit = (data) => {
        const {email, password} = data;

        Meteor.loginWithPassword(email, password, (err) => {
            if (!err) {
                FlowRouter.go('donuts.list');
            } else {
                alert(err.reason);
            }
        });
    };

    render() {
        return (
            <main className="cc-main">
              <div className='flex-container users-container align-center'>
                <div className='users-form-wrapper'>
                  <h1 className='title'>donut</h1>

                  <AutoForm schema={LoginSchema} onSubmit={this.onSubmit}>
                    <AutoField name="email" label={false} placeholder />
                    <ErrorField name="email" className='error' />

                    <AutoField name="password" type="password" label={false} placeholder />
                    <ErrorField name="password" className='error' />

                    <div className='btn-holder'>
                      <button className='btn btn-blue btn-full' type="submit">
                        Login
                      </button>
                    </div>
                  </AutoForm>
                </div>
              </div>
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
