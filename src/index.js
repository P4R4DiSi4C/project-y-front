// libs
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

// components
import App from './views/App';
import { Grommet } from 'grommet';

// style
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';

// theme
const theme = {
    global: {
        colors: {
            brand: '#F2F2F2 ',
        }
    },
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif'
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
      <Grommet theme={theme} full>
            <App />
        </Grommet>
  </ThemeProvider>,
  document.getElementById('root')
);
