import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHsitory/PaymentHistory";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import Reservation from "../pages/Dashboard/Reservation/Reservation";
import Contact from "../pages/Dashboard/Contact/Contact";
import AddReview from "../pages/Dashboard/AddReview/AddReview";
import ManageBookings from "../pages/Dashboard/ManageBookings/ManageBookings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path:"dashboard",
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      //normal user routes

    {
      path:"reservation",
      element:<Reservation></Reservation>
    },
    {
      path:"UserHome",
      element:<UserHome></UserHome>,
    },
    {
      path:"cart",
      element:<Cart></Cart>,
    },
    {
      path:'payment',
      element:<Payment></Payment>
    },
    {
      path:'review',
      element:<AddReview></AddReview>
    },
    {
      path:'paymentHistory',
      element:<PaymentHistory></PaymentHistory>
    },
    {
      path:'contact',
      element:<Contact></Contact>
    },
    //admin route only
    {
      path:"adminHome",
      element:<AdminRoute><AdminHome></AdminHome></AdminRoute>

    },
    {
      path:"addItems",
      element:<AdminRoute><AddItems></AddItems></AdminRoute>

    },
    {
      path:"manageItems",
      element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
    },
    {
      path:"manageBookings",
      element:<AdminRoute><ManageBookings></ManageBookings></AdminRoute>
    },
    {
      path: 'updateItem/:id',
      element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
      loader: ({params}) => fetch(`https://y-amber-kappa.vercel.app/menu/${params.id}`)
    },
    {
      path:"allUsers",
      element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
    }
    ]
  }
]);
