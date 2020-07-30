import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../theme';
import Routes from '../../routes';
import { Header } from '../index';

const App = (): React.ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
