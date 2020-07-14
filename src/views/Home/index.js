// libs
import React from 'react';

// components
import { Box } from 'grommet';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

export default () => {
  return (
    <Box direction="row" fill="vertical" align="center" justify="evenly">
      <SignUp />
      <SignIn />
    </Box>
  );
};
