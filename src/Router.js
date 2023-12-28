import React from 'react';
import Main from './layout/Main';
import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import TvShows from './pages/TVShows';
import NotFound from './pages/Not Found';
import FilmDetails from './pages/FilmDetails';
import Register from './pages/Auth/Register';
import Auth from './layout/Auth';
import ActorPage from './pages/ActorPage';
import ShowsByGenre from './pages/ShowsByGenre';
import Favorites from './pages/Favorites';
import AboutMe from './pages/AboutMe';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Profile from './pages/Auth/Profile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/home",
        element: <PrivateRoute><Home /></PrivateRoute>,
      },
      {
        path: "/show/:filmId",
        element: <PrivateRoute><FilmDetails /></PrivateRoute>,
      },
      {
        path: "/tvshows",
        element: <PrivateRoute><TvShows /></PrivateRoute>,
      },
      {
        path: "/actor/:actorId",
        element: <PrivateRoute><ActorPage /></PrivateRoute>,
      },
      {  path: '/show/Genre/:genres',
        element: <PrivateRoute><ShowsByGenre/></PrivateRoute>
      },
      {  path: '/favorites',
      element: <PrivateRoute><Favorites /></PrivateRoute>
      },
      {  path: '/aboutme',
      element: <PrivateRoute><AboutMe /></PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute> <Profile/></PrivateRoute>,
      },
    ],
  },
  {
    path: "auth/",
    element: <Auth />,
    errorElement: <NotFound />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      // {
      //   path: "/show/:filmId",
      //   element: <FilmDetails />,
      // }
    ],
  },
]);

export default router;
