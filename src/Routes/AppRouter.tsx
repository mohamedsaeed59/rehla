
// import Contact from "../Pages/Contact/Contact";
import Layouts from "../layouts/Layouts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import Bookings from "../Pages/Bookings";
import Profile from "../Pages/Profile";
import Search from "../Pages/Search";
import SavedChalets from "../Pages/SavedChalets";
import Register from "../Pages/auth/Register";
import Login from "../Pages/auth/Login";
import Otp from "../Pages/Otp";
import Location from "../Pages/Location";





export default function AppRouter() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Layouts/>,
          children: [
            { path: "/", element: <Login/> },
            { path: "/home", element: <Home/> },
            { path: "/otp", element: <Otp/> },
            { path: "/location", element: <Location/> },
            { path: "/bookings", element: <Bookings/> },
            { path: "/profile", element: <Profile/> },
            { path: "/search", element: <Search/> },
            { path: "/savedchalets", element: <SavedChalets/> },
            { path: "/register", element: <Register/> },
            // { path: "*", element: <ErrorPage/> },
          ],
        },
      ]);
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}
