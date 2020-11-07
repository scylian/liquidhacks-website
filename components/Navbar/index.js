// Basic Dependencies
import React from 'react';

//Material-UI
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { Slide, useScrollTrigger } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// Next.js
import NextLink from 'next/link';

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
  logo: {
    width: '100%',
    cursor: 'pointer'
  },
  grid: {
    padding: theme.spacing(2),
  }
}));

const ScrollHandler = props => {
  const theme = useTheme();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    target: props.window ? window() : undefined,
  });

  const primaryColor = props.opacity ? fade(theme.palette.primary.main, 0.8) : theme.palette.primary.main;
  const style = {
    backgroundColor: primaryColor,
  }

  return (
    <Slide appear={true} direction="down" in={!trigger} style={style}>
      {props.children}
    </Slide>
  );
};

const Navbar = ({ opacity }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <ScrollHandler opacity={opacity}>
        <AppBar position="fixed" title={<img src="/images/Logo.png"/>}>
          <Toolbar>
            <Grid container justify={"space-between"} alignItems={"center"} className={classes.grid}>
              <Grid item xs={2}>
                <NextLink href="/">
                  <img src="/images/Logo.png" className={classes.logo} />
                </NextLink>
              </Grid>

              <Grid item xs={5}>
                <Grid container justify={"center"}>
                  <NextLink href="/latest">
                    <Button color="inherit">LATEST</Button>
                  </NextLink>
                  <NextLink href="/players">
                    <Button color="inherit">PLAYERS</Button>
                  </NextLink>
                  <NextLink href="/partners">
                    <Button color="inherit">PARTNERS</Button>
                  </NextLink>
                  <NextLink href="/store">
                    <Button color="inherit">STORE</Button>
                  </NextLink>
                  <NextLink href="/about">
                    <Button color="inherit">ABOUT US</Button>
                  </NextLink>
                  <NextLink href="/careers">
                    <Button color="inherit">CAREERS</Button>
                  </NextLink>
                  <NextLink href="/login">
                    <Button color="inherit">LOGIN</Button>
                  </NextLink>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ScrollHandler>
    </div>
  );
}

export default Navbar;