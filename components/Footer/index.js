// Basic Dependencies
import React from 'react';
  
// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(6),
  },
  title: {
    margin: theme.spacing(6, 0, 0),
  },
  circleIcon: {
    boxShadow: '0 0 1px rgba(0, 0, 0, 0.05)',
    margin: theme.spacing(3, 1, 9),
    transform: 'scale(1)',
    border: 'none',
    borderRadius: '56px',
    transition: theme.transitions.create(['color', 'transform', 'border'], {duration: theme.transitions.duration.standard}),
    '&:hover': {
      color: '#AD9742',
      transform: 'scale(1.2)',
      border: '3px solid #AD9742',
    },
    backgroundColor: '#fff',
    width: "56px!important",
    height: "56px",
    color: theme.palette.primary.dark,
    display: 'inline-block',
    padding: theme.spacing(1.3),
  },
  divider: {
    height: '2px',
    backgroundColor: theme.palette.info.main
  },
  partner: {
    padding: theme.spacing(3),
  },
  logo: {
    padding: theme.spacing(5)
  },
  copyright: {
    letterSpacing: '2px',
    color: theme.palette.secondary.dark
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Typography variant="h5" align="center">CONNECT WITH US</Typography>
        <Grid container justify="center" alignItems="center" className={classes.grid}>
          <FontAwesomeIcon icon={['fab', 'twitter']} size="4x" className={classes.circleIcon} />
          <FontAwesomeIcon icon={['fab', 'facebook-f']} size="4x" className={classes.circleIcon} />
          <FontAwesomeIcon icon={['fab', 'instagram']} size="4x" className={classes.circleIcon} />
          <FontAwesomeIcon icon={['fab', 'twitch']} size="4x" className={classes.circleIcon} />
          <FontAwesomeIcon icon={['fab', 'youtube']} size="4x" className={classes.circleIcon} />
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="4x" className={classes.circleIcon} />
          <FontAwesomeIcon icon="envelope" size="4x" className={classes.circleIcon} />
          <FontAwesomeIcon icon={['fab', 'reddit-alien']} size="4x" className={classes.circleIcon} />
          <FontAwesomeIcon icon={['fab', 'vk']} size="4x" className={classes.circleIcon} />
        </Grid>
      </Container>
      <Container maxWidth="md">
        <Divider variant="middle" className={classes.divider}/>
      </Container>
      <Container maxWidth="sm">
        <Typography variant="h5" align="center" className={classes.title}>OUR PARTNERS</Typography>
        <Grid container justify="space-evenly" alignItems="center">
          <Grid item sm={7} className={classes.partner}>
            <img src="/images/alienware.png" width="100%" />
          </Grid>
          <Grid item sm={12}>
            <Grid container justify="space-evenly" alignItems="center">
              <Grid item sm={3} className={classes.partner}>
                <img src="/images/honda.png" width="100%" />
              </Grid>
              <Grid item sm={3} className={classes.partner}>
                <img src="/images/huya.png" width="100%" />
              </Grid>
              <Grid item sm={3} className={classes.partner}>
                <img src="/images/hyperx.png" width="100%" />
              </Grid>
              <Grid item sm={3} className={classes.partner}>
                <img src="/images/jerseymikes.png" width="100%" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12}>
            <Grid container justify="space-evenly" alignItems="center">
              <Grid item sm={3} className={classes.partner}>
                <img src="/images/monster.png" width="100%" />
              </Grid>
              <Grid item sm={3} className={classes.partner}>
                <img src="/images/sap.png" width="100%" />
              </Grid>
              <Grid item sm={3} className={classes.partner}>
                <img src="/images/secretlab.png" width="100%" />
              </Grid>
              <Grid item sm={3} className={classes.partner}>
                <img src="/images/twitch.png" width="100%" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="md">
        <Divider variant="middle" className={classes.divider}/>
      </Container>
      <Container maxWidth="xs">
        <Grid container justify="center" alignItems="center">
          <Grid item sm={8}>
            <img src="/images/Logo-white.png" width="100%" className={classes.logo}/>
          </Grid>
          <Grid item sm={12}>
            <Typography variant="subtitle1" align="center" className={classes.copyright}>
              © 2020 Team Liquid. All Rights Reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer;