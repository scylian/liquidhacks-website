// Basic Dependencies
import React, { useState } from 'react';

// Components
import Layout from '../components/Layout';

// Material-UI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

// Next.js
import Head from 'next/head';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& h6,span,text,p': {
      fontFamily: 'Raleway'
    }
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  heroContent: {
    color: theme.palette.primary.dark,
    letterSpacing: '1px',
    paddingBottom: theme.spacing(3),
  },
  heroImage: {
    height: '50vh',
    backgroundImage: 'url(/images/quiz-hero.png)',
    backgroundSize: 'cover'
  },
  quizContainer: {
    padding: theme.spacing(10),
  }
}));

const getSteps = () => {
  return ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'];
}

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return `Do you put milk before cereal?`;
    case 1:
      return `Is Blue the best mascot?`;
    case 2:
      return `Pineapple on pizza?`;
    case 3:
      return `What is your favorite Jersey Mike's Sub?`
    case 4:
      return `What's the best state of matter?`;
    default:
      return 'Unknown step';
  }
}

const getStepAnswers = (step) => {
  switch(step) {
    case 0:
      return ["Yes, I'm a heathen", "No way, Jose!"];
    case 1:
      return ["Of course!", "bLuE iS Da beS eVurR", "DUH my favorite COLOR!", "I'm blue da ba dee da ba daa"];
    case 2:
      return ["No, GROSS!", "Yummy for my tummy!"];
    case 3:
      return ["The Original Italian", "Jersey Shore's Favorite", "The Veggie", "Roast Beef and Provolone"];
    case 4:
      return ["Solid", "Gas", "Liquid"];
    default:
      return [];
  }
}

const Quiz = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const [value, setValue] = useState({
    0: '',
    1: '',
    2: '',
    3: '',
    4: ''
  });

  const handleChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    console.log(value);
    setValue({
      ...value,
      [event.target.name]: event.target.value
    });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setValue({
      0: '',
      1: '',
      2: '',
      3: '',
      4: ''
    });
  };

  const RadioButtons = ({ step }) => {
    const answers = getStepAnswers(step);

    return (
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="answers"
          name={step}
          value={value[step]}
          onChange={handleChange}
          row
        >
          {answers.map((label, index) => {
            return (
              <FormControlLabel value={`${index}`} control={<Radio />} label={label} />
            )
          })}
        </RadioGroup>
      </FormControl>
    );
  }

  const QuizForm = () => {
    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel><Typography variant="h6">{label}</Typography></StepLabel>
              <StepContent>
                <Typography variant="h6">{getStepContent(index)}</Typography>
                <RadioButtons step={index} />
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }

  return (
    <Layout barVariant="static">
      <Head>
        <title>Quiz</title>
      </Head>

      <main>
        <div className={`${classes.heroContent} ${classes.heroImage}`}>
          <Container maxWidth="md"></Container>
        </div>
        <div className={classes.quizContainer}>
          <Container maxWidth="md">
            <QuizForm />
          </Container>
        </div>
      </main>
    </Layout>  
  );
}

export default Quiz;