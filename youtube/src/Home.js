import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AppsIcon from "@material-ui/icons/Apps";
import VideoCallIcon from "@material-ui/icons/VideoCall";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  appBar: {
    boxShadow: "none",
  },
  logo: {
    height: '25px',
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
    "&:hover": {
        backgroundColor: 'transparent',
      }
},
  icons: {
    paddingRight: theme.spacing(5),
    "&:hover": {
      backgroundColor: 'transparent',
    }
  },
  grow: {
    flexGrow: 1,
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton className={classes.menuIcon} color="action">
            <MenuIcon />
          </IconButton>
          <img src="/images/preto.png" alt="logo" className={classes.logo} />
          <div className={classes.grow} />
          <IconButton className={classes.icons} color="action">
            <VideoCallIcon />
          </IconButton>
          <IconButton className={classes.icons} color="action">
            <AppsIcon />
          </IconButton>
          <IconButton className={classes.icons} color="action">
            <MoreVertIcon />
          </IconButton>
          <Button
            startIcon={<AccountCircleIcon />}
            variant="outlined"
            color="secondary"
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Home;
