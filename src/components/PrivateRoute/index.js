import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'raviger';

export default ({ component: Component }) => {
  const user = useSelector((state) => state.user);

  // CHECK IF COMPANY EXISTS + IF USER HAS RIGHTS
  if (user.token.length <= 0) {
    return <Redirect to='/' />;
  }

  return <Component />;
};
