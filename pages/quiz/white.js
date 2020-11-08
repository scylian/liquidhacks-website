// React Dependencies
import React from 'react';

// Material-UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

// Next.js
import Head from 'next/head';
import useSWR from 'swr';

// Components
import Layout from '../../components/Layout';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(20, 0, 6),
  },
  heroImage: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(3)
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  twitterFeed: {
    '& span,p': {
      fontFamily: 'Raleway'
    }
  }
}));

const Twitter = () => {
  const classes = useStyles();
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR('http://liquidhacksapi-env.eba-w2x5md7b.us-east-2.elasticbeanstalk.com/white', fetcher)

  return (
    <Layout barVariant="static">
      <Head>
        <title>Liquid Team White</title>
      </Head>

      <main>
        <div className={`${classes.heroContent} ${classes.heroImage}`}>
          <Container maxWidth="xl" className={classes.fullHeight} >
            <Grid container justify="center" alignItems="center">
              <Grid item>
                <img src="/images/Logo-white.png" width="200px;"/>
              </Grid>
            </Grid>
            <Grid container justify="center" alignItems="flex-end">
              <Grid item sm={10}>
                <Typography variant="h2">
                  <b>let fate decide.</b>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>

        <div className={classes.twitterFeed}>
          <Container maxWidth="md">
            <Grid container justify="center">
              {data.statuses.map((tweet) => (
                <Grid item sm={3}>
                  <Card>
                    <CardHeader
                      avatar={
                        <Avatar alt="avatar" src={tweet.user.profile_image_url_https} />
                      }
                      title={tweet.user.screen_name}
                    />
                    {
                      tweet.hasOwnProperty('extended_entities') && tweet.extended_entities.hasOwnProperty('media') ? 
                      <CardMedia
                        className={classes.media}
                        image={"https://pbs.twimg.com/media/EmPfSp9XcAQWNvr.jpg"}
                        title="twitter image"
                      /> :
                      null
                    }
                    <CardContent>
                      <Typography variant="body2" component="p">
                        {tweet.text}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </main>
    </Layout>
  )
}

export default Twitter;