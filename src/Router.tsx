import React from 'react';
import { useRoutes } from 'react-router-dom';
// components
import DefaultLayout from '@components/Layout/DefaultLayout';
// pages
import { Home } from '@pages/Home';
import { Favorites } from '@pages/Favorites';
import { Reservation } from '@pages/Reservation';
import { NotFound } from '@pages/NotFound';

function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        { path: '', element: <Home /> },
        { path: 'favorites', element: <Favorites /> },
      ],
    },
    {
      path: '/reservation',
      element: <Reservation />,
    },
    {
      path: '/*',
      element: <NotFound />,
    },
  ]);
}

export default Router;
