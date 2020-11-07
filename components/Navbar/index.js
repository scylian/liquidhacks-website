// Basic Dependencies
import React from 'react';

//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

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

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" title={<img src="/images/Logo.png"/>}>
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
    </div>
  );
}
