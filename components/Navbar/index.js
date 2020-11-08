// Basic Dependencies
import React, { useState } from 'react';

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
import Collapse from '@material-ui/core/Collapse';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// Next.js
import Link from 'next/link';
import { useRouter } from 'next/router';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    textAlign: 'right'
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
    letterSpacing: '2px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  },
  buttonContained: {
    color: theme.palette.primary.main
  },
  icon: {
    margin: theme.spacing(0, 1)
  },
}));

const ScrollHandler = props => {
  const theme = useTheme();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    target: props.window ? window() : undefined,
  });

  const primaryColor = props.opacity ? fade(theme.palette.primary.dark, 0.8) : theme.palette.primary.dark;
  const style = {
    backgroundColor: primaryColor,
  }

  return (
    <Slide appear={true} direction="down" in={!trigger} style={style}>
      {props.children}
    </Slide>
  );
};

const NextLink =({children, href}) => {
  const router = useRouter();
  const theme = useTheme();

  const style = {
    color: router.pathname === href ? theme.palette.info.main : theme.palette.secondary.main,
    textDecoration: 'none'
  }

  return (
    <Link href={href}>
      <a style={style}>
        {children}
      </a>
    </Link>
  )
}

const Navbar = ({ opacity, barVariant }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [collapsed, setCollapsed] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleCollapse = () => {
    setCollapsed((prev) => !prev);
  }

  return (
    <div className={classes.root} >
      <ScrollHandler opacity={opacity}>
        <AppBar position={barVariant} title={<img src="/images/Logo.png"/>}>
          <Toolbar>
            <Grid container justify={"space-between"} alignItems={"center"} className={classes.grid}>
              <Grid item sm={2} xs={6}>
                <NextLink href="/">
                  <img src="/images/Logo.png" className={classes.logo} />
                </NextLink>
              </Grid>

              <Hidden mdUp>
                <Grid item xs={3} className={classes.menuButton}>
                  <Button onClick={() => handleCollapse()}>
                    <FontAwesomeIcon icon={faBars} size="2x" />
                  </Button>
                </Grid>
              </Hidden>

              <Grid item xs={12} sm={8}>
                <Collapse in={isMobile ? collapsed : true}>
                  <Grid container justify={"flex-end"}>
                    <NextLink href="/latest">
                      <Button className={classes.button} size="large" color="inherit">
                        <Typography variant="h4">
                          LATEST
                        </Typography>
                      </Button>
                    </NextLink>
                    {/* <NextLink href="/players">
                      <Button  className={classes.button} size="large" color="inherit">
                        <Typography variant="h4">
                          PLAYERS
                        </Typography>
                        </Button>
                    </NextLink> */}
                    <NextLink href="/partners">
                      <Button  className={classes.button} size="large" color="inherit">
                        <Typography variant="h4">
                          PARTNERS
                        </Typography>
                        </Button>
                    </NextLink>
                    <a href="https://store.teamliquid.com" style={{color:'#fff',textDecoration:'none'}}>
                      <Button  className={classes.button} size="large" color="inherit">
                        <Typography variant="h4">
                          STORE
                        </Typography>
                        </Button>
                    </a>
                    <NextLink href="/about">
                      <Button  className={classes.button} size="large" color="inherit">
                        <Typography variant="h4">
                          ABOUT US
                        </Typography>
                        </Button>
                    </NextLink>
                    <NextLink href="/quiz/landing">
                      <Button  className={classes.button} size="large" color="inherit">
                        <Typography variant="h4">
                          QUIZ
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

                  </Grid>
                </Collapse>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ScrollHandler>
    </div>
  );
}

export default Navbar;