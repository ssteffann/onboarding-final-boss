import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';
import './style/users.css';

class Register extends React.Component {
    constructor() {
        super();
    }

    onSubmit = (data) => {
        const {email, password} = data;

        Accounts.createUser({
            email,
            password,
        }, (err) => {
            if (!err) {
                FlowRouter.go('donuts.list');
            }
            else {
                alert(err.reason);
            }
        })
    };

    render() {
        return (
          <main className='flex-container users-container align-center'>
            <div className='users-form-wrapper'>
              <h1 className='title'>Register</h1>

              <AutoForm schema={RegisterSchema} onSubmit={this.onSubmit}>
                <AutoField name="email" label={false} placeholder />
                <ErrorField name="email" className='error' />

                <AutoField name="password" type="password" label={false} placeholder />
                <ErrorField name="password" className='error' />

                <AutoField name="confirm_password" type="password" label={false} placeholder />
                <ErrorField name="confirm_password" className='error' />

                <div className='btn-holder'>
                  <button className='btn btn-blue btn-full' type="submit">
                    Register
                  </button>
                </div>
              </AutoForm>
            </div>
          </main>
        )
    }
}

const RegisterSchema = new SimpleSchema({
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    password: {type: String},
    confirm_password: {
        type: String,
        custom() {
            if (this.value !== this.field('password').value) {
                return 'passwordMismatch';
            }
        }
    }
});

export default Register;
