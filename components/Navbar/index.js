import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            TEAM LIQUID
          </Typography>
          <Button color="inherit">LATEST</Button>
          <Button color="inherit">PLAYERS</Button>
          <Button color="inherit">PARTNERS</Button>
          <Button color="inherit">STORE</Button>
          <Button color="inherit">ABOUT US</Button>
          <Button color="inherit">CAREERS</Button>
          <Button color="inherit">LOGIN</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
