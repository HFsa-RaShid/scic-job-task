
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Components/Home/Home";
import SignUp from "../Components/SignUp/SignUp";
import LogIn from "../Components/signIn/LogIn";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
    //   errorElement: <ErrorPage></ErrorPage>,
      
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
            path: "/signUp",
            element: <SignUp></SignUp>,
        },
        {
            path: "/login",
            element: <LogIn></LogIn>,
        },
      
      ],
    },
  ]);