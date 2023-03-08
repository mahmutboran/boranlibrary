import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Navbar from "../components/navbar/Navbar";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import PrivateRouter from "./PrivateRouter";
import { useState } from "react";
import Footer from "../components/footer/Footer";

const AppRouter = () => {
  const [storageUser, setStorageUser] = useState();
  const router = createBrowserRouter([
    {
      element: (
        <>
          <Navbar storageUser={storageUser} setStorageUser={setStorageUser} />
          <Outlet />
          <Footer/>
        </>
      ),
      children: [
        {
          element: <PrivateRouter storageUser={storageUser} />,
          children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "/about",
              element: <About />,
            },
          ],
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login setStorageUser={setStorageUser} />,
        },
        {
          path: "/logout",
          element: <Login />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
