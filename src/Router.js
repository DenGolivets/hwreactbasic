import Main from './layout/Main';
import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import TvShows from './pages/TVShows';
import NotFound from './pages/Not Found';
import FilmDetails from './pages/FilmDetails';

// const mockData = [
//   {
//     id: 1,
//     name: "Home Alone",
//     image: "https://cdn.flickeringmyth.com/wp-content/uploads/2018/12/home-alone-2.jpg",
//     time: "1hr: 50mins",
//   },
//   {
//     id: 2,
//     name: "Black Adam",
//     image: "https://jesuitnews.com/wp-content/uploads/2022/12/BH2tZ9HHgDvePuvBYLQXzvH3tTB8q2Ov3rRylj5a.webp",
//     time: "2hr: 10mins",
//   },
//   {
//     id: 3,
//     name: "Back to the Future",
//     image: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2022/04/IMG_5943-scaled.jpeg",
//     time: "2hr: 50mins",
//   },
//   {
//     id: 4,
//     name: "Avengers",
//     image: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2019/10/IMG_1862.jpeg",
//     time: "2hr:30mins",
//   },
// ];

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
        path: "/show",
        element: <FilmDetails />,
      },
      {
        path: "/tvshows",
        element: <TvShows />
      }
    ],
  },
]);


export default router;
