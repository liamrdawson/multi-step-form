import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step +1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step -1
        });
    }

    handleFieldChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio  }
        switch(step) {
            case 1: return (
                <FormUserDetails 
                    nextStep={this.nextStep}
                    handleFieldChange={this.handleFieldChange}
                    values={values}
                />
            )
            case 2: return (
                <FormPersonalDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleFieldChange={this.handleFieldChange}
                    values={values}
                />
            )
            case 3: return (
                <h1>Confirm</h1>
            )
            case 4: return (
                <h1>Success</h1>
            )
            default: return (null)
        }
    }
}

export default UserForm