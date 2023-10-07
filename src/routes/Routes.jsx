import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Events from "../Pages/Events";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Contact from "../Pages/Contact";
import Register from "../Pages/Register";
import Details from "../Pages/Details";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/service.json')
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: 'events',
        element: <Events></Events>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }
    ],
  },
]);

export default router;
