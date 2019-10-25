import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {

    continue = e => {
        e.preventDefault();
        // PROCESS FORM DATA HERE
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" />
                    <h1>Thanks!</h1>
                    <p>You'll get an email with furhter instructions shortly.</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default Success;
