// libs
import React from 'react';
import { useEffect } from 'react';
import { useRoutes } from 'raviger';

// components
import PrivateRoute from './components/PrivateRoute';

// views
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import Client from './views/Client';
import Auth from './views/Auth';

const routes = {
  '/': () => <Home />,
  '/auth': () => <Auth />,
  '/dashboard*': () => <PrivateRoute component={Dashboard} />,
  '/client': () => <Client />
};

const Routes = () => {
  const Routes = useRoutes(routes);
  useEffect(() => window.scrollTo(0, 0));

  return Routes || 'Not Found';
};

export default Routes;
