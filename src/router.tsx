import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
