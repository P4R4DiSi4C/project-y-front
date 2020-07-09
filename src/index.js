// libs
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Grommet } from 'grommet';
import { ThemeProvider } from 'styled-components';

// components
import App from './views/App';

// style
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';

import store from './redux/store';

// theme
const theme = {
	global: {
		colors: {
			brand: '#598dff ',
			background: '#fafbf8',
			background_comp: '#ffffff',
			border: '#e9e9e8',
			focus: 'brand',
			icon: {
				light: '#000000',
			},
		},
	},
	styled: {
		font:
			'-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
	},
};

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Grommet theme={theme} full>
			<Provider store={store}>
				<App />
			</Provider>
		</Grommet>
	</ThemeProvider>,
	document.getElementById('root')
);
