import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  makeStyles,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AppsIcon from "@material-ui/icons/Apps";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: "239px",
    flexShrink: 0,
  },
  drawerPaper: {
    width: "239px",
    borderRight: "none",
  },
  logo: {
    height: "25px",
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icons: {
    paddingRight: theme.spacing(5),
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  grow: {
    flexGrow: 1,
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  subheader: {
    textTransform: 'uppercase'
  }
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
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={"Início"}
              />
            </ListItem>

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <WhatshotIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={"Em alta"}
              />
            </ListItem>

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <SubscriptionsIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={"Inscrições"}
              />
            </ListItem>
          </List>

          <Divider />

          <List>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <VideoLibraryIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={"Biblioteca"}
              />
            </ListItem>

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={"Histórico"}
              />
            </ListItem>
          </List>

          <Divider />

          <List>
            <Box p={5}>
              <Typography variant="body2">
                Faça login para curtir vídeos, comentar e se inscrever.
              </Typography>
              <Box mt={2}>
                <Button
                  startIcon={<AccountCircleIcon />}
                  variant="outlined"
                  color="secondary"
                >
                  Fazer Login
                </Button>
              </Box>
            </Box>
          </List>

          <Divider />

          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                className={classes.subheader}
              >
                O Melhor do YouTube
              </ListSubheader>
            }
            className={classes.root}
          >
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary="Música"
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary="Esportes"
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary="Jogos"
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary="Filmes"
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary="Notícias"
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary="Destaques"
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary="Videos 360"
              />
            </ListItem>

            <Divider />

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={"Procurar mais"}
              />
            </ListItem>

            <Divider />
          </List>
        </div>
      </Drawer>
    
    </div>
  );
}

export default Home;
