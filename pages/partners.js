// Basic Dependencies
import React from 'react';

// Components
import Layout from '../components/Layout';
import AnimatedBar from '../components/pages/partners/AnimatedBar';

// Material-UI
import { Container, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

// Next.js
import Head from 'next/head';

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.secondary.main
  },
  heroContent: {
    color: theme.palette.secondary.main,
    letterSpacing: '1px',
  },
  partner: {
    padding: theme.spacing(3),
    textAlign: 'center',
    '& img': {
      width: '70%'
    }
  },
  partnerGrid: {
    paddingBottom: theme.spacing(3)
  },
  leftBox: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '0 15px 15px 0',
    padding: theme.spacing(3, 8),
    letterSpacing: '2px',
    '& h3': {
      letterSpacing: '4px'
    },
    '& p': {
      fontFamily: 'Raleway',
    }
  },
  rightBox: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '15px 0 0 15px',
    padding: theme.spacing(3, 8),
    letterSpacing: '2px',
    '& h3': {
      letterSpacing: '4px'
    },
    '& p': {
      fontFamily: 'Raleway',
    },
    '& img': {
      justifySelf: 'flex-end'
    }
  },
  alignRight: {
    textAlign: 'right',
  },
  honda: {
    paddingRight: theme.spacing(8),
    '& img': {
      width: '40%',
    }
  },
  huya: {
    paddingLeft: theme.spacing(8),
    '& img': {
      width: '40%'
    }
  },
  hyperx: {
    paddingRight: theme.spacing(8),
    '& img': {
      width: '70%'
    }
  },
  jerseyMikes: {
    paddingLeft: theme.spacing(8),
    '& img': {
      width: '50%'
    }
  },
  monster: {
    paddingRight: theme.spacing(8),
    '& img': {
      width: '60%'
    }
  },
  sap: {
    paddingLeft: theme.spacing(8),
    '& img': {
      width: '40%'
    }
  },
  secretlab: {
    paddingRight: theme.spacing(8),
    '& img': {
      width: '60%'
    }
  },
  twitch: {
    paddingLeft: theme.spacing(8),
    '& img': {
      width: '60%'
    }
  },
  spacer: {
    height: theme.spacing(9),
  },
  divider: {
    height: theme.spacing(6),
    backgroundColor: theme.palette.info.main,
    marginTop: theme.spacing(20)
  },
  circleIcon: {
    margin: theme.spacing(2, 1),
    borderRadius: '40px',
    backgroundColor: '#fff',
    width: "40px!important",
    height: "40px",
    color: theme.palette.primary.main,
    display: 'inline-block',
    padding: theme.spacing(0.8),
  },
  textGold: {
    color: theme.palette.info.main
  }
}));

