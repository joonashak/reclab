import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import amber from '@material-ui/core/colors/amber';

const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: purple,
  },
  spacing: 16,
});

export default responsiveFontSizes(theme);
