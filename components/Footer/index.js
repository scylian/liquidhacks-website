// Basic Dependencies
import React from 'react';
  
// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(6),
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h5" align="center">CONNECT WITH US</Typography>
        <FontAwesomeIcon icon="twitter" />
      </Container>
    </footer>
  )
}

export default Footer;