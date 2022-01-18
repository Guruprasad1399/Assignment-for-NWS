import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Axios from "axios";

export class Success extends Component {
  state = {
    items: [],
    DataisLoaded: false,
  };
  continue = (e) => {
    e.preventDefault();
    //get registeredUser data
    Axios.get("http://localhost:3001/api/get").then((response) => {
      this.setState({
        items: response.data,
        DataisLoaded: true,
      });
    });
  };

  render() {
    const { DataisLoaded, items } = this.state;

    return (
      <MuiThemeProvider>
        <>
          {DataisLoaded ? (
            <Dialog open fullWidth maxWidth="sm">
              {items.map((item) => (
                <ol key={item.id}>
                  <br />
                  FirstName: {item.firstName},<br /> lastName: {item.lastName},
                  <br /> Email:
                  {item.email},<br /> mobile: {item.mobile}, <br />
                  address: {item.address}
                  <br />
                </ol>
              ))}
            </Dialog>
          ) : (
            <Dialog open fullWidth maxWidth="sm">
              <AppBar title="Success" />
              <h1>Thank You For Your Submission</h1>
              <Button
                color="primary"
                variant="contained"
                onClick={this.continue}
              >
                Show Data
              </Button>
            </Dialog>
          )}
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
