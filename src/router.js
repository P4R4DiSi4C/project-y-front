// libs
import React from 'react';
import { useEffect } from "react";
import { useRoutes } from 'raviger';

// views
import Home from './views/Home';
import Dashboard from './views/Dashboard';


const routes = {
    '/': () => <Home />,
    '/dashboard*': () => <Dashboard />
};

const Routes = () => {
    const Routes = useRoutes(routes);
    useEffect(() => window.scrollTo(0, 0));

    return Routes || "Not Found";
};

export default Routes;