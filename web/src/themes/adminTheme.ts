import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { blue, pink } from '@material-ui/core/colors';

const adminTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },

  spacing: 16,

  typography: {
    fontSize: 16,
  },
});

export default responsiveFontSizes(adminTheme);
