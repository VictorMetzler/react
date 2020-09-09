import React from "react";
import { Grid } from "@material-ui/core";
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const style = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 },
};

export default (props) => {
  return (
    <Grid container>
      <Grid item sm>
        <LeftPane styles={style} />
      </Grid>
      <Grid item sm>
        <RightPane styles={style} />
      </Grid>
    </Grid>
  );
};
