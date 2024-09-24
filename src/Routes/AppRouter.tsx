
// import Contact from "../Pages/Contact/Contact";
import Layouts from "../layouts/Layouts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import Bookings from "../Pages/Bookings";
import Profile from "../Pages/Profile";
import Search from "../Pages/Search";



export default function AppRouter() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Layouts/>,
          children: [
            { path: "/", element: <Home/> },
            { path: "/bookings", element: <Bookings/> },
            { path: "/profile", element: <Profile/> },
            { path: "/search", element: <Search/> },
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
