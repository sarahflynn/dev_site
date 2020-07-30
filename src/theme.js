import { createMuiTheme } from '@material-ui/core/styles';

const devBlue = '#0B72B9';
const devOrange = '#FFBA60';

export default createMuiTheme({
  palette: {
    common: {
      blue: devBlue,
      orange: devOrange,
    },
    primary: {
      main: devBlue,
    },
    secondary: {
      main: devOrange,
    },
  },
  typography: {
    fontFamily: 'proxima-nova',
  },
});
