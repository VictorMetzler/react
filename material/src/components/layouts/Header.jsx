import React from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default class extends React.Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>

        <Typography variant="h6">
            News
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
