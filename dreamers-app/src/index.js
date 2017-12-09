import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import myMuiTheme from './Components/ReusableComponents/MuiTheme';

import App from './App';

const Root = () => (
  <MuiThemeProvider muiTheme={myMuiTheme}>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
