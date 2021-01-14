import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import amber from '@material-ui/core/colors/amber';

const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: purple,
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
  },
});

export default responsiveFontSizes(theme);
