// libs
import React from 'react';
import ReactDOM from 'react-dom';

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
    }
};


ReactDOM.render(
    <Grommet theme={theme} full>
            <App />
    </Grommet>,
  document.getElementById('root')
);
