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
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Hidden from '@material-ui/core/Hidden';

// Next.js
import NextLink from 'next/link';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

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
  },
  button: {
    marginLeft: theme.spacing(3),
    letterSpacing: '2px'
  },
  buttonContained: {
    color: theme.palette.primary.main
  },
  icon: {
    margin: theme.spacing(0, 1)
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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

              <Grid item xs={8}>
                <Grid container justify={"flex-end"}>

                <Hidden smDown>
                  <NextLink href="/latest">
                    <Button  className={classes.button} size="large" color="inherit">
                      <Typography variant="h4">
                        LATEST
                      </Typography>
                    </Button>
                  </NextLink>
                  <NextLink href="/players">
                    <Button  className={classes.button} size="large" color="inherit">
                      <Typography variant="h4">
                        PLAYERS <FontAwesomeIcon icon={faAngleDown} size="sm" className={classes.icon} />
                      </Typography>
                      </Button>
                  </NextLink>
                  <NextLink href="/partners">
                    <Button  className={classes.button} size="large" color="inherit">
                      <Typography variant="h4">
                        PARTNERS <FontAwesomeIcon icon={faAngleDown} size="sm" className={classes.icon} />
                      </Typography>
                      </Button>
                  </NextLink>
                  <NextLink href="/store">
                    <Button  className={classes.button} size="large" color="inherit">
                      <Typography variant="h4">
                        STORE
                      </Typography>
                      </Button>
                  </NextLink>
                  <NextLink href="/about">
                    <Button  className={classes.button} size="large" color="inherit">
                      <Typography variant="h4">
                        ABOUT US
                      </Typography>
                      </Button>
                  </NextLink>
                  <NextLink href="/careers">
                    <Button  className={classes.button} size="large" color="inherit">
                      <Typography variant="h4">
                        CAREERS
                      </Typography>
                      </Button>
                  </NextLink>
                  <NextLink href="/login">
                    <Button  className={`${classes.button} ${classes.buttonContained}`} size="large" variant="contained" color="inherit">
                      <Typography variant="h4">
                        LOGIN
                      </Typography>
                      </Button>
                  </NextLink>

                  </Hidden>
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