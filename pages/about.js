// Basic Dependencies
import React from 'react';

// Components
import Layout from '../components/Layout';

// Material-UI
import { Container, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

// Next.js
import Head from 'next/head';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    color: theme.palette.primary.dark,
    letterSpacing: '1px',
    paddingBottom: theme.spacing(3),
  },
  heroImage: {
    height: '50vh',
    backgroundImage: 'url(/images/about-us.png)',
    backgroundSize: 'cover',
  },
  heroImageBottom: {
    height: '50vh',
    backgroundImage: 'url(/images/about-us2.png)',
    backgroundSize: 'cover',
  },
  heroDescription: {
    padding: theme.spacing(8, 0),
    backgroundColor: theme.palette.primary.main,
  },
  divider: {
    height: theme.spacing(6),
    backgroundColor: theme.palette.info.main
  },
  dividerSm: {
    height: '2px',
    backgroundColor: theme.palette.info.main,
    margin: theme.spacing(4, 4, 0, 0),
  },
  dividerBlue: {
    height: theme.spacing(6),
    backgroundColor: theme.palette.primary.main
  },
  fullHeight: {
    height: '100%'
  },
  aboutBackground: {
    backgroundImage: 'url(/images/about-us-background.png)',
    backgroundSize: 'cover',
    backgroundColor: '#fff',
    backgroundPosition: 'center',
  },
  aboutContainer: {
    padding: theme.spacing(2),
    borderLeft: `${theme.spacing(5)}px solid ${theme.palette.info.main}`,
    borderRight: `${theme.spacing(5)}px solid ${theme.palette.info.main}`,
    color: theme.palette.primary.main,
  },
  aboutItem: {
    marginBottom: theme.spacing(4),
    '& h4': {
      fontWeight: '500',
      '& b': {
        fontWeight: '700',
      }
    },
    '& h5': {
      '& b': {
        fontWeight: '600',
      }
    }
  },
  dot: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    borderRadius: theme.spacing(2),
    backgroundColor: theme.palette.info.main,
    margin: theme.spacing(2),
  },
  contactUs: {
    // padding: theme.spacing(4, 0),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main
  }
}));


