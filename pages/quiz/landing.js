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
import Head from 'next/head';
import Link from 'next/link';

// Components
import Layout from '../../components/Layout';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.primary.dark,
        letterSpacing: '1px',
        padding: theme.spacing(3),
    },
    heroImage: {
        backgroundColor: theme.palette.primary.main,
    },
    quizBackground: {
        backgroundColor: '#fff',
      },
    quizContainer: {
        padding: theme.spacing(4),
        color: theme.palette.primary.main,
    },
    description: {
        fontSize: '32px',
    },
    quizBtn: {
        boxShadow: '0 0 1px rgba(0, 0, 0, 0.05)',
        backgroundColor: theme.palette.primary.main,
        marginTop: theme.spacing(6),
        padding: theme.spacing(3),
        transition: 'transform 0.2s',
        '&:hover': {
            transform: 'scale(1.2)',
            backgroundColor: theme.palette.info.main,
        },
    },
}));

const Latest = () => {
    const classes = useStyles();
  
    return (
        <Layout barVariant='static'>
            <Head>
                <title>
                    Start your Quiz
                </title>
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

                <div className={`${classes.quizBackground} ${classes.quizContainer}`}>
                <Container maxWidth="xl" className={classes.fullHeight} >
                    <Grid container justify="center" direction="column" alignItems="center" align="center" className={classes.description}>
                        <Grid item>
                        <Typography variant="h3">
                            Take the Quiz to see what kind of Team Liquid player you are!
                        </Typography>
                        </Grid>
                        <Grid item>
                        <Typography variant="body1">
                            Your path through this quiz will determine what team you belong to. <br />
                            Which team will you land in?
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" direction="row" alignItems="center">
                        <Grid item>
                            <img src="/images/blue-faction.jpg" />
                            <Typography variant="h2" align="center">
                                Blue Team
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src="/images/red-faction.jpg" />
                            <Typography variant="h2" align="center">
                                Red Team
                            </Typography>
                        </Grid>
                        <Grid>
                            <img src="/images/yellow-faction.jpg" />
                            <Typography variant="h2" align="center">
                                Yellow Team
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container justify="center" alignItems="center">
                        <Grid item>
                            <Link href="/quiz/questions">
                                <Button size="large" className={classes.quizBtn}>
                                    <Typography variant="h4">
                                        Take the Quiz
                                    </Typography>
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
                </div>
            </main>


        </Layout>
    );
}

export default Latest;