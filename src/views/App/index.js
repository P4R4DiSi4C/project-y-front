// libs
import React from 'react';
import Routes from '../../router';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { GlobalStyles } from '../../components/Globalstyle';

export default () => {
  const dispatch = useDispatch();

  if (localStorage.getItem('user')) {
    dispatch(setUserState(JSON.parse(localStorage.getItem('user'))));
  }

  return (
    <>
      <GlobalStyles />
      <ToastContainer />
      <Routes />
    </>
  );
};