const About = () => {
  const classes = useStyles();
  
  return (
    <Layout barVariant='static'>
      <Head>
        <title>About Us</title>
      </Head>

      <main>
        <div className={`${classes.heroContent} ${classes.heroImage}`}>
          <Container maxWidth="xl" className={classes.fullHeight}>
            <Grid container justify="center" alignItems="flex-end" className={classes.fullHeight}>
              <Grid item sm={10}>
                <Typography variant="h2">
                  <b>about us.</b>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>

        <Divider className={classes.divider}/>

        <div className={classes.heroDescription}>
          <Container maxWidth="md">
            <Typography variant="h3" component="h3" align="center">
              <b>Team Liquid</b> is a world renowned professional gaming organization established in 2000. Since our grassroots beginnings, we have grown into a multifaceted global company with unparalleled reach in the industry.
            </Typography>
          </Container>
        </div>

        <div className={classes.aboutBackground}>
          <Container maxWidth="lg" className={classes.aboutContainer}>
            <Grid container direction="column" alignItems="center">
              <Grid className={classes.aboutItem} item xs={12} sm={8}>
                <img src="/images/divider1.png" width="100%"/>
              </Grid>

              <Grid className={classes.aboutItem} item xs={12} sm={8}>
                <Typography variant="h4" align="center">
                  With over <b>60</b> championship caliber athletes in <b>14</b> of the world's top games, Team Liquid is synonymous with <b>success</b>.
                </Typography>
              </Grid>

              <Grid className={classes.aboutItem} item xs={12} sm={8}>
                <Typography variant="h5" align="center">
                  Our collective teams have won the most prize money in the history of esports while amassing trophies across different titles and different countries. Our <b>European Dota 2</b> team has built a reputation as one of the greatest teams of all time, winning The <b>International 2017</b> and <b>Supermajor 2018</b> along the way, Our <b>League of Legends</b> franchise was the best North American team in 2018, claiming <b>NALCS Spring and Summer</b> titles in back-to-back splits. <b>CS:GO, Rainbow 6: Siege, Melee, Street Fighter, Fortnite, PUBG;</b> we count among the best in all of them.
                </Typography>
              </Grid>

              <Grid className={classes.aboutItem} item xs={12} sm={10}>
                <img src="/images/divider2.png" width="100%"/>
              </Grid>

              <Grid className={classes.aboutItem} item xs={12} sm={8}>
                <Typography variant="h4" align="center">
                  More than just an <b>esports team,</b> Team Liquid is also a <b>media enterprise.</b>
                </Typography>
              </Grid>

              <Grid className={classes.aboutItem} item xs={12} sm={8}>
                <Typography variant="h5" align="center">
                  Starting with our community sites, we have expanded into other areas within the gaming ecosystem. <b>1UP Studios</b>, our video content production arm, is a full service production company renowned for its high-quality documentary style filmmaking and creative commercial content. Our wiki network, <b>Liquipedia</b>, is the most widely used resource in all of esports. We also manage some of the gaming space's most popular names through our influencer management agency, <b>Liquid Media</b>.
                </Typography>
              </Grid>

              <Grid className={classes.aboutItem} item xs={12} sm={10}>
                <img src="/images/divider2.png" width="100%"/>
              </Grid>

              <Grid className={classes.aboutItem} item xs={12} sm={8}>
                <Typography variant="h4" align="center">
                  With plans for further investments into <b>world class</b> esports <b>athletes, facilities,</b> and <b>infrastructure,</b> Team Liquid stands at the <b>forefront</b> of a <b>thriving new industry.</b>
                </Typography>
              </Grid>

              <Grid className={classes.aboutItem} item xs={12} sm={8}>
                <Typography variant="h5" align="center">
                  Today, Team Liquid continues to lead in both <b>competition</b> and <b>innovation</b> from our headquarters, the <b>Alienware Training Facility,</b> a state-of-the-art esports facility in Los Angeles.
                </Typography>
              </Grid>

              <Grid className={classes.aboutItem} item xs={12} sm={10}>
                <Grid container justify="space-evenly">
                  <div className={classes.dot} />
                  <div className={classes.dot} />
                  <div className={classes.dot} />
                </Grid>
              </Grid>

              <Grid className={classes.aboutItem} item xs={12} sm={5}>
                <img src="/images/axiomatic.png" width="100%"/>
              </Grid>

              <Grid className={classes.aboutItem} item xs={12} sm={8}>
                <Typography variant="h5" align="center">
                  aXiomatic began operations in November 2016 with a mission to <b>build a portfolio of dynamic company holdings</b> in the <b>esports and video gaming industry</b> through <b>strategic partnerships, investments</b> and <b>acquisitions.</b> The company leadership includes Co-Executive Chairmen Peter Guber, Ted Leonsis, Jeff Vinik and Bruce Karsh who together represent an <b>unparalleled team of sports, technology, entertainment and investment industry titans.</b> Bruce Stein, an accomplished executive from technology, content and consumer product companies, leads aXiomatic as CEO. Collectively, the group has expansive <b>access to valuable esports resources</b> including <b>venues, technologies, media content, distribution partners</b> and <b>investment capital.</b> In September 2016, aXiomatic acquired controlling interest in one of the world's premier esports brands, Team Liquid. In addition, aXiomatic has made several strategic investments into esports-related businesses and will continue to access all their resources to build <b>new, richer player</b> and <b>fan esports experiences.</b>
                </Typography>
              </Grid>

              <Grid item xs={12} sm={8}>
                <img src="/images/divider3.png" width="100%"/>
              </Grid>
            </Grid>
          </Container>
        </div>

        <Divider className={classes.dividerBlue}/>

        <div className={`${classes.heroContent} ${classes.heroImageBottom}`}></div>

        <div className={classes.contactUs}>
          <Grid container justify="space-between">
            <Grid item sm={6}>
              <Divider className={classes.dividerSm} />
              <Divider className={classes.dividerSm} />
            </Grid>
            <Grid item sm={6}>
              <Typography variant="h1">
                <b>CONTACT US</b>
              </Typography>
            </Grid>
          </Grid>
        </div>
      </main>
    </Layout>
  );
}

export default About;