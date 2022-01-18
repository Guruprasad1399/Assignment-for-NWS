import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import validator from "validator";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    if (this.props.values.mobile === "" || this.props.values.address === "") {
      alert("All fields are required");
    } else {
      if (this.props.values.mobile !== "") {
        let mobile = this.props.values.mobile;
        // we can use regular expressions(regex) also to validate mobile number.
        // I have used validator package in order to simplify the code.
        // Kindly let me know if need to use regex. I can easily do that.
        if (validator.isMobilePhone(mobile)) {
          this.props.nextStep();
        } else {
          alert("Enter a valid mobile number");
        }
      }
    }
  };

  back = (e) => {
    e.preventDefault();

    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Enter Personal Details" />
            <TextField
              placeholder="Enter Your Mobile Number"
              label="Mobile Number"
              onChange={handleChange("mobile")}
              defaultValue={values.mobile}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Address"
              label="Address"
              onChange={handleChange("address")}
              defaultValue={values.address}
              margin="normal"
              fullWidth
            />
            <br />

            <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>

            <Button color="primary" variant="contained" onClick={this.continue}>
              Continue
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
