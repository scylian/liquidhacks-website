// React Dependencies
import React from 'react';

// Material-UI
import { Container,
         Typography,
         Grid,
         Card,
         CardContent, 
         CardMedia} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';

// Next.js
import Head from 'next/head'

// Components
import Layout from '../components/Layout';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.primary.dark,
    letterSpacing: '1px',
    paddingBottom: theme.spacing(3),
  },
  heroImage: {
    height: '50vh',
    backgroundColor: theme.palette.primary.main,
  },
  fullHeight: {
    height: '100%',
  },
  games: {
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(5),
  },
  gameSelect: {

  },
  
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundColor: '#fff',
  },
  card: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    maxWidth: '375px',
    backgroundColor: '#fff',
    color: '#333',
  },
  media: {
    height: '240px',
  },
  cardContent: {
    padding: theme.spacing(2),
    color: '#333',
  },
  cardCategory: {
    marginTop: '-45px',
    fontSize: '18px',
    paddingBottom: '18px',
    color: '#fff',
  },
  textCenter: {
    textAlign: 'center',
  },
  circle: {
    fill: 'none',
    stroke: '#EEE',
    strokeWidth: '5px',
  },
}));

const Latest = () => {
  const classes = useStyles();

  return (
    <Layout barVariant='static'>
      <Head>
        <title>Latest News</title>
      </Head>

      <main>
        <div className={`${classes.heroContent} ${classes.heroImage}`}>
          <Container maxWidth="xl" className={classes.fullHeight}>
            <Grid container justify="center" alignItems="flex-end" className={classes.fullHeight}>
              <Grid item sm={10}>
                <Typography variant="h2">
                  <b>latest news.</b>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>

        <div className={`${classes.games}`}>
          <Container maxWidth="xl" className={classes.fullHeight}>
            <Grid container justify="center" alignItems="center" direction="row" className={classes.fullHeight}>
              <Grid item sm={1}>
                <Button className={classes.gameSelect}>
                  <Typography>
                    ALL
                  </Typography>
                </Button>
              </Grid>
              <Grid item sm={1}>
                <img src="/images/CSGO.png" />
              </Grid>
              <Grid item sm={1}>
                <img src="/images/Fortnite.png" />
              </Grid>
              <Grid item sm={1}>
                <img src="/images/Game-Logo.png" />
              </Grid>
              <Grid item sm={1}>
                <img src="/images/HearthStone.png" />
              </Grid>
              <Grid item sm={1}>
                <img src="/images/LoL.png" />
              </Grid>
              <Grid item sm={1}>
                <img src="/images/Overwatch.png" />
              </Grid>
              <Grid item sm={1}>
                <img src="/images/Rainbow6.png" />
              </Grid>
              <Grid item sm={1}>
                <img src="/images/SSBM.png" />
              </Grid>
              <Grid item sm={1}>
                <img src="/images/Valorant.png" />
              </Grid>
            </Grid>
          </Container>
        </div>

        <div className={`${classes.cardGrid}`}>
          <Container maxWidth="xl" className={classes.fullHeight}>
            <Grid container justify="flex-start" direction="row" spacing={4} className={classes.fullHeight}>
              <Grid item lg={3}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="/images/card-img.png"
                      title="Tactial: Rise of a Carry"
                    />
                    <CardContent className={classes.cardContet}> 
                      <Typography className={classes.cardCategory}>
                        League of Legends
                      </Typography>
                      <Typography variant="h3" component="h3" className={classes.cardTitle}>
                        Tactical: Rise of a Carry
                      </Typography>
                      <Typography variant="body" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium fermentum purus, vel mollis felis interdum a.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="large" color="primary">
                      Read
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item lg={3}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="/images/card-img.png"
                      title="Tactial: Rise of a Carry"
                    />
                    <CardContent className={classes.cardContet}> 
                      <Typography className={classes.cardCategory}>
                        League of Legends
                      </Typography>
                      <Typography variant="h3" component="h3" className={classes.cardTitle}>
                        Tactical: Rise of a Carry
                      </Typography>
                      <Typography variant="body" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium fermentum purus, vel mollis felis interdum a.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="large" color="primary">
                      Read
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item lg={3}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="/images/card-img.png"
                      title="Tactial: Rise of a Carry"
                    />
                    <CardContent className={classes.cardContet}> 
                      <Typography className={classes.cardCategory}>
                        League of Legends
                      </Typography>
                      <Typography variant="h3" component="h3" className={classes.cardTitle}>
                        Tactical: Rise of a Carry
                      </Typography>
                      <Typography variant="body" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium fermentum purus, vel mollis felis interdum a.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="large" color="primary">
                      Read
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item lg={3}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="/images/card-img.png"
                      title="Tactial: Rise of a Carry"
                    />
                    <CardContent className={classes.cardContet}> 
                      <Typography className={classes.cardCategory}>
                        League of Legends
                      </Typography>
                      <Typography variant="h3" component="h3" className={classes.cardTitle}>
                        Tactical: Rise of a Carry
                      </Typography>
                      <Typography variant="body" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium fermentum purus, vel mollis felis interdum a.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="large" color="primary">
                      Read
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item lg={3}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="/images/card-img.png"
                      title="Tactial: Rise of a Carry"
                    />
                    <CardContent className={classes.cardContet}> 
                      <Typography className={classes.cardCategory}>
                        League of Legends
                      </Typography>
                      <Typography variant="h3" component="h3" className={classes.cardTitle}>
                        Tactical: Rise of a Carry
                      </Typography>
                      <Typography variant="body" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium fermentum purus, vel mollis felis interdum a.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="large" color="primary">
                      Read
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item lg={3}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="/images/card-img.png"
                      title="Tactial: Rise of a Carry"
                    />
                    <CardContent className={classes.cardContet}> 
                      <Typography className={classes.cardCategory}>
                        League of Legends
                      </Typography>
                      <Typography variant="h3" component="h3" className={classes.cardTitle}>
                        Tactical: Rise of a Carry
                      </Typography>
                      <Typography variant="body" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium fermentum purus, vel mollis felis interdum a.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="large" color="primary">
                      Read
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </div>

      </main>

    </Layout>
  );
}

export default Latest;