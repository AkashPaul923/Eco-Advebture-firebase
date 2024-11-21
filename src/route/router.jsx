import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../components/Error";
import HomeLayout from "../layout/HomeLayout";
import AuthLayout from "../layout/AuthLayout";
import LogIn from "../components/LogIn";
import Register from "../components/Register";
import AdventureDetail from "../components/AdventureDetail";
import MyProfile from "../layout/MyProfile";
import UpdateProfile from "../layout/UpdateProfile";
import PrivateRoute from "../components/Auth/PrivateRoute";
import ResetPassword from "../components/ResetPassword";


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
          path: "/adventure/detail/:id",
          element: <PrivateRoute><AdventureDetail></AdventureDetail></PrivateRoute>,
          loader: async({params}) =>{
            const res = await fetch("/adventureData.json")
            const data = await res.json()
            const sData = data.find( d => d.id === params.id)
            return sData
          }
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
                {
                    path: "/auth/resetpassword",
                    element: <ResetPassword></ResetPassword>
                },
            ]
        },
        {
          path: "/myprofile",
          element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>,
        },
        {
          path: "/updateprofile",
          element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
        }
      ]
    },
  ]);

export default router;