import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {

        const { values, handleFieldChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details" />
                    <TextField 
                        hintText="Enter your first name" 
                        floatingLabelText="First Name"
                        onChange={handleFieldChange('firstName')}
                        defaultValue={values.firstName}
                        />
                    <br/>
                    <TextField 
                        hintText="Enter your last name" 
                        floatingLabelText="Last Name"
                        onChange={handleFieldChange('lastName')}
                        defaultValue={values.lastName}
                        />   
                    <br/>
                    <TextField 
                        hintText="Enter your email address" 
                        floatingLabelText="Email"
                        onChange={handleFieldChange('email')}
                        defaultValue={values.email}
                        /> 
                    <br/>
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails
