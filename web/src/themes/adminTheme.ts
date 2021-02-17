import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { blue, pink } from '@material-ui/core/colors';

export const codeBackground = '#ccc';

const adminTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },

  spacing: 16,

  typography: {
    fontSize: 16,
    h1: {
      fontSize: 40,
    },
    h2: {
      fontSize: 30,
    },
  },
});

export default responsiveFontSizes(adminTheme);
