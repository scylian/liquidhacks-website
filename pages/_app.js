// Basic Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

// Material-UI / Styling
import { useMediaQuery, CssBaseline } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/core';
import createCache from '@emotion/cache';

// Fonts
import { KanedaGothic,
         KanedaGothicItalic,
         KanedaGothicMedium,
         KanedaGothicMediumItalic,
         KanedaGothicLight,
         KanedaGothicLightItalic,
         KanedaGothicExtraLight,
         KanedaGothicExtraLightItalic,
         KanedaGothicBold,
         KanedaGothicBoldItalic,
         KanedaGothicExtraBold,
         KanedaGothicExtraBoldItalic,
         KanedaGothicBlack,
         KanedaGothicBlackItalic } from '../constants/fonts';

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
        },
        overrides: {
          MuiCssBaseline: {
            '@global': {
              '@font-face': [
                KanedaGothic,
                KanedaGothicItalic,
                KanedaGothicMedium,
                KanedaGothicMediumItalic,
                KanedaGothicLight,
                KanedaGothicLightItalic,
                KanedaGothicExtraLight,
                KanedaGothicExtraLightItalic,
                KanedaGothicBold,
                KanedaGothicBoldItalic,
                KanedaGothicExtraBold,
                KanedaGothicExtraBoldItalic,
                KanedaGothicBlack,
                KanedaGothicBlackItalic
              ]
            }
          }
        }
      }),
    [prefersDarkMode],
  );
  
  return (
    <CacheProvider value={cache}>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="preload" href="/fonts/Kaneda Gothic Family/KanedaGothic-Regular.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Kaneda Gothic Family/KanedaGothic-Regular-Italic.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Kaneda Gothic Family/KanedaGothic-Medium.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Kaneda Gothic Family/KanedaGothic-Medium-Italic.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Kaneda Gothic Family/KanedaGothic-Light.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Kaneda Gothic Family/KanedaGothic-Light-Italic.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Kaneda Gothic Family/KanedaGothic-ExtraLight.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Kaneda Gothic Family/KanedaGothic-ExtraLight-Italic.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Kaneda Gothic Family/KanedaGothic-Bold.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Kaneda Gothic Family/KanedaGothic-Bold-Italic.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Kaneda Gothic Family/KanedaGothic-ExtraBold.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Kaneda Gothic Family/KanedaGothic-ExtraBold-Italic.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Kaneda Gothic Family/KanedaGothic-Black.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Kaneda Gothic Family/KanedaGothic-Black-Italic.otf" as="font" crossOrigin="" />
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