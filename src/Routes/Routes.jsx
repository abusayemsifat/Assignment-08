import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import AllAps from '../pages/AllAps/AllAps';
import Installation from '../pages/Installation/Installation';
import AppDetails from '../pages/AppDetails/AppDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home
      },
      {
        path: "/allaps",
        Component: AllAps
      },
      {
        path: "/installation",
        Component: Installation
      },
      {
        path: '/details/:id',
        Component: AppDetails
      },
    ]
  },
]);