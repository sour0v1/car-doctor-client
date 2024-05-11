import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import LogIn from "../pages/form/LogIn";
import SignUp from "../pages/form/SignUp";
import About from "../pages/home/About";
import Checkout from "../pages/checkout/Checkout";
import Bookings from "../pages/bookings/Bookings";

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
          loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
          element : <Checkout></Checkout>
        },
        {
          path : '/bookings',
          element : <Bookings></Bookings>
        }
      ]
    },
  ]);


export default router;