import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import LogIn from "../pages/form/LogIn";
import SignUp from "../pages/form/SignUp";
import About from "../pages/home/About";
import Checkout from "../pages/checkout/Checkout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children : [
        {
          path : '/',
          element : <Home></Home>,
        },
        {
          path : 'login',
          element : <LogIn></LogIn>
        },
        {
          path : 'sign-up',
          element : <SignUp></SignUp>
        },
        {
          path : '/about',
          element : <About></About>
        },
        {
          path : '/checkout/:id',
          element : <Checkout></Checkout>
        }
      ]
    },
  ]);


export default router;