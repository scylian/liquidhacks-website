// React Dependencies
import React from 'react';

// Material-UI
import { Container,
         Typography,
         Grid,
         Card,
         CardContent } from '@material-ui/core';
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
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
  textCenter: {
    textAlign: 'center',
  },
  svg: {
    height: '200px',
    display: 'block',
    margin: 'auto'
  },
  circle: {
    fill: 'none',
    stroke: '#EEE',
    strokeWidth: '5px',
  },
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

        {/* Cards */}
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container direction="row" justify="center" alignItems="center" spacing={4}>
            <Grid item xs={12} sm={4}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <svg className={classes.svg} viewBox="0 0 140 140" preserveAspectRatio="xMinYMin meet">
                    <g>
                      <circle r="50" cx="50%" cy="50%" className={classes.circle} />
                    </g>
                  </svg>
                  <Typography variant="h5" component="h2" className={classes.textCenter}>
                    Faction 1
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin metus non magna viverra, vitae semper ligula condimentum. Suspendisse vel bibendum quam. Donec semper tincidunt ante ac vulputate.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <svg className={classes.svg} viewBox="0 0 140 140" preserveAspectRatio="xMinYMin meet">
                    <g>
                      <rect width="65%" height="65%" x="25" y="25" className={classes.circle} />
                    </g>
                  </svg>
                  <Typography variant="h5" component="h2" className={classes.textCenter}>
                    Faction 2
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin metus non magna viverra, vitae semper ligula condimentum. Suspendisse vel bibendum quam. Donec semper tincidunt ante ac vulputate.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <svg className={classes.svg} viewBox="0 0 140 140" preserveAspectRatio="xMinYMin meet">
                    <g>
                      <polygon points="70 25, 120 110, 20 110" className={classes.circle} />
                    </g>
                  </svg>
                  <Typography variant="h5" component="h2" className={classes.textCenter}>
                    Faction 3
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin metus non magna viverra, vitae semper ligula condimentum. Suspendisse vel bibendum quam. Donec semper tincidunt ante ac vulputate.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <svg className={classes.svg} viewBox="0 0 140 140" preserveAspectRatio="xMinYMin meet">
                    <g>
                      <circle r="50" cx="50%" cy="50%" className={classes.circle} />
                    </g>
                  </svg>
                  <Typography variant="h5" component="h2" className={classes.textCenter}>
                    Faction 1
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin metus non magna viverra, vitae semper ligula condimentum. Suspendisse vel bibendum quam. Donec semper tincidunt ante ac vulputate.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <svg className={classes.svg} viewBox="0 0 140 140" preserveAspectRatio="xMinYMin meet">
                    <g>
                      <rect width="65%" height="65%" x="25" y="25" className={classes.circle} />
                    </g>
                  </svg>
                  <Typography variant="h5" component="h2" className={classes.textCenter}>
                    Faction 2
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin metus non magna viverra, vitae semper ligula condimentum. Suspendisse vel bibendum quam. Donec semper tincidunt ante ac vulputate.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <svg className={classes.svg} viewBox="0 0 140 140" preserveAspectRatio="xMinYMin meet">
                    <g>
                      <polygon points="70 25, 120 110, 20 110" className={classes.circle} />
                    </g>
                  </svg>
                  <Typography variant="h5" component="h2" className={classes.textCenter}>
                    Faction 3
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin metus non magna viverra, vitae semper ligula condimentum. Suspendisse vel bibendum quam. Donec semper tincidunt ante ac vulputate.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
        {/* End Cards */}
      </main>
    </Layout>
  );
}

export default Home;