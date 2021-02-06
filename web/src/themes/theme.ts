import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FCFF00',
    },
    secondary: {
      main: '#F1E0FE',
    },
  },

  spacing: 16,

  typography: {
    fontSize: 18,
    h1: {
      fontSize: 50,
      fontFamily: 'Montserrat',
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: 40,
      fontFamily: 'Montserrat',
      fontStyle: 'italic',
      textTransform: 'uppercase',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: 35,
      fontFamily: 'Montserrat',
      fontStyle: 'italic',
      textTransform: 'uppercase',
    },
    h4: {
      fontSize: 30,
      fontFamily: 'Montserrat',
      fontStyle: 'italic',
      textTransform: 'uppercase',
      fontWeight: 'bold',
    },
    h5: {
      fontSize: 25,
      fontFamily: 'Montserrat',
      fontStyle: 'italic',
      textTransform: 'uppercase',
    },
    h6: {
      fontSize: 25,
      fontFamily: 'Montserrat',
      fontStyle: 'italic',
      textTransform: 'uppercase',
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
