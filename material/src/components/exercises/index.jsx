import React from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const style = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 },
};

export default ({ exercises }) => {
  return (
    <Grid container>
      <Grid item sm>
        <Paper style={style.Paper}>
          {exercises.map(([group, exercises]) => (
            <React.Fragment>
              <Typography variant="h5" style={{ textTransform: "capitalize" }}>
                {group}
              </Typography>
              <List component="ul">
                {exercises.map(({ title }) => (
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                ))}
              </List>
            </React.Fragment>
          ))}
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={style.Paper}>Right Pane</Paper>
      </Grid>
    </Grid>
  );
};
