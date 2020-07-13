// libs
import React from 'react';
import Routes from '../../router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { GlobalStyles } from '../../components/Globalstyle';

export default () => {
  return (
    <>
      <GlobalStyles />
      <ToastContainer />
      <Routes />
    </>
  );
};
