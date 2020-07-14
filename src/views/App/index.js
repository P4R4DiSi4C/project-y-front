// libs
import React from 'react';
import { setAxiosUserToken } from '../../axios';
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
  const user = localStorage.getItem('user');
  if (user) {
    setAxiosUserToken(JSON.parse(user).token);
    dispatch(setUserState(JSON.parse(user)));
  }

  return (
    <>
      <GlobalStyles />
      <ToastContainer />
      <Routes />
    </>
  );
};
