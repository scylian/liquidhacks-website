// Basic Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

// Material-UI / Styling
import { useMediaQuery, CssBaseline } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/core';
import createCache from '@emotion/cache';
import { DEEP_NAVY, LIQUID_BLUE, PITCH_WHITE, LIQUID_GOLD_DARK, LIQUID_GOLD_LIGHT } from '../constants/liquidcolors';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faEnvelope);

export const cache = createCache();

const MyApp = ({ Component, pageProps }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        typography: {
          fontFamily: [
            '"Kaneda Gothic"',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
        },
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: LIQUID_BLUE,
            dark: DEEP_NAVY,
          },
          secondary: {
            main: PITCH_WHITE
          },
          info: {
            light: LIQUID_GOLD_LIGHT,
            main: LIQUID_GOLD_DARK,
          }
        },
      }),
    [prefersDarkMode],
  );
  
  return (
    <CacheProvider value={cache}>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;