// libs
import React from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// routes
import Routes from '../../router';

// redux
import { setUserState } from '../../redux/user/user.actions';

// globalstyle
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
