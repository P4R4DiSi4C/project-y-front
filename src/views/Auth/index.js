// libs
import React from 'react';

// components
import { Box, Tabs, Tab } from 'grommet';

import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

export default () => {
  return (
    <Box flex fill justify='center' align='center' direction='column'>
      <Box
        background='background_comp'
        round='small'
        pad='medium'
        border={{ color: 'border', size: 'xsmall' }}
        elevation='small'
        width='large'
      >
        <Tabs>
          <Tab title='CONNEXION'>
            <SignIn />
          </Tab>
          <Tab title='INSCRIPTION'>
            <SignUp />
          </Tab>
        </Tabs>
      </Box>
    </Box>
  );
};
