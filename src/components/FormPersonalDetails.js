import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {

        const { values, handleFieldChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal Details" />
                    <TextField 
                        hintText="Enter your occupation" 
                        floatingLabelText="Occupation"
                        onChange={handleFieldChange('occupation')}
                        defaultValue={values.occupation}
                        />
                    <br/>
                    <TextField 
                        hintText="Enter your City" 
                        floatingLabelText="City"
                        onChange={handleFieldChange('city')}
                        defaultValue={values.city}
                        />   
                    <br/>
                    <TextField 
                        hintText="Enter your bio" 
                        floatingLabelText="Bio"
                        onChange={handleFieldChange('bio')}
                        defaultValue={values.bio}
                        /> 
                    <br/>
                    <RaisedButton 
                        label="back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
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

export default FormPersonalDetails;
