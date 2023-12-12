import Main from './layout/Main';
import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import TvShows from './pages/TVShows';
import NotFound from './pages/Not Found';
import FilmDetails from './pages/FilmDetails';
import Register from './pages/Auth/Register';
import Auth from './layout/Auth';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/show/:filmId",
        element: <FilmDetails />,
      },
      {
        path: "/tvshows",
        element: <TvShows />
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
