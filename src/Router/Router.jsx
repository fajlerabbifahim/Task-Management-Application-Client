import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Home from "../Pages/Home/Home/Home";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
    ],
  },
]);

export default router;
