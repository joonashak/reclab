import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const baseFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';

const commonHeadingStyles = {
  fontFamily: '"Oxygen", "Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 600,
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FCFF00',
    },
    secondary: {
      main: '#F1E0FE',
      dark: '#D9A7FF',
    },
  },

  spacing: 16,

  typography: {
    fontSize: 18,
    fontFamily: baseFontFamily,
    h1: {
      fontSize: 50,
      ...commonHeadingStyles,
    },
    h2: {
      fontSize: 40,
      ...commonHeadingStyles,
    },
    h3: {
      fontSize: 35,
      ...commonHeadingStyles,
    },
    h4: {
      fontSize: 30,
      ...commonHeadingStyles,
    },
    h5: {
      fontSize: 25,
      ...commonHeadingStyles,
    },
    h6: {
      fontSize: 25,
      ...commonHeadingStyles,
    },
    caption: {
      fontSize: '1.333rem !important',
      padding: '0 10%',
      display: 'block',
      textAlign: 'justify',
      fontStyle: 'italic',
      marginBottom: '2rem',
      '& p': {
        margin: 0,
      },
    },
  },
});

export default responsiveFontSizes(theme);
