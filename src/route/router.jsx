import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../components/Error";
import HomeLayout from "../layout/HomeLayout";
import AuthLayout from "../layout/AuthLayout";
import LogIn from "../components/LogIn";
import Register from "../components/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children: [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>
        },
        {
            path: "/auth",
            element: <AuthLayout></AuthLayout>,
            children:[
                {
                    path: "/auth/login",
                    element: <LogIn></LogIn>
                },
                {
                    path: "/auth/register",
                    element: <Register></Register>
                },
            ]
        },
      ]
    },
  ]);

export default router;