const Partners = () => {
  const classes = useStyles();
  
  return (
    <Layout barVariant="static">
      <Head>
        <title>Partners</title>
      </Head>

      <main className={classes.main}>
        <div className={`${classes.heroContent}`}>
          <Container maxWidth="lg">
            <Grid container justify="space-around" alignItems="flex-start">
              <Grid item sm={3}>
                <Grid container direction="column" jusify="center" alignItems="center">
                  <Typography variant="h2">
                    <b>our partners.</b>
                  </Typography>
                  <AnimatedBar keyFrames={[0, 0.1, 0.2]} values={[0, 500, 800]} width={3} />
                </Grid>
              </Grid>
              <Grid item sm={9}>
                <Grid container justify="space-evenly" alignItems="center" className={classes.partnerGrid}>
                  <Grid item sm={7} className={classes.partner}>
                    <img src="/images/alienware.png" />
                  </Grid>
                  <Grid item sm={12}>
                    <Grid container justify="space-evenly" alignItems="center">
                      <Grid item sm={3} className={classes.partner}>
                        <img src="/images/honda.png" />
                      </Grid>
                      <Grid item sm={3} className={classes.partner}>
                        <img src="/images/huya.png" />
                      </Grid>
                      <Grid item sm={3} className={classes.partner}>
                        <img src="/images/hyperx.png" />
                      </Grid>
                      <Grid item sm={3} className={classes.partner}>
                        <img src="/images/jerseymikes.png" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item sm={12}>
                    <Grid container justify="space-evenly" alignItems="center">
                      <Grid item sm={3} className={classes.partner}>
                        <img src="/images/monster.png" />
                      </Grid>
                      <Grid item sm={3} className={classes.partner}>
                        <img src="/images/sap.png" />
                      </Grid>
                      <Grid item sm={3} className={classes.partner}>
                        <img src="/images/secretlab.png" />
                      </Grid>
                      <Grid item sm={3} className={classes.partner}>
                        <img src="/images/twitch.png" />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>

        {/* Alienware */}
        <div>
          <Grid container justify="flex-start">
            <Grid item sm={11} className={classes.leftBox}>
              <Grid container justify="space-between" alignItems="center">
                <Grid item sm={4}>
                  <img src="/images/alienware.png" />
                </Grid>
                <Grid item sm={2}>
                  <Container maxWidth="sm">
                    <Grid container justify="flex-start" alignItems="center">
                      <FontAwesomeIcon icon={faGlobe} size="3x" className={classes.circleIcon} />
                      <Typography variant="h4"> / alienware.com</Typography>
                    </Grid>

                    <Grid container justify="flex-start" alignItems="center">
                      <FontAwesomeIcon icon={['fab', 'facebook-f']} size="3x" className={classes.circleIcon} />
                      <Typography variant="h4"> / Alienware</Typography>
                    </Grid>

                    <Grid container justify="flex-start" alignItems="center">
                      <FontAwesomeIcon icon={['fab', 'twitter']} size="3x" className={classes.circleIcon} />
                      <Typography variant="h4"> / Alienware</Typography>
                    </Grid>
                  </Container>
                </Grid>
                <Grid item sm={5}>
                  <Typography variant="h3">Alienware</Typography>
                  <Grid container justify="flex-start" alignItems="center">
                    <Grid sm={1}>
                      <AnimatedBar keyFrames={[0.1, 0.14, 0.17]} values={[0, 200, 230]} width={2} />
                    </Grid>
                    <Grid sm={11}>
                      <Typography variant="body1" component="p">
                        Build a custom gaming PC with Alienware. Alienware manufactures the world's best high-performance PC gaming laptop and desktop computers. Their new laptops have slick designs with customizable lighting and powerful processors, outstanding graphics performance, comfortable keyboard, and great audio quality.
                      </Typography>
                      <Typography variant="body1" component="p">
                        <br/>
                        <b>Take 10% off any new Alienware system with code<br/><span className={classes.textGold}>TEAMLIQUID10</span></b>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        {/* End Alienware */}
        <div className={classes.spacer}>
          <Grid container justify="center">
            <AnimatedBar keyFrames={[0.15, 0.4, 0.8]} values={[0, 900, 3100]} width={3} />
          </Grid>
        </div>
        {/* Honda */}
        <div>
          <Grid container justify="flex-end">
            <Grid item sm={11} className={classes.rightBox}>
              <Grid container direction="row-reverse" justify="space-between" alignItems="center">
                <Grid item sm={4} className={`${classes.honda} ${classes.alignRight}`}>
                  <img src="/images/honda.png" />
                </Grid>
                <Grid item sm={2}>
                  <Container maxWidth="sm">
                    <Grid container justify="flex-start" alignItems="center">
                      <FontAwesomeIcon icon={faGlobe} size="3x" className={classes.circleIcon} />
                      <Typography variant="h4"> / honda.com</Typography>
                    </Grid>

                    <Grid container justify="flex-start" alignItems="center">
                      <FontAwesomeIcon icon={['fab', 'facebook-f']} size="3x" className={classes.circleIcon} />
                      <Typography variant="h4"> / Honda</Typography>
                    </Grid>

                    <Grid container justify="flex-start" alignItems="center">
                      <FontAwesomeIcon icon={['fab', 'twitter']} size="3x" className={classes.circleIcon} />
                      <Typography variant="h4"> / Honda</Typography>
                    </Grid>
                  </Container>
                </Grid>
                <Grid item sm={5}>
                  <Typography align="right" variant="h3">Honda</Typography>
                  <Grid container direction="row-reverse" justify="flex-start" alignItems="center">
                    <Grid sm={1}>
                      <AnimatedBar keyFrames={[0.2, 0.24, 0.27]} values={[0, 220, 330]} width={2} style={{float:'right'}} />
                    </Grid>
                    <Grid sm={11}>
                      <Typography align="right" variant="body1" component="p">
                        Honda Offers a full line of reliable, fuel-efficient and fun-to-drive vehicles with advanced safety technologies sold through over 1,000 independent U.S. Honda Dealers. The Honda includes the Fit, Civic, Insight, Accord, and Clarity series passenger cars, along with the HR-V, CR-V, Passport and Pilot sport utility vehicles, the Ridgeline pickup and the Odyssey lineup minivan.
                      </Typography>
                      <Typography align="right" variant="body1" component="p">
                        <br/>
                        Honda has been producing automobiles in America for more than 35 years and currently operates 19 major manufacturing facilities in North America. In 2018, more than 90 percent of all Honda brand vehicles sold in the U.S. were made in North America, with nearly two-thirds made in America, using domestic and globally sourced parts.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        {/* End Honda */}
        <div className={classes.spacer}>
        </div>
        {/* Huya */}
        <div>
          <Grid container justify="flex-start">
            <Grid item sm={11} className={classes.leftBox}>
              <Grid container justify="space-between" alignItems="center">
                <Grid item sm={4} className={classes.huya}>
                  <img src="/images/huya.png" />
                </Grid>
                <Grid item sm={2}>
                  <Container maxWidth="sm">
                    <Grid container justify="flex-start" alignItems="center">
                      <FontAwesomeIcon icon={faGlobe} size="3x" className={classes.circleIcon} />
                      <Typography variant="h4"> / huya.com</Typography>
                    </Grid>
                  </Container>
                </Grid>
                <Grid item sm={5}>
                  <Typography variant="h3">Huya</Typography>
                  <Grid container justify="flex-start" alignItems="center">
                    <Grid item sm={1}>
                      <AnimatedBar keyFrames={[0.3, 0.34, 0.37]} values={[0, 220, 330]} width={2} />
                    </Grid>
                    <Grid item sm={11}>
                      <Typography variant="body1" component="p">
                        HUYA Inc. (NYSE: HUYA) is the No.1 game live streaming platform in China. We have the largest and most active game live streaming community in terms of average MAUs, and average daily time spent on mobile app per mobile active user in the fourth quarter of 2017 and 2018, and the largest number of active broadcasters in 2017 and 2018, according to a report by Frost & Sullivan, which was commissioned by us. As the pioneer and market leader, we are well positioned to expand further in the rapidly growing game live streaming market in China. We cooperate with e-sports event organizers, as well as major game developers and publishers, and have developed e-sports live streaming as one of the most popular content genres on our platform. Building our success in game live streaming, we have also extended our content to other entertainment genres, such as talent shows, anime and outdoor activities.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        {/* End Huya */}
        <div className={classes.spacer}>
        </div>
        {/* HyperX */}
        <div>
          <Grid container justify="flex-end">
            <Grid item sm={11} className={classes.rightBox}>
              <Grid container direction="row-reverse" justify="space-between" alignItems="center">
                <Grid item sm={4} className={`${classes.hyperx} ${classes.alignRight}`}>
                  <img src="/images/hyperx.png" />
                </Grid>
                <Grid item sm={2}>
                  <Container maxWidth="sm">
                    <Grid container justify="flex-start" alignItems="center">
                      <FontAwesomeIcon icon={faGlobe} size="3x" className={classes.circleIcon} />
                      <Typography variant="h4"> / hyperx.com</Typography>
                    </Grid>

                    <Grid container justify="flex-start" alignItems="center">
                      <FontAwesomeIcon icon={['fab', 'facebook-f']} size="3x" className={classes.circleIcon} />
                      <Typography variant="h4"> / HyperX</Typography>
                    </Grid>

                    <Grid container justify="flex-start" alignItems="center">
                      <FontAwesomeIcon icon={['fab', 'twitter']} size="3x" className={classes.circleIcon} />
                      <Typography variant="h4"> / HyperX</Typography>
                    </Grid>
                  </Container>
                </Grid>
                <Grid item sm={5}>
                  <Typography align="right" variant="h3">HyperX</Typography>
                  <Grid container direction="row-reverse" justify="flex-start" alignItems="center">
                    <Grid item sm={1}>
                      <AnimatedBar keyFrames={[0.45, 0.46, 0.47]} values={[0, 55, 110]} width={2} style={{float:'right'}} />
                    </Grid>
                    <Grid item sm={11}>
                      <Typography align="right" variant="body1" component="p">
                        HyperX is the high-performance product division of Kingston Technology, the world's largest independent memory manufacturer. With products such as the Cloud headset, Team Liquid is equipped with the choice product of the best gamers, tech enthusiasts and specialists worldwide.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        {/* End HyperX */}
        <div className={classes.spacer}>
        </div>
        {/* Jersey Mike's */}
        <div>
          <Grid container justify="flex-start">
            <Grid item sm={11} className={classes.leftBox}>
              <Grid container justify="space-between" alignItems="center">
                <Grid item sm={4} className={classes.jerseyMikes}>
                  <img src="/images/jerseymikes.png" />
                </Grid>
                <Grid item sm={3}>
                  <Container maxWidth="sm">
                    <Grid container justify="flex-start" alignItems="center">
                      <FontAwesomeIcon icon={faGlobe} size="3x" className={classes.circleIcon} />
                      <Typography variant="h4"> / jerseymikes.com</Typography>
                    </Grid>

                    <Grid container justify="flex-start" alignItems="center">
                      <FontAwesomeIcon icon={['fab', 'facebook-f']} size="3x" className={classes.circleIcon} />
                      <Typography variant="h4"> / jerseymikes</Typography>
                    </Grid>

                    <Grid container justify="flex-start" alignItems="center">
                      <FontAwesomeIcon icon={['fab', 'twitter']} size="3x" className={classes.circleIcon} />
                      <Typography variant="h4"> / jerseymikes</Typography>
                    </Grid>
                  </Container>
                </Grid>
                <Grid item sm={5}>
                  <Typography variant="h3">Jersey Mike's Subs</Typography>
                  <Grid container justify="flex-start" alignItems="center">
                    <Grid item sm={1}>
                      <AnimatedBar keyFrames={[0.51, 0.52, 0.53]} values={[0, 70, 150]} width={2} />
                    </Grid>
                    <Grid item sm={11}>
                      <Typography variant="body1" component="p">
                        Jersey Mike's, a fast-casual sub sandwich franchise with more than 2,000 locations open and in development nationwide, believes that making a sub sandwich and making a difference can be one and the same. Jersey Mike's offers A Sub Above®, serving authentic fresh sliced subs on freshly baked bread - the same recipoe it started with in 1956 - and is passionate about giving back to its local communities.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        {/* End Jersey Mikes */ }
        <div className={classes.spacer}>
        </div>
        {/* Monster Energy */}
        <div>
          <Grid container justify="flex-end">
            <Grid item sm={11} className={classes.rightBox}>
              <Grid container direction="row-reverse" justify="space-between" alignItems="center">
                <Grid item sm={4} className={`${classes.monster} ${classes.alignRight}`}>
                  <img src="/images/monster.png" />
                </Grid>
                <Grid item sm={2}>
                  <Container maxWidth="sm">
                    <Grid container justify="flex-start" alignItems="center">
                      <FontAwesomeIcon icon={faGlobe} size="3x" className={classes.circleIcon} />
                      <Typography variant="h5"> / monsterenergy.com</Typography>
                    </Grid>

                    <Grid container justify="flex-start" alignItems="center">
                      <FontAwesomeIcon icon={['fab', 'facebook-f']} size="3x" className={classes.circleIcon} />
                      <Typography variant="h5"> / monstergaming</Typography>
                    </Grid>

                    <Grid container justify="flex-start" alignItems="center">
                      <FontAwesomeIcon icon={['fab', 'twitter']} size="3x" className={classes.circleIcon} />
                      <Typography variant="h5"> / monstergaming</Typography>
                    </Grid>
                  </Container>
                </Grid>
                <Grid item sm={5}>
                  <Typography align="right" variant="h3">Monster Energy</Typography>
                  <Grid container direction="row-reverse" justify="flex-start" alignItems="center">
                    <Grid item sm={1}>
                      <AnimatedBar keyFrames={[0.59, 0.61, 0.62]} values={[0, 200, 300]} width={2} style={{float:'right'}} />
                    </Grid>
                    <Grid item sm={11}>
                      <Typography align="right" variant="body1" component="p">
                        Based in Corona, California, Monster Energy is the leading marketer and distributor of energy drinks and alternative beverages. Refusing to acknowledge the traditional, Monster Energy supports the scene and sport. Whether motocross, off-road, NASCAR, MMA, BMX, surf, snowboard, sky, skateboard, or the rock and roll lifestyle, Monster Energy is a brand that believes in authenticity and the core of what its sports, athletes and muscians represent. More than a drink, it's the way of life lived by athletes, sports, bands, believers and fans.
                      </Typography>
                      <Typography align="right" variant="body1" component="p">
                        <br/>
                        See more about Monster Energy including all of its drinks at www.monsterenergy.com
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        {/* End Monster Energy */}
        <div className={classes.spacer}>
        </div>
        {/* SAP */}
        <div>
          <Grid container justify="flex-start">
            <Grid item sm={11} className={classes.leftBox}>
              <Grid container justify="space-between" alignItems="center">
                <Grid item sm={4} className={classes.sap}>
                  <img src="/images/sap.png" />
                </Grid>
                <Grid item sm={3}>
                  <Container maxWidth="sm">
                    <Grid container justify="flex-start" alignItems="center">
                      <FontAwesomeIcon icon={faGlobe} size="3x" className={classes.circleIcon} />
                      <Typography variant="h4"> / sap.com</Typography>
                    </Grid>

                    <Grid container justify="flex-start" alignItems="center">
                      <FontAwesomeIcon icon={['fab', 'facebook-f']} size="3x" className={classes.circleIcon} />
                      <Typography variant="h4"> / SAP</Typography>
                    </Grid>

                    <Grid container justify="flex-start" alignItems="center">
                      <FontAwesomeIcon icon={['fab', 'twitter']} size="3x" className={classes.circleIcon} />
                      <Typography variant="h4"> / SAP</Typography>
                    </Grid>
                  </Container>
                </Grid>
                <Grid item sm={5}>
                  <Typography variant="h3">SAP</Typography>
                  <Grid container justify="flex-start" alignItems="center">
                    <Grid item sm={1}>
                      <AnimatedBar keyFrames={[0.68, 0.69, 0.7]} values={[0, 90, 180]} width={2} />
                    </Grid>
                    <Grid item sm={11}>
                      <Typography variant="body1" component="p">
                        As market leader in enterprise application software, SAP helps companies of all sizes and industries run better. From back office to boardroom, warehouse to storefront, desktop to mobile device – SAP empowers people and organizations to work together more efficiently and use business insight more effectively to stay ahead of the competition. SAP applications and services enable more than 378,000 business and public sector customers to operate profitably, adapt continuously, and grow sustainably.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        {/*  End SAP */}
        <div className={classes.spacer}>
        </div>
        {/* Secret Lab */}
        <div>
          <Grid container justify="flex-end">
            <Grid item sm={11} className={classes.rightBox}>
              <Grid container direction="row-reverse" justify="space-between" alignItems="center">
                <Grid item sm={4} className={`${classes.secretlab} ${classes.alignRight}`}>
                  <img src="/images/secretlab.png" />
                </Grid>
                <Grid item sm={2}>
                  <Container maxWidth="sm">
                    <Grid container justify="flex-start" alignItems="center">
                      <FontAwesomeIcon icon={faGlobe} size="3x" className={classes.circleIcon} />
                      <Typography variant="h5"> / secretlab.com</Typography>
                    </Grid>

                    <Grid container justify="flex-start" alignItems="center">
                      <FontAwesomeIcon icon={['fab', 'facebook-f']} size="3x" className={classes.circleIcon} />
                      <Typography variant="h5"> / SecretLab</Typography>
                    </Grid>

                    <Grid container justify="flex-start" alignItems="center">
                      <FontAwesomeIcon icon={['fab', 'twitter']} size="3x" className={classes.circleIcon} />
                      <Typography variant="h5"> / secretlabchairs</Typography>
                    </Grid>
                  </Container>
                </Grid>
                <Grid item sm={5}>
                  <Typography align="right" variant="h3">SecretLab</Typography>
                  <Grid container direction="row-reverse" justify="flex-start" alignItems="center">
                    <Grid item sm={1}>
                      <AnimatedBar keyFrames={[0.74, 0.75, 0.76]} values={[0, 90, 180]} width={2} style={{float:'right'}} />
                    </Grid>
                    <Grid item sm={11}>
                      <Typography align="right" variant="body1" component="p">
                      Secretlab was established in 2014 to create the pinnacle of gaming seats—each extensively designed and engineered with only materials of the highest grade to ensure absolute comfort and unparalleled support. Today, Secretlab is the global choice of gaming seats for the world's most premier gaming tournaments, top esports professionals, and over 300,000 satisfied users from more than 50 countries worldwide, alongside rave reviews from international media publications. And we're only getting started.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        {/* End Secret Lab */}
        <div className={classes.spacer}>
        </div>
        {/* Twitch */}
        <div>
          <Grid container justify="flex-start">
            <Grid item sm={11} className={classes.leftBox}>
              <Grid container justify="space-between" alignItems="center">
                <Grid item sm={4} className={classes.twitch}>
                  <img src="/images/twitch.png" />
                </Grid>
                <Grid item sm={3}>
                  <Container maxWidth="sm">
                    <Grid container justify="flex-start" alignItems="center">
                      <FontAwesomeIcon icon={faGlobe} size="3x" className={classes.circleIcon} />
                      <Typography variant="h5"> / twitch.tv/team/teamliquid</Typography>
                    </Grid>

                    <Grid container justify="flex-start" alignItems="center">
                      <FontAwesomeIcon icon={['fab', 'facebook-f']} size="3x" className={classes.circleIcon} />
                      <Typography variant="h5"> / Twitch</Typography>
                    </Grid>

                    <Grid container justify="flex-start" alignItems="center">
                      <FontAwesomeIcon icon={['fab', 'twitter']} size="3x" className={classes.circleIcon} />
                      <Typography variant="h5"> / Twitch</Typography>
                    </Grid>
                  </Container>
                </Grid>
                <Grid item sm={5}>
                  <Typography variant="h3">Twitch</Typography>
                  <Grid container justify="flex-start" alignItems="center">
                    <Grid item sm={1}>
                      <AnimatedBar keyFrames={[0.8, 0.81, 0.82]} values={[0, 90, 180]} width={2} />
                    </Grid>
                    <Grid item sm={11}>
                      <Typography variant="body1" component="p">
                        Founded in June 2011, Twitch is the world’s leading social video platform and community for gamers. Each month, more than 100 million community members gather to watch and talk about video games with more than 1.7 million broadcasters. Twitch’s live and video on demand platform caters to the entire video game industry, including game developers, publishers, media outlets, events, casual content creators, and the entire esports scene.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        {/* End Twitch*/}

        <Divider className={classes.divider}/>
      </main>
    </Layout>
  );
}

export default Partners;