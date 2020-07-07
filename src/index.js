// libs
import React from 'react';
import ReactDOM from 'react-dom';

// components
import App from './views/App';
import { Grommet } from 'grommet';
import {ThemeProvider} from 'styled-components';

// style
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';

// theme
const theme = {
    global: {
        colors: {
            brand: '#F2F2F2 ',
            bg_main: '#DADADA'
        }
    },
    styled: {
        font: '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'
    }
};

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Grommet theme={theme} full>
            <App />
        </Grommet>
    </ThemeProvider>,
  document.getElementById('root')
);
