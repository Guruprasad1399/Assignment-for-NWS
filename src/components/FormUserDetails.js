import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import validator from "validator";

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();

    if (
      this.props.values.firstName === "" ||
      this.props.values.lastName === "" ||
      this.props.values.email === ""
    ) {
      alert("All fields are required");
    } else {
      if (this.props.values.email !== "") {
        let email = this.props.values.email;
        // we can use regular expressions(regex) also to validate email.
        // I have used validator package in order to simplify the code.
        // Kindly let me know if need to use regex. I can easily do that.
        if (validator.isEmail(email)) {
          this.props.nextStep();
        } else {
          alert("Enter a valid email address");
        }
      }
    }
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Enter User Details" />
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange("email")}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
            <Button color="primary" variant="contained" onClick={this.continue}>
              Continue
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
