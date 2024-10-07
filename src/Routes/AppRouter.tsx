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
import TellUs from "../Components/auth/TellUs";
import TellUsNext from "../Components/auth/TellUsNext";
import EditProfile from "../Components/Profile/EditProfile";
import Chate from "../Components/Global/Chate";
import PrivacyPolicy from "../Components/Profile/PrivacyPolicy";
import ProfileTermsConditions from "../Components/Profile/ProfileTerms&Conditions";
import CheckOut from "../Pages/CheckOut";
import ChaletDetails from "../Components/Chalet/ChaletDetails";
import BookingConfirmation from "../Components/Bookings/BookingConfirmation";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/login",
          element: <Login />,
        },
        { path: "/otp", element: <Otp /> },
        { path: "/register", element: <Register /> },
        { path: "/tellUs", element: <TellUs /> },
        { path: "/tell-us-next", element: <TellUsNext /> },
        { path: "/bookings", element: <Bookings /> },
        { path: "/profile", element: <Profile /> },
        { path: "/search", element: <Search /> },
        { path: "/savedchalets", element: <SavedChalets /> },
        { path: "/check-out", element: <CheckOut/> },
        { path: "/editprofile", element: <EditProfile /> },
        { path: "/chate", element: <Chate /> },
        { path: "/chalet/:id", element: <ChaletDetails /> },
        { path: "/privacy-policy", element: <PrivacyPolicy /> },
        { path: "/terms-conditions", element: <ProfileTermsConditions /> },
        { path: "/booking-confirmation", element: <BookingConfirmation/> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
