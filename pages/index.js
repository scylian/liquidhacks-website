// React Dependencies
import React from 'react';

// Material-UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Next.js
import Head from 'next/head'

// Components
import Layout from '../components/Layout';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(20, 0, 6),
  },
  heroImage: {
    height: '100vh',
    backgroundImage: 'url(/images/hero-image.jpg)',
    backgroundSize: 'cover',
  },
  infoCard: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    padding: theme.spacing(3)
  },
  infoContainer: {
    border: `${theme.palette.info.main} 5px solid`,
    '& h2,h3,h5': {
      fontFamily: 'Raleway',
      '& b': {
        fontWeight: 800
      }
    }
  },
  infoDetail: {
    marginTop: theme.spacing(5)
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Layout navOpacity={true}>
      <Head>
        <title>Home Page</title>
      </Head>

      <main>
        {/* Hero Unit */}
        <div className={`${classes.heroContent} ${classes.heroImage}`}>
          <Container maxWidth="lg">
            <Grid container justify="flex-end" alignItems="flex-start">
              <Grid item>
                <img src="/images/lets-go-liquid.png" />
              </Grid>
            </Grid>
          </Container>
        </div>
        {/* End Hero Unit */}
        
        <div className={classes.infoCard}>
          <Grid container className={classes.infoContainer} justify="space-between" alignItems="center">
            <Grid item sm="2">
              <img src="/images/pillar.png" />
            </Grid>
            <Grid item sm={8}>
              <Typography variant="h3" align="center">
                <b>Team Liquid</b> is a world renowned professional gaming organization established in 2000. Since our grassroots beginnings, we have grown into a multifaceted global company with unparalleled reach in the industry.
              </Typography>
              <Container maxWidth="md" className={classes.infoDetail}>
                <Grid container justify="space-between">
                  <Grid item={4}>
                    <Typography align="center" variant="h2"><b>60</b></Typography>
                    <Typography align="center" variant="h5">championship caliber athletes</Typography>
                  </Grid>
                  <Grid item={4}>
                    <Typography align="center" variant="h3"><b>in</b></Typography>
                  </Grid>
                  <Grid item={4}>
                    <Typography align="center" variant="h2"><b>14</b></Typography>
                    <Typography align="center" variant="h5">world's top games</Typography>
                  </Grid>
                </Grid>
              </Container>
            </Grid>
            <Grid item sm="2">
              <img src="/images/pillar.png" style={{float:'right'}}/>
            </Grid>
          </Grid>
        </div>

      </main>
    </Layout>
  );
}

export default Home;